import { Item } from "../protocols/items.js";
import { ObjectSchema } from "joi";

export function validateSchema(item: any, schema: ObjectSchema) {
  const { error } = schema.validate(item);
  if (error) {
    const errors = error.details.map((e) => e.message);
    return errors;
  }

  return false;
}
