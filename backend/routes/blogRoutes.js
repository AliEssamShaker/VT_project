import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Blog from '../models/blogModel.js'


// To fetch blogs
// GET /api/blogs

router.get('/', asyncHandler(async(req, res) => {
    const blogs = await Blog.find({})
    res.json(blogs)   
}))

// To fetch a single blog
// GET /api/blogs/:id
router.get('/:id', asyncHandler(async(req, res) => {
    const blog = await Blog.findById(req.params.id)

        if (blog){
            res.json(blog)
        } else{
            res.status(404)
            throw new Error('Blog not found')
        }


    res.json(blog)   
}))

export default router