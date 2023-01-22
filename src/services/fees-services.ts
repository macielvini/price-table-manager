import { Fees } from "../protocols/Fees";
import { create } from "../repositories/fees-repository.js";

export async function createData(fees: Fees) {
  return await create(fees);
}
