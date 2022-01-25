import express, { json } from "express"
import http from "http"
import cors from "cors"
import { Server, Socket } from 'socket.io'
import { router } from "./routes/router"

const app = express()

app.use(cors())
app.use(json())

app.use('/', router )

const serverHttp = http.createServer(app)

const io = new Server(serverHttp,{
    cors:{
        origin: "*"
    }
})

io.on('connection', Socket=>{
    console.log(`User connected on socket ${Socket.id}`)
})

export { serverHttp, io }
