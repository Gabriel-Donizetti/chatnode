import { Router } from "express"
import { FriendsController } from "../controller/friendsController"

export const friendsRouter:Router = Router()

friendsRouter.post('/invitefriend', new FriendsController().inviteFriend)
friendsRouter.get('/listsendinvite', new FriendsController().listSendInvite)
friendsRouter.get('/listreciveinvite', new FriendsController().listReciveInvite)
friendsRouter.get('/listfriends')
friendsRouter.delete('/deletefriend')
