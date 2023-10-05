import app from './app'

const APP_PORT = process.env.APP_PORT

app.listen(APP_PORT, () => {
	console.log(`Server is running on port number: ${APP_PORT}`)
})