import { prismaClient } from "../../prisma";

class InviteFriendService {
    async execute(user_id_send: string, user_id_revcive: string) {
        const friend = prismaClient.inviteFriends.create({
            data: {
                state: 'open',
                user_id_send: user_id_send,
                user: {
                    connect: {
                        id: user_id_revcive
                    }
                },
            },
            select: {
                user_id_send: true,
                user: {
                    select: {
                        url_image: true,
                        name: true,
                        email: true
                    }
                },
                state: true,
            },
        })

        return friend
    }
}

export { InviteFriendService }