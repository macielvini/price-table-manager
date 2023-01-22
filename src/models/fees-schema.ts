import joi from "joi";

export const feesSchema = joi.object({
  institution_id: joi.number().required(),
  initial_fee: joi.number().required(),
  monthly_fee: joi.number().greater(0).required(),
  name: joi.string().max(55).required(),
  max_num_installments: joi.number().greater(0).required(),
});

export const updateFeesSchema = joi.object({
  initial_fee: joi.number().required(),
  monthly_fee: joi.number().greater(0).required(),
  name: joi.string().max(55).required(),
  max_num_installments: joi.number().greater(0).required(),
});
