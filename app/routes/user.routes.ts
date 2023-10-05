
import { createUserValidator } from "../middlewares/user.middleware";
import userController from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router()

userRouter.route("/")
	.get(userController.getUserByEmail)
	.post(createUserValidator, userController.createUser)
	.put(userController.updateUser)
	.delete(userController.deleteUser)

export default userRouter