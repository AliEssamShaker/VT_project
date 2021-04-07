import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup} from 'react-bootstrap'
import blogs from '../blogs'


const BlogScreen = ({match}) => {

    const blog = blogs.find((b) => b._id === match.params.id)
    
    return (
        <>
            <Link className='btn btn-light my-3' to='/'> 
                Go Back 
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={blog.image} alt={blog.name} fluid/>
                </Col>

                <Col>
                    <ListGroup variant='flush'>
                        <h3>{blog.name}</h3>
                    </ListGroup>
                
                </Col>
            </Row>
        </>
    )
}

export default BlogScreen
