import express from 'express'
import { configDotenv } from 'dotenv';
import { createClient } from '@supabase/supabase-js'
import pool from './dbConfig';
import { testDb } from './controllers/user.controller';

configDotenv();


// const supabaseUrl = 'https://nursmqproulosuxmwrkf.supabase.co'
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51cnNtcXByb3Vsb3N1eG13cmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNjIyMjQsImV4cCI6MjA2NjkzODIyNH0.TpX-8H_4QDkjUjQsupTNAgvTgemSlIsaO3AExWQq1sI"
// const supabase = createClient(supabaseUrl, supabaseKey)

// supabase.from('testdrive').upload('')
const port = process.env.PORT;

pool.connect();
console.log(port)


let app = express();

app.get('/test', (req, res) => {
    res.send(testDb);
})



app.listen(port , () => {
    console.log("Hello World at port ")
})
