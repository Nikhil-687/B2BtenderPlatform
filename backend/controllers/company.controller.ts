import { Request, Response } from 'express';
import pool from '../dbConfig';

export const createCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      name,
      industry,
      description,
      logo_url,
      owner_id,
      members = [],
      openTenders = [],
      applicationTenders = [],
      ongoingTenders = [],
      raisedPrevTenders = [],
      workedPrevTenders = []
    } = req.body;

    const result = await pool.query(
      `INSERT INTO companies (
        name, industry, description, logo_url, owner_id, members,
        "openTenders", "applicationTenders", "ongoingTenders",
        "raisedPrevTenders", "workedPrevTenders"
      ) VALUES (
        $1, $2, $3, $4, $5, $6::jsonb,
        $7::jsonb, $8::jsonb, $9::jsonb, $10::jsonb, $11::jsonb
      ) RETURNING *`,
      [
        name,
        industry,
        description,
        logo_url,
        owner_id,
        JSON.stringify(members),
        JSON.stringify(openTenders),
        JSON.stringify(applicationTenders),
        JSON.stringify(ongoingTenders),
        JSON.stringify(raisedPrevTenders),
        JSON.stringify(workedPrevTenders)
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('[createCompany]', err);
    res.status(500).json({ message: 'Failed to create company' });
  }
};

export const getAllCompanies = async (_: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query('SELECT * FROM companies ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error('[getAllCompanies]', err);
    res.status(500).json({ message: 'Failed to fetch companies' });
  }
};

export const getCompanyById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM companies WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Company not found' });
      return;
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('[getCompanyById]', err);
    res.status(500).json({ message: 'Failed to fetch company' });
  }
};

export const updateCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const {
      name,
      industry,
      description,
      logo_url,
      members,
      openTenders,
      applicationTenders,
      ongoingTenders,
      raisedPrevTenders,
      workedPrevTenders
    } = req.body;

    const result = await pool.query(
      `UPDATE companies SET
        name = COALESCE($1, name),
        industry = COALESCE($2, industry),
        description = COALESCE($3, description),
        logo_url = COALESCE($4, logo_url),
        members = COALESCE($5, members),
        "openTenders" = COALESCE($6, "openTenders"),
        "applicationTenders" = COALESCE($7, "applicationTenders"),
        "ongoingTenders" = COALESCE($8, "ongoingTenders"),
        "raisedPrevTenders" = COALESCE($9, "raisedPrevTenders"),
        "workedPrevTenders" = COALESCE($10, "workedPrevTenders")
       WHERE id = $11
       RETURNING *`,
      [
        name,
        industry,
        description,
        logo_url,
        JSON.stringify(members),
        JSON.stringify(openTenders),
        JSON.stringify(applicationTenders),
        JSON.stringify(ongoingTenders),
        JSON.stringify(raisedPrevTenders),
        JSON.stringify(workedPrevTenders),
        id
      ]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Company not found' });
      return;
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('[updateCompany]', err);
    res.status(500).json({ message: 'Failed to update company' });
  }
};

export const deleteCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM companies WHERE id = $1 RETURNING id', [id]);

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'Company not found' });
      return;
    }

    res.json({ message: 'Company deleted successfully' });
  } catch (err) {
    console.error('[deleteCompany]', err);
    res.status(500).json({ message: 'Failed to delete company' });
  }
};
export const addMemberToCompany = async (req: Request, res: Response): Promise<void> => {
    try {
      const companyId = parseInt(req.params.id);
      const { adderId, userId } = req.body;
  
      if (!userId || !adderId) {
        res.status(400).json({ message: 'Missing userId or adderId' });
        return;
      }
  
      const result = await pool.query(
        'SELECT members, owner_id FROM companies WHERE id = $1',
        [companyId]
      );
  
      if (result.rowCount === 0) {
        res.status(404).json({ message: 'Company not found' });
        return;
      }
  
      const company = result.rows[0];
  
      if (company.owner_id !== adderId) {
        res.status(403).json({ message: 'Only the company owner can add members' });
        return;
      }
  
      const currentMembers: number[] = company.members || [];
  
      if (currentMembers.includes(userId)) {
        res.status(200).json({ message: 'User already a member' });
        return;
      }
  
      const updatedMembers = [...currentMembers, userId];
  
      const update = await pool.query(
        'UPDATE companies SET members = $1 WHERE id = $2 RETURNING *',
        [JSON.stringify(updatedMembers), companyId]
      );
  
      res.json(update.rows[0]);
    } catch (err) {
      console.error('[addMemberToCompany]', err);
      res.status(500).json({ message: 'Failed to add member' });
    }
  };
  export const removeMemberFromCompany = async (req: Request, res: Response): Promise<void> => {
    try {
      const companyId = parseInt(req.params.id);
      const { removerId, userId } = req.body;
  
      if (!userId || !removerId) {
        res.status(400).json({ message: 'Missing userId or removerId' });
        return;
      }
  
      const result = await pool.query(
        'SELECT members, owner_id FROM companies WHERE id = $1',
        [companyId]
      );
  
      if (result.rowCount === 0) {
        res.status(404).json({ message: 'Company not found' });
        return;
      }
  
      const company = result.rows[0];
  
      if (company.owner_id !== removerId) {
        res.status(403).json({ message: 'Only the company owner can remove members' });
        return;
      }
  
      if (company.owner_id === userId) {
        res.status(403).json({ message: 'Why you want to remove yourself.' });
        return;
      }
  
      const currentMembers: number[] = company.members || [];
  
      if (!currentMembers.includes(userId)) {
        res.status(404).json({ message: 'User is not a member of the company' });
        return;
      }
  
      const updatedMembers = currentMembers.filter((id) => id !== userId);
  
      const update = await pool.query(
        'UPDATE companies SET members = $1 WHERE id = $2 RETURNING *',
        [JSON.stringify(updatedMembers), companyId]
      );
  
      res.json(update.rows[0]);
    } catch (err) {
      console.error('[removeMemberFromCompany]', err);
      res.status(500).json({ message: 'Failed to remove member' });
    }
  };
    