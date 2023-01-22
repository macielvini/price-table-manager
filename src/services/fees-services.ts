import { Fees, FeesPartial } from "../protocols/fees";
import {
  checkId,
  create,
  deleteFee,
  update,
} from "../repositories/fees-repository.js";

export async function createData(fees: Fees) {
  return await create(fees);
}

export async function updateData(fees: FeesPartial, id: number) {
  return await update(fees, id);
}

export async function deleteData(id: number) {
  return await deleteFee(id);
}

export async function checkFeeId(id: number) {
  return await checkId(id);
}
