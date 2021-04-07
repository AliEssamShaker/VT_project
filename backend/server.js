const express = require('express')
const blogs = require('./data/blogs')

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

app.listen(0909, console.log('server running on port 0909'))