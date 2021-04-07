import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import blogs from './data/blogs.js'


dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is runnning')
})

app.get('/api/blogs', (req, res) => {
    res.json(blogs)   
})

app.get('/api/blogs/:id', (req, res) => {
    const blog = blogs.find( b => b._id === req.params.id)
    res.json(blog)   
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running on port ${PORT}`))