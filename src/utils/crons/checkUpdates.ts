import cron from 'node-cron'
import Article from '@models/Article'
import IArticle from '@types/article'
import Queue from '@lib/Queue'

const axios = require('axios')

// https://api.spaceflightnewsapi.net/v3/articles?_limit=999999999

const spaceflightnewsInstance = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3',
  timeout: 54000
})

cron.schedule('0 9 * * *', async () => {
  const response = await spaceflightnewsInstance.get('/articles', { params: { _limit: 100 } })
  const articles: IArticle[] = response.data

  let newArticles = 0
  const errors = []

  articles.forEach(async (article) => {
    article._id = article.id
    delete article.id

    const alreadyExists = await Article.findById(article._id).orFail()

    if (!alreadyExists) {
      await Article.create(article, (error) => {
        console.info('There was an error creating the article with id ' + article._id)
        console.table(error)

        errors.push(article)
      })

      newArticles++
    }
  })

  if (errors.length) await Queue.add('SyncMail', errors)

  console.info(`Cron ran successfully. ${newArticles} articles created.`)
})
