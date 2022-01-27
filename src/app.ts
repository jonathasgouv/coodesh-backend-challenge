import express from 'express'
import cors from 'cors'

import '@controllers/ArticleController'
import articleRouter from './routes/article'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.status(200).send('Back-end Challenge 2021 🏅 - Space Flight News')
})

app.use('/api/', articleRouter)

export default app
