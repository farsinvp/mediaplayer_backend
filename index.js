// import json server using require methode

const jsonserver=require('json-server')
// create server

const server=jsonserver.create()


const router=jsonserver.router('db.json')



// crearte middleware

const middleWare=jsonserver.defaults()

// set port for server

const PORT=process.env.PORT||4000


// use middleware in server

server.use(middleWare)

server.use(router)

// to work server 

server.listen(PORT,()=>{
    console.log('miedia player server started at a port:'+PORT);
})

