
const axios = require('axios')

// https://api.spaceflightnewsapi.net/v3/articles?_limit=999999999

const spaceflightnewsInstance = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3',
  timeout: 54000
})

const dbInstance = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 54000
})

const getArticles = async () => {
  const responseteste = await dbInstance.get('/articles')
  console.log(responseteste.data)

  const response = await spaceflightnewsInstance.get('/articles', { params: { _limit: 999999999 } })
  const articles = response.data

  return articles
}

const populateDb = async () => {
  const articles = await getArticles()
  const promises = []

  for (const article of articles) {
    promises.push(dbInstance.post('/articles/', article))
  }

  console.info('Number of requests to be done: ' + promises.length)

  const responses = await Promise.allSettled(promises)

  console.info('All requests done, starting logs')

  responses.forEach((a) => {
    if (a.status === 'rejected') {
      try {
        if (a.reason.response.status !== 304) {
          console.error(a.reason.response.statusText, a.reason.config.data)
        }
      } catch (error) {}
    }
  })

  console.info('Successfully populated database')
}

populateDb()
