import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        
                        <Navbar.Brand >Vivid Theory</Navbar.Brand>
                    </LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/">
                                <Nav.Link ><i className='fas fa-home'></i>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/">
                                <Nav.Link ><i className='fas fa-home'></i>Link</Nav.Link>
                            </LinkContainer>
                            
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
