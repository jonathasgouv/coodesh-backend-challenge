import express from 'express'
import ArticleController from '@controllers/ArticleController'

const router = express.Router()

/// USER ROUTES ///

// GET request to teste server.
router.get('/', ArticleController.get)

export default router
