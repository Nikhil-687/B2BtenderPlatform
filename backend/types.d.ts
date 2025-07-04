import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
        companyId?: number;
        role?: "OWNER" | "MEMBER";
      } & JwtPayload;
    }
  }
}
