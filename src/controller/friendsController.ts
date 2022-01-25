import { Request, Response } from 'express'
import { AddFriendService } from '../service/friends/addFriendService'
import { ListSendInviteService } from '../service/friends/listSendInviiteService'

class FriendsController {
    async addFriend(req: Request, res: Response) {
        const { user_id_send, user_id_revcive } = req.body

        const service = new AddFriendService()

        try {
            const result = await service.execute(user_id_send, user_id_revcive)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({ message: 'User not found' })
        }
    }

    async listSendInvite(req: Request, res: Response) {
        const { user_id_send } = req.body

        const service = new ListSendInviteService()
        try {
            const result = await service.execute(user_id_send)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({ message: 'Invites not found' })
        }
    }

    // async listReciveInvite(req: Request, res: Response) {
    //     const service = 

    //     try {
    //         const result = await service

    //         return res.json(result)
    //     } catch (error) {
    //         return res.status(400).json({ message: 'Invites not found' })
    //     }
    // }

    async listFriends(req: Request, res: Response) {

    }
    async deleteFriend(req: Request, res: Response) {

    }
}

export { FriendsController }