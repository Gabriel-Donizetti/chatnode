import { Router } from "express"


export const userRouter:Router = Router()

userRouter.post('/sendmessage')
userRouter.get('/getmessage',)
userRouter.put('/updatemessage')
userRouter.delete('deletemessage')