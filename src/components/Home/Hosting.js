import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeroImage from '../../images/aboutImage.png';
const Button = styled.a.attrs({
  className: 'button'
})`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.75rem;
  }
`;

const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const Development = () => (
  <section className='hero has-background-primary is-bold'>
    <div className='hero-body'>
      <div className='container '>
        <div className='columns'>
          <Image className='column is-half has-text-centered' id='hero-image'>
            <Fade left>
              <FontAwesomeIcon
                icon={['far', 'code']}
                style={{ fontSize: '18rem' }}
                className='has-text-white'
              />
            </Fade>
          </Image>
          <HeroText className='column is-half'>
            <Fade right>
              <h1 className='title has-text-white'>
                <span className='half-highlight'>Development & Deployment</span>
              </h1>
              <h2 className='subtitle has-text-white'>
                Development using cutting edge technologies like Reactjs and
                GraphQL helps future proof your app. Also, with the help of
                things like Prettier and ESlint, I make sure everything is
                cleaned up and readable.
              </h2>
            </Fade>
          </HeroText>
        </div>
      </div>
    </div>
  </section>
);

export default Development;
