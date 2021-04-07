import React from 'react'
import { Card } from 'react-bootstrap'

const Blog = ({blog}) => {
    return (
        <Card className='my-3 p-3 rounded' >
            <a href={`/blog/${blog._id}`}>
                <Card.Img src={blog.image} variant='top' />
            </a>

            <Card.Body>
                <a href={`/blog/${blog._id}`} >
                    <Card.Title as='div' >
                        <strong>{blog.name}</strong>
                    </Card.Title>

                </a>
            </Card.Body>
            
        </Card>
    )
}

export default Blog
