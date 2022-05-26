
import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo  from '../Pictures/logo-temp.png';

const NavbarHeaderWrapper = styled.div`

    .navbar {
        padding: 1vh 2.5vw;
        opacity: 100%;
        background-color: transparent !important;
    }
    .navbar-brand {
        //-webkit-user-select: none;
        //-moz-user-select: none;
        //-ms-user-select: none;
        //user-select: none;
    }
    .navbar-brand, .nav-link {
        color: white !important;
    }
    .nav-link {
        padding: 0 1vw !important;
    }
    .logo {
        height: 50px;
        width: 50px;
    }
`;

const NavbarHeader = () => {

    return (
        <NavbarHeaderWrapper>
            <Navbar id="navbar" className="navbar-dark" bg="dark" expand="lg">
                <Navbar.Brand>
                    <img className="logo" src={logo} alt="Earth's Plug logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="">About</Nav.Link>
                        <Nav.Link href="">Products</Nav.Link>
                        <Nav.Link href="">Contact Us</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavbarHeaderWrapper>
    );
};

export default NavbarHeader;