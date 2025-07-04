// controllers/authController.ts
import { Request, Response } from "express";
import { generateToken } from "../utils/jwt";
import bcrypt from "bcrypt";
import { z } from "zod";
import { getUserByEmail } from "./user.controller";
import { createUser } from "./../serviece/userserviece";

const SignupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  companyName: z.string().min(1, "Company name is required"),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signup = async (req: Request, res: Response) => {
    
    const zodOutput = SignupSchema.safeParse(req.body);
    if(!zodOutput.success){
        const error= zodOutput.error.format();
        res.send({error:error}). status(400);
    }
    
    const { name, email, password, companyName } = req.body;
    const prevUser = getUserByEmail(email);
    if(prevUser != null){
        res.send("User already existed").status(400);
    }

    const hashedPassword = bcrypt.hash(password, 10);
    
  const newUser = await createUser({ name, email, password: hashedPassword });

  const token = generateToken({ userId: newUser.id });

  return res.status(201).json({ token });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // TODO: Lookup user, compare hashed password
  const user = { id: 1, companyId: 123, role: "OWNER" }; // placeholder
  const token = generateToken(user);
  res.json({ token });
};
