import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("connect", () => {
  console.log("✅ Connected to Supabase Postgres");
});

export default pool;
