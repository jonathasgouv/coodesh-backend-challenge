import express from 'express'
import TesteController from '@controllers/TesteController'

const router = express.Router()

/// USER ROUTES ///

// GET request to teste server.
router.get('/', TesteController.get)

export default router
