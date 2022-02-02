import { prismaClient } from "../../prisma";

class ListReciveInviteService {
    async execute(user_id_send: string) {
        const userinvites = prismaClient.inviteFriends.findMany({
            where:{
                user_id_send
            },
            select:{
                user:{
                    select:{
                        id: true,
                        name: true,
                        email: true,
                        url_image: true
                    }
                }
            }
        })

        return userinvites
    }
}

export { ListReciveInviteService }