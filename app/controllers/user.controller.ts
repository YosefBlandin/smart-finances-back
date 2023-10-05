import userService from "../services/user.service"
import { Request, Response } from "express"

const userController = {
	getUser: async (req: Request, res: Response) => {
		const getUser = await userService.getUser(req.body.id)
		res.status(200).send(getUser)
	},
	getUserByEmail: async (req: Request, res: Response) => {
		const getUser = await userService.getUserByEmail(req.body.email)
		res.status(200).send(getUser)
	},
	getUsers: async (req: Request, res: Response) => {
		const getUser = await userService.getUsers()
		res.status(200).send(getUser)
	},
	createUser: async (req: Request, res: Response) => {
		try {
			const createUser = await userService.createUser(req.body)
			if (createUser) {
				res.status(200).send("User created successfully")
			} else {
				res.status(400).send("The email is already on use")
			}
		} catch (error: unknown) {
			console.log(error)
		}
	},
	updateUser: async (req: Request, res: Response) => {
		try {
			const updateUser = await userService.updateUser(req.body)
			if (updateUser) {
				res.status(200).send("User updated successfully")
			}
		} catch (error: unknown) {
			console.log(error)
		}
	},
	deleteUser: async (req: Request, res: Response) => {
		try {
			const deleteUser = await userService.deleteUser(req.body.email)
			if (deleteUser) {
				res.status(200).send("User deleted successfully")
			} else {
				res.status(400).send("User doesn't exist")
			}
		} catch (error: unknown) {
			console.log(error)
		}
	},
}

export default userController