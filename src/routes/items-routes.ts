import { Router } from "express";
import { createData, getData } from "../controllers/items-controller.js";

const router = Router();

router.get("/items", getData);
router.post("/item", createData);

export default router;
