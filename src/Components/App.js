
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavbarHeader from './Navbar';
import Button from 'react-bootstrap/Button';
import doctorImg from '../Pictures/undraw_doctors_hwty.svg';
import { BsArrowUp } from 'react-icons/bs';

const AppWrapper = styled.div`
    background-color: #dddddd;

    .scroll-top-btn {
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: 1000;
        width: 10%;
        height: 5%;
        margin: 0 2.5% 2.5% 0;
        color: black;
        background-color: transparent;
    }
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
                        <h4>Earth's Plug's Chondrus Crispus contains <b>92</b> of those essential vitamins and minerals.</h4>
                    </div>
                    <div className="landing-btns">
                        <Button className="btn1">Learn more</Button>
                        <Button className="btn2">Shop now</Button>
                    </div>
                </div>
            </div>
            <section className="about container">
                <section className="benefits">
                    <div className="col1">
                        <h1 className="">Just a few benefits...</h1>
                        <ul>
                            <li>natural anti-inflammatory</li>
                            <li>mucus emulsifier</li>
                            <li>converts white fat to water</li>
                            <li>supports healthy digestion & gut health</li>
                            <li>anti-viral & anti-fungal properties</li>
                            <li>strengthens immune system</li>
                            <li>rejuvenates and moisturizes skin, treating acne and dark spots</li>
                            <li>helps balance thyroid for hormone health</li>
                            <li>improves sex quality</li>
                            <li>great for cognitive recognition and brain health</li>
                            <li>and more...</li>
                        </ul>
                    </div>
                    <div className="col2">
                        <img className="benefits-img" src={doctorImg} alt="doctors with plant"/>
                    </div>
                </section>
                <section className="what-is-it">
                    <h1 className="header-text center-text">What is it?</h1>
                    <div className="col1">
                        <h2 className="center-text"><b>Chondrus Crispus</b></h2>
                        <h3 className="center-text">(Irish Moss)</h3>
                        <p>Chondrus Crispus is a natural red algae that grows along the rocky
                            parts of the Atlantic coast of continental Europe and North America.
                            Its color varies depending on sun exposure, but usually resembles
                            a purplish color.
                        </p>
                        <p>Chondrus Crispus is known for the 92 essential vitamins and minerals
                            that it provides the human body alongisde the benefits that come with it.
                            Chondrus Crispus has been used for centuries and originally received the
                            name "Irish Moss" from Ireland during the 1800s when the moss was used
                            to survive the potato famine.
                        </p>
                    </div>
                    <div className="col2">
                        <h2 className="center-text"><u>Applications</u></h2>
                        <ul className="applications-list">
                            <li>smoothies</li>
                            <li>teas</li>
                            <li>shakes</li>
                            <li>juices</li>
                            <li>face/body care</li>
                            <li>oatmeal</li>
                            <li>stews</li>
                            <li>gravies</li>
                            <li>and more...</li>
                        </ul>
                    </div>
                </section>
                <section className="our-goal">
                    <h1>Our Goal</h1>
                    <p>Earth's Plug aims to create a healthier & more natural lifestyle for the body.
                        The body thrives in a natural state, and a natural state makes it much easier to ingest 
                        and apply nourishment that contributes to the longevity and vitality of our lives.
                    </p>
                    <p>The human body was not created to get sick. Our bodies are self-sustainable cars
                        that operate well for longer distances when properly fueled and maintenanced.
                    </p>
                    <p>With that, Earth's Plug offers a variety of natural products that are hand-crafted
                        with longevity and nourishment in mind. Our main product at the moment is a purple
                        sea moss gel that can be applied to the skin and is also entirely edible. We also 
                        provide other strands of sea moss, such as Jamaican sea moss or gracilaria. These natural 
                        products are superfoods in and of themselves and offer a plethora of benefits!
                    </p>
                </section>
            </section>

            { /*<BsArrowUp className="scroll-top-btn" onClick={ () => window.scrollTo(0, 0) } /> */}
        </AppWrapper>
    );
};

export default App;