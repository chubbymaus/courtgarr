import React from 'react'
// import Link from 'gatsby-link';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import HeroImage from '../../images/aboutImage.png';
const Button = styled.a.attrs({
    className: 'button',
})`
    width: 180px;
    margin-top: .5rem;
    margin-bottom: .5rem;
    margin-right: 1rem;
    
  @media only screen and (max-width: 600px){
      width: 100%;
  }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media only screen and (max-width: 600px){
      flex-direction: column;
    }
`;

const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title{
      font-size: 2.5rem;
    }
    .subtitle{
      font-size: 1.75rem;
    }
`;

const Image = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;


`;
const Development = () => (

    <section className="hero has-background-white is-bold">
        <div className="hero-body">
            <div className="container ">
                <div className="columns">
                    <Image className="column is-half has-text-right" id="hero-image">
                    <Fade left>

                        <img src={HeroImage} alt="Hero Image" />
                    </Fade>
                    </Image>
                    <HeroText className="column is-half">
                     <Fade right>   
                        <h1 className="title has-text-primary">
                            IT'S GARRMANARNAR
                        </h1>
                        <h2 className="subtitle has-text-primary">
                            I'm a Fullstack Developer and <br/>Graphic Designer...
                        </h2>
                        <ButtonGroup>
                        <Button className="is-info shadowed is-medium" href="#about">Learn More</Button>
                        <Button className="is-success shadowed is-medium">View My Blog</Button>
                        </ButtonGroup>
                      </Fade>  
                    </HeroText>
                </div>
            </div>
        </div>
    </section>

)

export default Development;