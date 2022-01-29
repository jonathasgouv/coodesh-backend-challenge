import Article from '@models/Article'
import { Request, Response } from 'express'

export default {
  get: async (req: Request, res: Response) => {
    try {
      const offset = parseInt(req.query.offset as string) || 0
      const count = Math.min(parseInt(req.query.count as string), 100) || 20

      const response = await Article.find().skip(offset).limit(count)

      return res.json(response)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string

      if (!id) {
        res.status(400).json({ error: 'Id is required' })
      }

      const response = await Article.findById(id)

      if (!response) {
        return res.status(400).json({ error: 'Invalid id' })
      }

      return res.status(200).json(response)
    } catch (error) {
      if (error.ObjectId) {
        return res.status(400).json({ error: 'Invalid id' })
      }

      return res.status(500).json({ error: 'Internal server error' })
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const isInvalid = await new Article(req.body).validateSync()

      if (isInvalid) {
        return res.status(400).json({ error: 'Missing parameters. Registration failed' })
      }

      const article = await Article.create(req.body)

      return res.status(200).json(article)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  },
  edit: async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string

      if (!id) {
        res.status(400).json({ error: 'Id is required' })
      }

      const response = await Article.findByIdAndUpdate(id, req.body)

      if (!response) {
        return res.status(400).json({ error: 'Invalid fields' })
      }

      return res.status(200).json(response)
    } catch (error) {
      if (error.ObjectId) {
        return res.status(400).json({ error: 'Invalid id' })
      }

      return res.status(500).json({ error: 'Internal server error' })
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string

      if (!id) {
        res.status(400).json({ error: 'Id is required' })
      }

      const response = await Article.findByIdAndDelete(id)

      if (!response) {
        return res.status(400).json({ error: 'Invalid id' })
      }

      return res.status(200)
    } catch (error) {
      if (error.ObjectId) {
        return res.status(400).json({ error: 'Invalid id' })
      }

      return res.status(500).json({ error: 'Internal server error' })
    }
  }
}
