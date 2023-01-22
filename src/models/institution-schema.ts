import joi from "joi";

export const institutionSchema = joi.object({
  name: joi.string().required().min(3).max(55),
});
