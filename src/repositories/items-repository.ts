import { QueryResult } from "pg";
import { connection } from "../database/server.js";
import { Item, ItemAndFees, ItemEntity } from "../protocols/items.js";

export async function create(item: Item) {
  await connection.query(`INSERT INTO items (name, price) VALUES ($1, $2)`, [
    item.name,
    item.price,
  ]);
}

export async function readAll(): Promise<QueryResult<any>> {
  return connection.query(`
  SELECT * FROM items
  `);
}

export async function readItemAndFees(
  itemId: number,
  feeId: number
): Promise<QueryResult<ItemAndFees>> {
  return await connection.query(
    `
    WITH months AS (
      SELECT generate_series(1,f.max_num_installments) as month, f.*
      FROM fees f
      group by f.id
    )

    SELECT i.*,
    JSON_AGG(
      JSON_BUILD_OBJECT(
        'id', m.month,
        'totalMonths', m.month,
        'valuePerMonth', round(10000 * (POWER(1 + (m.initial_fee/100) + (m.monthly_fee/100), m.month))/m.month, 2)
      )) AS "fees"
    FROM items i
    JOIN months m
    ON m.id = $2
    WHERE i.id = $1
    GROUP BY i.id;
  `,
    [itemId, feeId]
  );
}

export async function checkId(id: number): Promise<QueryResult<ItemEntity>> {
  return connection.query(`SELECT * FROM items WHERE id = $1`, [id]);
}
