import { Response, Request } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { feesSchema, updateFeesSchema } from "../models/fees-schema.js";
import { Fees, FeesPartial } from "../protocols/Fees.js";
import {
  createData,
  deleteData,
  updateData,
} from "../services/fees-services.js";
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

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id);
  const incomingData = req.body as FeesPartial;

  const errors = validateSchema(incomingData, updateFeesSchema);
  if (errors) {
    return res.status(422).send(errors);
  }

  try {
    await updateData(incomingData, id);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function deleteFee(req: Request, res: Response) {
  const { id } = res.locals;

  try {
    await deleteData(id);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
