import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT: number = Number(process.env.PORT || 5000);

// Middleware
app.use(
  cors({
    origin: (process.env.CORS_ORIGIN || "http://localhost:5173").split(","),
  })
);
app.use(express.json({ limit: "1mb" }));

// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({
    ok: true,
    service: "cvcreator-backend",
    ts: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
