import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Nav.css'; // Import custom CSS for styling

function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-black navbar-dark">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                        alt="Netflix Logo"
                        height="40"
                        className="d-inline-block align-top navbar-logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="#" className="nav-link">TV Shows</Nav.Link>
                        <Nav.Link href="#" className="nav-link">Movies</Nav.Link>
                        <Nav.Link href="#" className="nav-link">New & Popular</Nav.Link>
                        <b> <Nav.Link href="#" className="nav-link">sign in</Nav.Link></b>

                    </Nav>
                    <img
                        className="user"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="user"
                        height="40"
                    />
                </Navbar.Collapse>


            </Container >
        </Navbar >
    );
}

export default MyNavbar;
