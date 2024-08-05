import { Router } from 'express'
import { find, index } from '../controllers/user.controller.js'

const router = Router()

router.get('/', index)
router.get('/:id', find)

export default router
