import express from 'express'
import { getWpPosts, getWpPost } from '../controllers/postControllers.js'

const router = express.Router()

router
  .get('/', async (req, res) => {
    try {
      res.render('blog', { posts: await getWpPosts() })
    } catch (e) {
      throw new Error(e)
    }
  })
  .get('/:slug', async (req, res) => {
    try {
      const { slug } = req.params
      const postToRender = await getWpPost(slug)

      res.render('post', postToRender)
    } catch (e) {
      throw new Error(e)
    }
  })

export default router
