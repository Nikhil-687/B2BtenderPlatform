import { Request, Response } from "express";
import pool from '../dbConfig';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import { z } from "zod";
import { generateToken } from "../utils/jwt";
import { getUserByEmail, createUser } from "../serviece/userserviece";

const SignupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  post: z.string().optional(),
  investment_limit: z.number().optional(),
  companies: z.array(z.any()).optional()  
});

const JWT_SECRET = process.env.JWT_SECRET || "JWTSECREATSHERE";

export const signup = async (req: Request, res: Response): Promise<void> => {
  const parsed = SignupSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.format() });
    return;
  }

  const { name, email, password, post, investment_limit, companies } = parsed.data;

  try {
    // Check if email already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      res.status(409).json({ error: "Email already registered." });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in DB
    const newUser = await createUser({
      name,
      email,
      password: hashedPassword
    });

    // Generate JWT token
    const token = generateToken({
      userId: newUser.id
    });

    res.status(201).json({ token });
  } catch (err) {
    console.error("[signup]", err);
    res.status(500).json({ error: "Internal server error" });
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

// export const getUserByEmail = async (email: string) => {
//   const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
//   return user || null;
// };

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


export const createCompany = async (req: Request, res: Response): Promise<void> => {
  const tokenUserId = req.user?.userId;
  const paramUserId = Number(req.params.id);

  if(tokenUserId == undefined){res.status(403).json({error:"Unothorised user"})}
  if (tokenUserId !== paramUserId) {
    res.status(403).json({ error: "Unauthorized action" });
    return;
  }

  try {
    const {
      name,
      industry,
      description,
      logo_url,
      members = [],
      openTenders = [],
      applicationTenders = [],
      ongoingTenders = [],
      raisedPrevTenders = [],
      workedPrevTenders = []
    } = req.body;

    
    const companyResult = await pool.query(
      `INSERT INTO companies (
        name, industry, description, logo_url, owner_id, members,
        "openTenders", "applicationTenders", "ongoingTenders",
        "raisedPrevTenders", "workedPrevTenders"
      ) VALUES (
        $1, $2, $3, $4, $5, $6::jsonb,
        $7::jsonb, $8::jsonb, $9::jsonb, $10::jsonb, $11::jsonb
      ) RETURNING id`,
      [
        name,
        industry,
        description,
        logo_url,
        tokenUserId,
        JSON.stringify(members),
        JSON.stringify(openTenders),
        JSON.stringify(applicationTenders),
        JSON.stringify(ongoingTenders),
        JSON.stringify(raisedPrevTenders),
        JSON.stringify(workedPrevTenders)
      ]
    );

    const companyId = companyResult.rows[0].id;

    const newToken = generateToken({
      userId: tokenUserId,
      companyId,
      role: "OWNER"
    });

    res.status(201).json({ message: "Company created", token: newToken });
  } catch (err) {
    console.error("[createCompany] Failed:", err);
    res.status(500).json({ error: "Failed to create company" });
  }
};
