import { NextFunction, Request, Response } from "express";
import { checkFeeId } from "../services/fees-services.js";

export async function validateFeeId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = Number(req.params.id) as number;

  try {
    const feeExists = await checkFeeId(id);

    if (!feeExists.rowCount) return res.sendStatus(404);

    res.locals.id = id;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function validateFeeParam(
  req: Request,
  res: Response,
  next: NextFunction
) {}

export async function validateFeeQuery(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = Number(req.query.fee);

  try {
    const feeExists = await checkFeeId(id);

    if (!feeExists.rowCount) return res.sendStatus(404);

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
