import { Request, Response } from "express";
import { readAll } from "../repositories/items-repository.js";
import { getData as getDataService } from "../services/items-services.js";

export async function getData(req: Request, res: Response) {
  try {
    const items = await getDataService();

    res.send(items.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
