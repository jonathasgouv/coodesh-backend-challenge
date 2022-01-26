import express from 'express'
import cors from 'cors'

import '@controllers/TesteController'
import testeRouter from './routes/teste'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/', testeRouter)

export default app
