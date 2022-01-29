import cron from 'node-cron'
import Article from '@models/Article'
import IArticle from '@types/article'
const axios = require('axios')

// https://api.spaceflightnewsapi.net/v3/articles?_limit=999999999

const spaceflightnewsInstance = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3',
  timeout: 54000
})

/*
cron.schedule('* * * * *', async () => {
  const response = await spaceflightnewsInstance.get('/articles', { params: { _limit: 100 } })
  const articles: IArticle[] = response.data

  articles.forEach(async (article) => {
    console.log(article)
    const alreadyExists = await Article.findById(article.id).orFail()

    if (!alreadyExists) {
      await Article.create(article, (error) => {
        console.info('There was an error creating the article with id ' + article.id)
        console.table(error)
      })
    }
  })
})
*/
