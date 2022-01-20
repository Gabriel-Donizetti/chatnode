import { prismaClient } from "../../prisma"

class DeleteUserService {
    async execute(email: string){
        const user = prismaClient.user.delete({
            where:{
                email
            },
            select:{
                name: true
            }
        })
  
        return user
    }
  }
  
  export { DeleteUserService }