import request from 'supertest'
import app from '../app'

describe('Test articles routes', () => {
  it('Should get articles', async () => {
    const res = await request(app).get('/articles/')

    expect(res.body).toHaveLength(20)
  })
  it('Should get articles by id', async () => {
    const res = await request(app).get('/articles/13764')

    expect(res.body.title).toEqual('NASA Awards Multiple Construction Contracts')
  })
  it('Should get articles using offset and count', async () => {
    const res = await request(app).get('/articles?offset=10&count=5')

    expect(res.body).toHaveLength(5)
  })
  it('Should create a new article', async () => {
    const article = {
      _id: 88888,
      featured: false,
      title: 'NASA Awards Multiple Construction Contracts',
      url: 'http://www.nasa.gov/press-release/nasa-awards-multiple-construction-contracts-0',
      imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb_0.jpg?itok=mrBnB_c9',
      newsSite: 'NASA',
      summary: 'NASA has awarded 12 construction contracts for work to be performed predominantly at the agency’s Wallops Flight Facility on Wallops Island, Virginia, and at Langley Research Center in Hampton, Virginia.',
      publishedAt: '2022-01-28T21:19:00.000Z',
      launches: [],
      events: [],
      __v: 0
    }

    const res = await request(app).post('/articles').send(article)

    expect(res.statusCode).toEqual(200)
  })
  it('Should edit an article', async () => {
    const article = {
      featured: true
    }

    const res = await request(app).patch('/articles/88888').send(article)

    expect(res.statusCode).toEqual(200)
  })
  it('Should delete an article', async () => {
    const res = await request(app).delete('/articles/88888')

    expect(res.statusCode).toEqual(200)
  })
})
