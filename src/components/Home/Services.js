import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import HeroImage from '../../images/screens2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = styled.a.attrs({
  className: 'button'
})`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
    ${'' /* margin-right: 1rem; */}
    margin-left: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

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
  justify-content: space-around;
`;

const Prototyping = () => (
  <section className='hero has-background-link is-bold' id='lines-bg'>
    <div className='hero-body'>
      <div className='container'>
        <div className='columns'>
          <HeroText className='column has-text-right is-half'>
            <Fade left>
              <h1 className='title has-text-primary'>
                <span className='half-highlight-success'>
                  Project Planning & Strategy
                </span>
              </h1>
              <h2 className='subtitle has-text-primary'>
                If you ever want people to use your app you need a good
                marketing strategy. I have a Bachelor's degree in Marketing and
                love helping companies make meaningful strategies.
              </h2>
            </Fade>
          </HeroText>

          <Image className='column has-text-centered is-half' id='proto-image'>
            <Fade right>
              <FontAwesomeIcon
                icon={['fal', 'chess']}
                style={{ fontSize: '18rem' }}
                className='has-text-primary'
              />
            </Fade>
          </Image>
        </div>
      </div>
    </div>
  </section>
);

export default Prototyping;
