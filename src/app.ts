import express from 'express'
import cors from 'cors'
import '@config/enviroment'
import swaggerUi from 'swagger-ui-express'

import '@controllers/ArticleController'
import articleRouter from './routes/article'

import '@utils/crons/checkUpdates'

import swaggerDocs from '@utils/swagger.json'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.status(200).send('Back-end Challenge 2021 🏅 - Space Flight News')
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/articles/', articleRouter)

export default app
