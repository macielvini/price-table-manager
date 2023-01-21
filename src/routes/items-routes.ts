import { Router } from "express";
import { getData } from "../controllers/items-controller.js";

const router = Router();

router.get("/items", getData);

export default router;
