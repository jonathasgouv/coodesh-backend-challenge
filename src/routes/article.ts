import express from 'express'
import ArticleController from '@controllers/ArticleController'

const router = express.Router()

/// USER ROUTES ///

// GET request to list articles.
router.get('/', ArticleController.get)

// GET request to list article by id.
router.get('/:id', ArticleController.getById)

// GET request to create article.
router.post('/:id', ArticleController.create)

// GET request to update article.
router.patch('/:id', ArticleController.edit)

// GET request to delete article.
router.delete('/:id', ArticleController.delete)

export default router
