import { Request, Response } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { institutionSchema } from "../models/institution-schema.js";
import { Institution } from "../protocols/institutions.js";

import {
  createData as createDataService,
  getData as getDateService,
} from "../services/institutions-services.js";

export async function create(req: Request, res: Response) {
  const incomingData = req.body as Institution;

  const errors = validateSchema(incomingData, institutionSchema);
  if (errors) {
    return res.status(422).send(errors);
  }

  try {
    await createDataService(incomingData);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function readAll(req: Request, res: Response) {
  try {
    const data = await getDateService();
    res.send(data.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
