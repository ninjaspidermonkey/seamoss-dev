
import React from 'react';
import styled from 'styled-components';
import NavbarHeader from './Navbar';
import Button from 'react-bootstrap/Button';

const AppWrapper = styled.div`
    background-color: #121212;
    //border: 1px solid blue;
    height: 200vh;
`;


const App = () => {

    return (
        <AppWrapper className="app g-0">
            <div className="hero-wrapper hero">
                <header>
                    <NavbarHeader />
                </header>
                <div className="landing container">
                    <div className="landing-text">
                        <h1 className="unselectable">Feel better.</h1>
                        <h4>Your body is composed of <b>102</b> vitamins and minerals.</h4>
                        <h4>Our Sea Moss contains <b>92</b> of those essential vitamins and minerals.</h4>
                    </div>
                    <div className="landing-btns">
                        <Button className="btn1">Learn more</Button>
                        <Button className="btn2">Shop now</Button>
                    </div>
                </div>

            </div>

        </AppWrapper>
    );
};

export default App;