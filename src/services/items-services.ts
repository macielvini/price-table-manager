import {
  checkId,
  create,
  readAll,
  readItemAndFees,
} from "../repositories/items-repository.js";
import { Item } from "../protocols/items.js";

export async function getData() {
  return readAll();
}

export async function createData(item: Item) {
  return create(item);
}

export async function getItemAndFees(itemId: number, feeId: number) {
  return readItemAndFees(itemId, feeId);
}

export async function checkItemId(id: number) {
  return checkId(id);
}
