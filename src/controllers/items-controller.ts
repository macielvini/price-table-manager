import { Request, Response } from "express";
import {
  getData as getDataService,
  createData as createDataServices,
} from "../services/items-services.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { itemSchema } from "../models/item-schema.js";
import { Item } from "../protocols/items.js";

export async function getData(req: Request, res: Response) {
  try {
    const items = await getDataService();

    res.send(items.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function createData(req: Request, res: Response) {
  const incomingData = req.body as Item;
  try {
    const errors = validateSchema(incomingData, itemSchema);
    if (errors) {
      return res.status(422).send(errors);
    }

    await createDataServices(incomingData);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
