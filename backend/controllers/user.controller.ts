import { Request, Response } from 'express';
import pool from '../dbConfig';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, post, investment_limit, companies } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: 'Email and password are required.' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const result = await pool.query(
      `INSERT INTO users (name, email, password, post, investment_limit, companies)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, name, email, post, companies`,
      [name, email, hashedPassword, post, investment_limit || 0, JSON.stringify(companies || [])]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('[createUser]', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAllUsers = async (_: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query('SELECT id, name, email, post, companies FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('[getAllUsers]', err);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT id, name, email, post, companies FROM users WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('[getUserById]', err);
    res.status(500).json({ message: 'Error fetching user' });
  }
};

export const getUserByEmail = async (email: string) => {
  const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return user || null;
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, post, investment_limit, companies } = req.body;

    const result = await pool.query(
      `UPDATE users SET
        name = COALESCE($1, name),
        post = COALESCE($2, post),
        investment_limit = COALESCE($3, investment_limit),
        companies = COALESCE($4, companies)
       WHERE id = $5
       RETURNING id, name, email, post, companies`,
      [name, post, investment_limit, JSON.stringify(companies), id]
    );

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('[updateUser]', err);
    res.status(500).json({ message: 'Error updating user' });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('[deleteUser]', err);
    res.status(500).json({ message: 'Error deleting user' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        companies: user.companies,
        isOwner: user.is_owner || false
      }
    });
  } catch (err) {
    console.error('[loginUser]', err);
    res.status(500).json({ message: 'Login failed' });
  }
};
