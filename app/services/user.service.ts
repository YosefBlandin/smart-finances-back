import UserModel from "../models/User.model"
// TRY TO CREATE AN USER
const userService = {
	createUser: async (newUser: { name: string, email: string, password: string }) => {
		try {
			const userAlreadyExist = await UserModel.find({ email: newUser.email })
			console.log({ userAlreadyExist })
			if (userAlreadyExist[0]) {
				return false
			} else {
				new UserModel({
					name: newUser.name,
					email: newUser.email,
					password: newUser.password
				}).save()
				return true
			}
		} catch (error: unknown) {
			console.log(error)
		}
	},
	updateUser: async (newUser: { _id: string, name: string, email: string, password: string }) => {
		try {
			const userToEdit = await UserModel.findOneAndUpdate({ _id: newUser._id }, { ...newUser })
			console.log({ userToEdit })

			return true

		} catch (error: unknown) {
			console.log(error)
		}
	},
	getUsers: async () => {
		try {
			const users = await UserModel.find()
			return users
		} catch (error: unknown) {
			console.log(error)
		}
	},
	getUser: async (_id: string) => {
		try {
			const user = await UserModel.find({ _id })
			return user[0]
		} catch (error: unknown) {
			console.log(error)
		}
	},
	getUserByEmail: async (email: string) => {
		try {
			const user = await UserModel.find({ email })
			return user[0]
		} catch (error: unknown) {
			console.log(error)
		}
	},
	deleteUser: async (_id: string) => {
		try {
			const deleteUser = await UserModel.findOneAndDelete({ _id }).exec()
			if (deleteUser) {
				return true
			} else {
				return false
			}
		} catch (error: unknown) {
			console.log(error)
		}
	}
}


export default userService