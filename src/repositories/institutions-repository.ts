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

export async function readById(id: number) {
  return connection.query(
    `select i.*,
    json_agg(
      json_build_object(
        'name', f.name,
        'InitialFee', f.initial_fee,
        'monthlyFee', f.monthly_fee,
        'maxNumOfInstallments', max_num_installments
      )) as fees
    from institutions i
    join fees f
    on i.id = f.institution_id
    where i.id = $1
    group by i.id;`,
    [id]
  );
}

export async function checkId(id: number) {
  return await connection.query(`SELECT * FROM institutions WHERE id = $1`, [
    id,
  ]);
}
