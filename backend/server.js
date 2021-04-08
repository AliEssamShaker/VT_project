import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import blogRoutes from './routes/blogRoutes.js'
dotenv.config()

connectDB()

const app = express()

app.use('/api/blogs', blogRoutes)

app.use(notFound)

app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('API is runnning')
})


app.use('/api/blogs', blogRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running on port ${PORT}`))