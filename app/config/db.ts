import mongoose from "mongoose"

export const connectDb = () => {
	const MONGODB_URI = process.env.MONGODB_URI ?? ""

	mongoose.connect(
		MONGODB_URI
	)
		.then(() => {
			console.log("Database Connected")
		})
		.catch((err: string) => {
			console.log("Something went wrong connecting to the Database:", new Error(err).message)
		})
}