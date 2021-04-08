import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Blog from '../components/Blog'
import axios from 'axios'

const HomeScreen = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetchBlogs = async () => {
            const {data} = await axios.get('/api/blogs')

            setBlogs(data)
        }

        fetchBlogs()

    }, [])

    return (

        <>
            
                    
            <div id="brandName" align="center" >
                <img src="https://vividtheory.blob.core.windows.net/assignment/vtlogo.svg" alt="VT Logo" width="200" height="150"  />
                <h1>Vivid Theory mini blog</h1>
                <strong>A Full Stack Challenge</strong>
            </div>

        
                
            <Row>
                {blogs.map((blog) =>(
                    <Col sm={12} md={6} lg={4} xl={3} >
                        <Blog blog={blog}/>
                    </Col>
                ) )}
            </Row>   
             
            
        </>
    )
}

export default HomeScreen
