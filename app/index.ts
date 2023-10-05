import express from "express"
import dotenv from 'dotenv'
import { connectDb } from "./config/db"
import userRouter from "./routes/user.routes"

dotenv.config()

const app = express()

connectDb()

app.use(express.json())
app.use("/user", userRouter)

export default app