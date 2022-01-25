import { prismaClient } from "../../prisma";

class ListSendInviteService {
    async execute(user_id_send: string){
        const invites = prismaClient.inviteFriends.findMany({
            take: 1000,
            where:{
                state: 'open',
                user:{
                    id: user_id_send
                }
            },
            select:{
                id: false,
                user:{
                    select:{
                        name: true,
                        email: true,
                        url_image: true
                    }
                },
                friend: false
            }
        })

        return invites
    }
}

export { ListSendInviteService }