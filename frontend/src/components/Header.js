import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Vivid Theory</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/"><i className='fas fa-home'></i>Home</Nav.Link>
                            <Nav.Link href="/"><i className='fas fa-home'></i>Link</Nav.Link>
                        
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
