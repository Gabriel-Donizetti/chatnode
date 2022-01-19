import { Router } from "express"
import { UserController } from "../controller/userController"


export const userRouter:Router = Router()

userRouter.post('/signin', new UserController().signinUser)
userRouter.post('/login', new UserController().loginUser)
userRouter.put('/updateuser')
userRouter.delete('deleteuser')