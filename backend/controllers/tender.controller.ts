import { Request, Response } from 'express';
import pool from '../dbConfig';

// POST /api/tender
export const createTender = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      title,
      description,
      budget,
      deadline,
      contact_email,
      created_by   // now the only company identifier
    } = req.body;

    const result = await pool.query(
      `INSERT INTO tenders (
        title, description, budget, deadline, contact_email,
        created_by, status
      ) VALUES (
        $1, $2, $3, $4, $5,
        $6, 'open'
      ) RETURNING *`,
      [
        title,
        description,
        budget,
        deadline,
        contact_email,
        created_by
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('[createTender]', err);
    res.status(500).json({ message: 'Failed to create tender' });
  }
};

// GET /api/tender
export const getAllTenders = async (_: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query(
      `SELECT * FROM tenders ORDER BY created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error('[getAllTenders]', err);
    res.status(500).json({ message: 'Failed to fetch tenders' });
  }
};

// GET /api/tender/:id
export const getTenderById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM tenders WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'Tender not found' });
      return;
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('[getTenderById]', err);
    res.status(500).json({ message: 'Failed to fetch tender' });
  }
};

// PUT /api/tender/:id/complete
export const markTenderAsCompleted = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { winning_company, proof_url } = req.body;

    const result = await pool.query(
      `UPDATE tenders
       SET status = 'completed',
           winning_company = $1,
           proof_url = $2,
           updated_at = NOW()
       WHERE id = $3
       RETURNING *`,
      [winning_company, proof_url || null, id]
    );

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'Tender not found or already closed' });
      return;
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('[markTenderAsCompleted]', err);
    res.status(500).json({ message: 'Failed to mark tender as completed' });
  }
};
