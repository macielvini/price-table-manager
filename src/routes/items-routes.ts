import { Router } from "express";
import {
  createData,
  getData,
  getItemAndFees,
} from "../controllers/items-controller.js";
import { validateFeeQuery } from "../middlewares/validateFee.js";
import { validateItemId } from "../middlewares/validateItem.js";

const router = Router();

router.get("/items", getData);
router.get("/item/:id", validateItemId, validateFeeQuery, getItemAndFees);
router.post("/item", createData);

export default router;
