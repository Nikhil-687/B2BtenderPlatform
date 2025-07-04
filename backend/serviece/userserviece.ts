import pool from "../dbConfig";
// import User from ""


type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    role?: string;
    company_id?: number;
  };

  
export const createUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<User> => {
  const result = await pool.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`,
    [name, email, password]
  );
  return result.rows[0];
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0] || null;
};

export const updateUserRoleAndCompany = async ({
  userId,
  role,
  companyId,
}: {
  userId: number;
  role: string;
  companyId: number;
}): Promise<User> => {
  const result = await pool.query(
    `UPDATE users SET role = $1, company_id = $2 WHERE id = $3 RETURNING *`,
    [role, companyId, userId]
  );
  return result.rows[0];
};


export const deleteUser = async (userId: number): Promise<void> => {
  await pool.query("DELETE FROM users WHERE id = $1", [userId]);
};

export const getUserById = async (id: number): Promise<User | null> => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0] || null;
  };
  