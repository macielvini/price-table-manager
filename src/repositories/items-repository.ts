import { QueryResult } from "pg";
import { connection } from "../database/server.js";
import { Item } from "../protocols/items.js";

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
