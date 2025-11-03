import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { corsMiddleware } from "./middleware/coors";

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT || 5000);

// === Middleware ===
app.use(corsMiddleware);
app.use(express.json({ limit: "1mb" }));

// === Routes ===
app.get("/health", (_req: Request, res: Response) => {
  res.json({
    ok: true,
    service: "cvcreator-backend",
    ts: new Date().toISOString(),
  });
});

// === Start server ===
app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
  console.log(
    `🌐 CORS allowed for: ${process.env.CORS_ORIGIN || "http://localhost:3000"}`
  );
});
