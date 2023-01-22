import { connection } from "../database/server.js";
import { Fees, FeesPartial } from "../protocols/Fees.js";

export async function create(fees: Fees) {
  return await connection.query(
    `
    INSERT INTO fees (institution_id, initial_fee, monthly_fee, name, max_num_installments)
    VALUES ($1, $2, $3, $4, $5)
  `,
    [
      fees.institution_id,
      fees.initial_fee,
      fees.monthly_fee,
      fees.name,
      fees.max_num_installments,
    ]
  );
}

export async function update(fees: FeesPartial, id: number) {
  await connection.query(
    `
  UPDATE fees SET (initial_fee, monthly_fee, name, max_num_installments) =
  ($1, $2, $3, $4) WHERE id = $5;
  `,
    [
      fees.initial_fee,
      fees.monthly_fee,
      fees.name,
      fees.max_num_installments,
      id,
    ]
  );
}
