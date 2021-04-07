import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Blog from '../components/Blog'
import blogs from '../blogs'

const HomeScreen = () => {
    return (

        <>
            
            <div id="brand" align="left">
                <img src="https://vividtheory.blob.core.windows.net/assignment/vtlogo.svg" alt="VT Logo" width="200" height="150"/>
            </div>
                
            <div id="brandName" align="center" >
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
