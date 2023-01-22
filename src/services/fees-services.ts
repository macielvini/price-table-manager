import { Fees, FeesPartial } from "../protocols/Fees";
import { create, update } from "../repositories/fees-repository.js";

export async function createData(fees: Fees) {
  return await create(fees);
}

export async function updateData(fees: FeesPartial, id: number) {
  return await update(fees, id);
}
