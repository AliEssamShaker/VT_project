import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Blog = ({blog}) => {
    return (
        <Card className='my-2 p-2 rounded' >
            <Link to={`/blog/${blog._id}`}>
                <Card.Img  style={{height: "200px", width:"100%"}} src={blog.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/blog/${blog._id}`} >
                    <Card.Title as='div' >
                        <strong>{blog.name}</strong>
                    </Card.Title>

                </Link>
            </Card.Body>
            
        </Card>
    )
}

export default Blog
