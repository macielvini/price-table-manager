import { Router } from "express";
import {
  create,
  getById,
  readAll,
} from "../controllers/institutions-controller.js";

const router = Router();

router.post("/institution", create);
router.get("/institutions", readAll);
router.get("/institution/:id", getById);

export default router;
