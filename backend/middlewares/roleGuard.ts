export const onlyOwner = (req: any, res: any, next: any) => {
    if (req.user.role !== "OWNER") return res.status(403).json({ error: "Owner access required" });
    next();
  };
  