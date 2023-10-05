import Joi from "joi";

export const createUserValidationSchema = Joi.object({
	name: Joi.string().min(5).max(25).required(),
	email: Joi.string().email().max(30).required(),
	password: Joi.string().min(8).max(25).required(),
})