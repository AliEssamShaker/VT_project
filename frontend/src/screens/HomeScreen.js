import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Blog from '../components/Blog'
import blogs from '../blogs'

const HomeScreen = () => {
    return (

        <>
            <h1>Vivid Theory blogs</h1>
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
