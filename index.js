const express = require("express")
// const helmet = require("helmet")
// const cors = require("cors")
const projectRouter = require("./routers/project")
const resourceRouter = require("./routers/resource")
const taskRouter = require("./routers/task")

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())
// server.use(helmet())
// server.use(cors())

server.use("/projects", projectRouter)
server.use("/resources", resourceRouter)
server.use("/tasks", taskRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})