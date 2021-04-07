import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import blogRoutes from './routes/blogRoutes.js'
dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is runnning')
})


app.use('/api/blogs', blogRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running on port ${PORT}`))