import { Router } from "express"
import { UserController } from "../controller/userController"


export const userRouter:Router = Router()

userRouter.post('/signin', new UserController().signinUser)
userRouter.post('/login', new UserController().loginUser)
userRouter.put('/updatepassword', new UserController().updatePassword)
userRouter.put('/updatename', new UserController().updateName)
userRouter.put('/updateemail', new UserController().updateEmail)
userRouter.delete('/deleteuser', new UserController().deleteUser)