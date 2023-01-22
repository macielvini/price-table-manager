import { Institution } from "../protocols/institutions.js";
import { create } from "../repositories/institutions-repository.js";
import { readAll } from "../repositories/institutions-repository.js";

export async function createData(institution: Institution) {
  return create(institution);
}

export async function getData() {
  return readAll();
}
