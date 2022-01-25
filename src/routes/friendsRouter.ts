import { Router } from "express"
import { FriendsController } from "../controller/friendsController"

export const friendsRouter:Router = Router()

friendsRouter.post('/addfriend', new FriendsController().addFriend)
friendsRouter.get('/listsendinvite', new FriendsController().listSendInvite)
friendsRouter.get('/listfriends')
friendsRouter.delete('/deletefriend')
