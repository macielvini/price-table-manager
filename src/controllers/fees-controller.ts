import { Response, Request } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { feesSchema } from "../models/fees-schema.js";
import { Fees } from "../protocols/Fees.js";
import { createData } from "../services/fees-services.js";
import { checkIdService } from "../services/institutions-services.js";

export async function create(req: Request, res: Response) {
  const incomingData = req.body as Fees;

  const errors = validateSchema(incomingData, feesSchema);
  if (errors) {
    return res.status(422).send(errors);
  }

  try {
    const institutionExists = await checkIdService(incomingData.institution_id);
    if (!institutionExists.rowCount) return res.sendStatus(404);

    createData(incomingData);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
