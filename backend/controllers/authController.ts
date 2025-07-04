// import { Request, Response, NextFunction } from "express";
// import { z } from "zod";
// import bcrypt from "bcrypt";
// import { generateToken } from "../utils/jwt";
// import {
//   createUser,
//   getUserByEmail,
// } from "../serviece/userserviece";

// // Zod schemas
// const SignupSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   email: z.string().email("Invalid email format"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// const LoginSchema = z.object({
//   email: z.string().email("Invalid email format"),
//   password: z.string().min(6),
// });

// // Signup controller
// export const signup = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   const parsed = SignupSchema.safeParse(req.body);
//   if (!parsed.success) {
//      res.status(400).json({ error: parsed.error.format() });
//   }

//   const { name, email, password } = parsed.data;

//   try {
//     // Check if email already exists
//     const existingUser = await getUserByEmail(email);
//     if (existingUser) {
//        res.status(409).json({ error: "Email already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await createUser({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     // JWT with only userId — no companyId or role yet
//     const token = generateToken({ userId: user.id });

//      res.status(201).json({ token });
//   } catch (err) {
//     console.error("Signup error:", err);
//      res.status(500).json({ error: "Internal server error" });
//   }
// };

// // Login controller
// export const login = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   const parsed = LoginSchema.safeParse(req.body);
//   if (!parsed.success) {
//      res.status(400).json({ error: parsed.error.format() });
//   }

//   const { email, password } = parsed.data;

//   try {
//     const user = await getUserByEmail(email);
//     if (!user) {
//        res.status(401).json({ error: "Invalid email or password" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//        res.status(401).json({ error: "Invalid email or password" });
//     }

//     // Include company + role in JWT if present
//     const tokenPayload: any = { userId: user.id };
//     if (user.company_id) tokenPayload.companyId = user.company_id;
//     if (user.role) tokenPayload.role = user.role;

//     const token = generateToken(tokenPayload);

//      res.status(200).json({ token });
//   } catch (err) {
//     console.error("Login error:", err);
//      res.status(500).json({ error: "Internal server error" });
//   }
// };

import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { z } from "zod";
import { generateToken } from "../utils/jwt";
import { createUser, getUserByEmail } from "../serviece/userserviece";

const SignupSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const parsed = SignupSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.format() });
    return;
  }

  const { name, email, password } = parsed.data;

  try {
    const existing = await getUserByEmail(email);
    if (existing) {
      res.status(409).json({ error: "Email already exists" });
      return;
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await createUser({ name, email, password: hashed });
    const token = generateToken({ userId: user.id });

    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const parsed = LoginSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.format() });
    return;
  }

  const { email, password } = parsed.data;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const tokenPayload: any = { userId: user.id };
    if (user.role) tokenPayload.role = user.role;
    if (user.company_id) tokenPayload.companyId = user.company_id;

    const token = generateToken(tokenPayload);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};
