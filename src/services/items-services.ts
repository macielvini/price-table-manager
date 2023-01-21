import { create, readAll } from "../repositories/items-repository.js";
import { Item } from "../protocols/items.js";

export async function getData() {
  return readAll();
}

export async function createData(item: Item) {
  return create(item);
}
