import {Router} from 'express'
import { friendsRouter } from './friendsRouter'
import { userRouter } from './userRouter'

const router: Router = Router()

router.use('/user', userRouter)
router.use('/friends', friendsRouter)


export { router }