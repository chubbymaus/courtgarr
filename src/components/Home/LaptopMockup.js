import React from 'react'
import styled from 'styled-components';
import HeroImage from '../../images/laptopmock1.png';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media only screen and (max-width: 600px){
      flex-direction: column;
    }
`;



const Jumbotron = () => (

    <section className="hero has-background-info is-medium is-bold" >
            <div className="container">
                <Container>
                 <Fade left>
                    <div className="" id="laptop_image">
                        <img src={HeroImage} alt="Hero" id="laptop_image_img"/>
                    </div>
                 </Fade>   
                </Container>
            </div>
    </section>

)

export default Jumbotron;