const express = require('express')
const dotenv = require('dotenv')
const blogs = require('./data/blogs')


dotenv.config()

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

const PORT = process.env.PORT || 7878

app.listen(PORT, console.log(`server running on port ${PORT}`))