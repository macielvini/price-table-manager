import { Router } from "express";
import { create, readAll } from "../controllers/institutions-controller.js";

const router = Router();

router.post("/institution", create);
router.get("/institutions", readAll);

export default router;
