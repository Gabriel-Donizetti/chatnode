import { Request, Response } from 'express'
import { LoginUserService } from '../service/user/loginUserService'
import { SigninUserService } from '../service/user/signinUserService'

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
    async updateUser(req: Request, res: Response) {

    }
    async deleteUser(req: Request, res: Response) {

    }
}

export { UserController }