import { prismaClient } from "../../prisma";

class ListSendInviteService {
    async execute(user_id_send: string){
        const getUserId = prismaClient.inviteFriends.findFirst({
          where:{
              user_id_send
          },
          select:{
              user_id_send: true
          }, 
          rejectOnNotFound: true
        })

        const userInvites = prismaClient.user.findUnique({
            where:{
                id: String(getUserId)
            },
            select:{
                id: true,
                name: true,
                email: true,
                url_image: true 
            },
            rejectOnNotFound:true
        })

        return userInvites
    }
}

export { ListSendInviteService }