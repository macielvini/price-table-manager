import express from "express";
import cors from "cors";
import { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.sendStatus(200);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
