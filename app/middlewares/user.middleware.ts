import { createUserValidationSchema } from "../validations/user.validations";
import { NextFunction, Request, Response } from "express"

export const createUserValidator = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {

	try {
		if (!req.body) {
			res.status(400).send({
				message: "Missing request body"
			})
		}

		await createUserValidationSchema.validateAsync(req.body);

		next()
	} catch (error: any) {
		const err = new Error(error)
		res.status(400).send(err.message);
	}
}