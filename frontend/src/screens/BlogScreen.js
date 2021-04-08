import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup} from 'react-bootstrap'
import axios from 'axios'

const BlogScreen = ({match}) => {

    const [blog, setBlog] = useState({})

    useEffect(() => {
        const fetchBlog = async () => {
            const {data} = await axios.get(`/api/blogs/${match.params.id}`)

            setBlog(data)
        }

        fetchBlog()

    }, [match])
    
    return (
        <>
            <Link className='btn btn-light my-3' to='/'> 
                Go Back 
            </Link>
            <Row>
                <Col md={6}>
                    <Image style={{height: "400px", width:"100%"}} src={blog.image} alt={blog.name} fluid/>
                </Col>

                <Col>
                    <ListGroup.Item variant='flush'>
                        <h3>{blog.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {blog.description}
                    </ListGroup.Item>
                
                </Col>
            </Row>
        </>
    )
}

export default BlogScreen
