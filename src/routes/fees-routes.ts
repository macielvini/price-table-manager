import { Router } from "express";
import { create, update } from "../controllers/fees-controller.js";

const router = Router();

router.post("/fee", create);
router.patch("/fee/:id", update);

export default router;
