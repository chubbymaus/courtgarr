import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';
import HeroImage from '../../images/utah.png';
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

const About = () => (

    <section className="hero has-background-info is-medium is-bold" id="about">
        <div className="hero-body">
            <div className="container has-text-left">
                <div className="columns">
                    <div className="column is-half " id="hero-image">
                        <img src={HeroImage} alt="Hero Image" style={{height:'350px'}} />
                    </div>
                    <HeroText className="column is-half">
                        
                        <h1 className="title has-text-white has-text-weight-bold">
                            Hi! My Name Is Court
                        </h1>
                        <h2 className="has-text-weight-light subtitle has-text-white">
                            I'm a Fullstack Developer and <br/>Graphic Designer...
                        </h2>
                        <ButtonGroup>
                        <Button className="is-primary shadowed is-medium" href="#about">Learn More</Button>
                        <Link to="/blog"><Button className="is-success shadowed is-medium">View My Blog</Button></Link>
                        </ButtonGroup>
                    </HeroText>

                </div>
            </div>
        </div>
    </section>

)

export default About;