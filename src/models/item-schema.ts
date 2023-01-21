import joi from "joi";

export const itemSchema = joi.object({
  name: joi.string().min(3).max(55).required(),
  price: joi.number().required(),
});
