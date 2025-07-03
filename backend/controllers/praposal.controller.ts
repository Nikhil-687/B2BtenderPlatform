import { Request, Response } from 'express';
import pool from '../dbConfig';

export const submitProposal = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      tender_id,
      company_id,
      bid_amount,
      proposal_text
    } = req.body;

    const result = await pool.query(
      `INSERT INTO proposals (tender_id, company_id, "bidAmount", description, status)
       VALUES ($1, $2, $3, $4, 'pending')
       RETURNING *`,
      [tender_id, company_id, bid_amount, proposal_text]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('[submitProposal]', err);
    res.status(500).json({ message: 'Failed to submit proposal' });
  }
};

export const getProposalsByTenderId = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query(
      `SELECT * FROM proposals WHERE tender_id = $1`,
      [req.params.tenderId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('[getProposalsByTenderId]', err);
    res.status(500).json({ message: 'Failed to fetch proposals' });
  }
};

export const updateProposalStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['accepted', 'rejected'].includes(status)) {
      res.status(400).json({ message: 'Invalid status' });
      return;
    }

    const result = await pool.query(
      `UPDATE proposals SET status = $1 WHERE id = $2 RETURNING *`,
      [status, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error('[updateProposalStatus]', err);
    res.status(500).json({ message: 'Failed to update proposal' });
  }
};
