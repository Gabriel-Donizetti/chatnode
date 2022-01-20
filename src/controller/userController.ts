import { Request, Response } from 'express'
import { DeleteUserService } from '../service/user/deleteUserService'
import { LoginUserService } from '../service/user/loginUserService'
import { SigninUserService } from '../service/user/signinUserService'
import { UpdateEmailService } from '../service/user/updateUser/updateEmailService'
import { UpdateNameService } from '../service/user/updateUser/updateNameService'
import { UpdatePasswordService } from '../service/user/updateUser/updatePasswordService'

class UserController {
    async signinUser(req: Request, res: Response) {
        const { name, email, password } = req.body

        const service = new SigninUserService()

        try {
            const result = await service.execute(name, email, password)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({ message: 'User already exist' })
        }
    }
    async loginUser(req: Request, res: Response) {
        const { email, password } = req.body

        const service = new LoginUserService()

        try {
            const result = await service.execute(email, password)

            if (result == null) {
                return res.status(400).json({ message: 'User not found' })
            } else {
                return res.json(result)
            }
        } catch (error) {
            return res.status(400).json({ message: 'User not found' })
        }
    }
    async updatePassword(req: Request, res: Response) {
        const { email, password } = req.body


        const service = new UpdatePasswordService()

        try {
            const result = await service.execute(password, email)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({ message: 'Invalid Password' })
        }
    }
    async updateName(req: Request, res: Response) {
        const { email, name } = req.body

        const service = new UpdateNameService()

        try {
            const result = await service.execute(name, email)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({ message: 'Invalid Password' })
        }
    }
    async updateEmail(req: Request, res: Response) {
        const { email, newEmail } = req.body

        const service = new UpdateEmailService()

        try {
            const result = await service.execute(email, newEmail)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({ message: 'Invalid Password' })
        }

    }
    async deleteUser(req: Request, res: Response) {
        const {email} = req.body

        const service = new DeleteUserService()

        try {
            const result = await service.execute(email)

            return res.json(result)            
        } catch (error) {
            return res.status(400).json({message: 'User not found'})
        }
    }
}

export { UserController }