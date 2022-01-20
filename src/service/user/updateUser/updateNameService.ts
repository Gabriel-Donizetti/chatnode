import { prismaClient } from "../../../prisma"

class UpdateNameService {
  async execute(name: string, email: string){
      const user = prismaClient.user.update({
          data:{
              name
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

export { UpdateNameService }