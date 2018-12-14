import React from 'react'
// import Link from 'gatsby-link';
import styled from 'styled-components';
import HeroImage from '../../images/aboutImage.png';
import Fade from 'react-reveal/Fade';

const Button = styled.a.attrs({
    className: 'button',
})`
    width: 180px;
    margin-top: .5rem;
    margin-bottom: .5rem;
    margin-left: 1rem;
    
  @media only screen and (max-width: 600px){
      width: 100%;
      margin-left: 0;
  }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

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
const Image = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;


`;

const Prototyping = () => (

    <section className="hero has-background-info  is-bold">
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                    <HeroText className="column has-text-right is-half">
                        <Fade left>
                        <h1 className="title has-text-primary has-text-weight-bold">
                            IT'S GARRMANARNAR
                        </h1>
                        <h2 className="subtitle has-text-primary has-text-weight-light">
                            I'm a Fullstack Developer and <br/>Graphic Designer...
                        </h2>
                        <ButtonGroup>
                        <Button className="is-white shadowed is-medium" href="#about">Learn More</Button>
                        <Button className="is-primary shadowed is-medium">View My Blog</Button>
                        </ButtonGroup>
                        </Fade>
                    </HeroText>
                    <Image className="column has-text-left is-half" id="proto-image">
                        <Fade right>
                        <img src={HeroImage} alt="Hero Image" />
                        </Fade>
                    </Image>
                </div>
            </div>
        </div>
    </section>

)

export default Prototyping;