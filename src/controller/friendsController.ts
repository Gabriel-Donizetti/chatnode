import { Request, Response } from 'express'
import { InviteFriendService } from '../service/friends/inviteFriendService'
import { ListReciveInviteService } from '../service/friends/listReciveInviteService'
import { ListSendInviteService } from '../service/friends/listSendInviiteService'

class FriendsController {
    async inviteFriend(req: Request, res: Response) {
        const { user_id_send, user_id_revcive } = req.body

        const service = new InviteFriendService()

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

    async listReciveInvite(req: Request, res: Response) {
        const { user_id_recive } =  req.body

        const service = new ListReciveInviteService()

        try {
            const result = await service.execute(user_id_recive)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({ message: 'Invites not found' })
        }
    }

    async addFriend(req: Request, res: Response) {

    }

    async listFriends(req: Request, res: Response) {

    }
    async deleteFriend(req: Request, res: Response) {

    }
}

export { FriendsController }