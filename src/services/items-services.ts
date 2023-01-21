import { readAll } from "../repositories/items-repository";
import { QueryResult } from "pg";

export async function getData() {
  return readAll();
}
