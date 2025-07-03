import express from 'express';
import cors from 'cors';
import pool from './dbConfig';
import dotenv  from 'dotenv';
import userRoute from "./routes/user"
import companyRoute from "./routes/company"
import tenderRoute from "./routes/tender"
import praposalRoute from "./routes/praposal"

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

pool.connect();

app.use(cors());
app.use(express.json());


app.use('/api/users', userRoute);
app.use('/api/company', companyRoute);
app.use('/api/tenders', tenderRoute);
app.use('/api/praposals', praposalRoute);

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
