import cron from 'node-cron'
import Article from '@models/Article'
import { IArticle } from '../../types/article'
import Queue from '@lib/Queue'

import axios from 'axios'

// https://api.spaceflightnewsapi.net/v3/articles?_limit=999999999

const spaceflightnewsInstance = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3',
  timeout: 54000
})

cron.schedule('0 9 * * *', async () => {
  console.info('Started running cron')
  const response = await spaceflightnewsInstance.get('/articles', { params: { _limit: 100 } })
  const articles = response.data

  articles.forEach(async (article: IArticle) => {
    article._id = article.id
    delete article.id

    const alreadyExists = await Article.findById(article._id)

    if (!alreadyExists) {
      await Article.create(article, () => {
        Queue.add({ id: article._id })
      })
    }
  })

  console.info('Cron ran successfully.')
})
