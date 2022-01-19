import { prismaClient } from "../../prisma";

class LoginUserService {
    async execute(email: string, password:string){
        const user = await prismaClient.user.findUnique({
            where:{
                email
            },
            select:{
                name: true,
                email: true
            }
        })

        if(user !== null){
            const userlogin = await prismaClient.user.findFirst({
                where:{
                    password,
                    email: user.email
                },
                select:{
                    name: true,
                    email: true
                }
            })

            return userlogin
        }
        return user
    }
}

export { LoginUserService}