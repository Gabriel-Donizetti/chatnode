import { prismaClient } from "../../../prisma"

class UpdatePasswordService {
  async execute(password: string, email: string){
      const user = prismaClient.user.update({
          data:{
              password
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

export { UpdatePasswordService }