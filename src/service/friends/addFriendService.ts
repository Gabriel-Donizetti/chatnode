import { prismaClient } from "../../prisma";

class AddFriendService {
    async execute(user_id_send: string, user_id_revcive: string){
        const friend = prismaClient.inviteFriends.create({
            data:{
                state: 'open',
                user_send_invite: user_id_send,
                user_recive_invite: user_id_revcive
            },
            select:{
                user:{
                    select:{
                        name: true
                    }
                },
                friend:{
                    select:{
                         name:true,
                    }
                },
                state: true,
                created_at: true
            }
        })

        return friend
    }
}

export { AddFriendService }