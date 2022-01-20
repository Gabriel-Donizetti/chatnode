import { prismaClient } from "../../../prisma"

class UpdateEmailService {
  async execute(email: string, newEmail: string){
      const user = prismaClient.user.update({
          data:{
              email: newEmail
          },
          where:{
              email
          },
          select:{
              name:true,
              email: true
          }
      })

      return user
  }
}

export { UpdateEmailService }