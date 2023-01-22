import { connection } from "../database/server.js";
import { Institution, InstitutionEntity } from "../protocols/institutions.js";

import { QueryResult } from "pg";

export async function create(institution: Institution) {
  return await connection.query(`INSERT INTO institutions (name) VALUES ($1)`, [
    institution.name,
  ]);
}

export async function readAll(): Promise<QueryResult<InstitutionEntity>> {
  return connection.query(`SELECT * FROM institutions`);
}
