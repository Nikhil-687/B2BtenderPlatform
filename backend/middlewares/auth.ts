import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token required" });

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid token" });
  }
};
