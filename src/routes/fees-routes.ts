import { Router } from "express";
import { create } from "../controllers/fees-controller.js";

const router = Router();

router.post("/fee", create);

export default router;
