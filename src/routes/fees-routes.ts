import { Router } from "express";
import { create, deleteFee, update } from "../controllers/fees-controller.js";
import { validateFeeId } from "../middlewares/validateFee.js";

const router = Router();

router.post("/fee", create);
router.patch("/fee/:id", update);
router.delete("/fee/:id", validateFeeId, deleteFee);

export default router;
