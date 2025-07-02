import pool from "../dbConfig";

export const testDb = async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  console.log("db test passed", result)
  res.send({ result });
};
