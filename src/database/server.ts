import pg from "pg";

const { Pool } = pg;

export const connection = new Pool({
  connectionString: `postgresql://postgres:aimeudeus@localhost:5432/price_table_manager?schema=public`,
});
