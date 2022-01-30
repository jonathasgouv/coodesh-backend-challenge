import mongoose from '@database/index'
import IArticle from '../types/article'

// Create a Schema corresponding to the document interface.
const ArticleSchema = new mongoose.Schema<IArticle>({
  _id: {
    type: 'number',
    required: true
  },
  featured: {
    type: 'boolean',
    required: true
  },
  title: {
    type: 'string',
    required: true
  },
  url: {
    type: 'string',
    required: true
  },
  imageUrl: {
    type: 'string',
    required: true
  },
  newsSite: {
    type: 'string',
    required: true
  },
  summary: {
    type: 'string',
    required: false
  },
  publishedAt: {
    type: 'string',
    required: true
  },
  launches: [
    {
      id: {
        type: 'string',
        required: true
      },
      provider: {
        type: 'string',
        required: true
      }
    }
  ],
  events: [
    {
      id: {
        type: 'string',
        required: true
      },
      provider: {
        type: 'string',
        required: true
      }
    }
  ]
}, { _id: false })

// Create a Model.
const Article = mongoose.model<IArticle>('Article', ArticleSchema)

export default Article
