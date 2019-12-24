import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

const NavBar = (props) => (
    <Navbar bg="light">
        <Container>
            <Navbar.Brand>Demo Task</Navbar.Brand>
            <Nav>
                <Link to="/"> Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/albums"> Albums</Link>
            </Nav>
        </Container>
    </Navbar >
)

export default withRouter(NavBar);