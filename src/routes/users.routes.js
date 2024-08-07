import { Router } from 'express'
import { find, index, store } from '../controllers/user.controller.js'

const router = Router()

router.get('/', index)
router.get('/:id', find)
router.post('/', store)

export default router
