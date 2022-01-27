import { Request, Response } from 'express'

export default {
  get: async (req: Request, res: Response) => {
    try {
      const response = { message: 'Hello World' }

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' })
    }
  }
}
