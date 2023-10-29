const jsonServer = require('json-server')

const todoAppServer = jsonServer.create()
const router = jsonServer.router("db.json")
const middleWare = jsonServer.defaults()

const port = 4000 || process.env.port

todoAppServer.use(middleWare)
todoAppServer.use(router)


todoAppServer.listen(port, () => {
    console.log("ToDo App server is up and listening");
})