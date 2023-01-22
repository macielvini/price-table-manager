import { Institution } from "../protocols/institutions.js";
import { create, readById } from "../repositories/institutions-repository.js";
import { readAll } from "../repositories/institutions-repository.js";

export async function createData(institution: Institution) {
  return create(institution);
}

export async function getData() {
  return readAll();
}

export async function getDataById(id: number) {
  return readById(id);
}
