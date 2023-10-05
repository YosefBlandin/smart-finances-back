import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: [5, "Name should have minimum 5 characters"],
		max: [25, "Name should have maximum 25 characters"]
	},
	email: String,
	password: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
})

export default mongoose.model("User", userSchema);