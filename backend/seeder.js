import mongoose from 'mongoose'
import dotenv from 'dotenv'
import blogs from './data/blogs.js'
import Blog from './models/blogModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try{
        await Blog.deleteMany()

        const sampleBlogs = blogs.map(blog =>{
            return {...blog}
        })

        await Blog.insertMany(sampleBlogs)

        console.log('Data imported !')
        process.exit()
    } catch(error){
        console.log(`${error}`)
        process.exit(1)

    }
}


const destroyData = async () => {
    try{
        await Blog.deleteMany()

        
        console.log('Data destroyed !')
        process.exit()
    } catch(error){
        console.log(`${error}`)
        process.exit(1)

    }
}

if(process.argv[2] === '-d'){
    destroyData()
} else{
    importData()
}