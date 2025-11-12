try {
  // loads the variables in the .env for us to use here
  process.loadEnvFile()
} catch (error) {
  console.log("cannot find .env file, using default values")
}
const  jsonServer = require('json-server')

//creating the server
const server = jsonServer.create()

//create all the default configuration of the server
const middlewares = jsonServer.defaults()

//applying all the default configuration to the server
server.use(middlewares)

//create all the routes (ALL URLs and Methods) and the DB in json format
const router = jsonServer.router('db.json')

//apply all the routes and db to the server
server.use(router)

//PORT for the server to comunicate with clients
const PORT = process.env.PORT

//will make the server actively lister for request from clients
server.listen(PORT, ()=>{
    console.log(`Server Active and listening on port: ${PORT}`)
})
