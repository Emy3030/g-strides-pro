import { Router } from 'express'
import { submitContact, getContacts } from '../controllers/contactController.js'

const router = Router()

router.post('/',  submitContact)
router.get('/',   getContacts)   // optional admin endpoint

export default router
