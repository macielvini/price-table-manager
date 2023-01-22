import { Response, Request, NextFunction } from "express";
import { checkItemId } from "../services/items-services.js";

export async function validateItemId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = Number(req.params.id) as number;

  try {
    const itemExists = await checkItemId(id);

    if (!itemExists.rowCount) return res.sendStatus(404);

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
