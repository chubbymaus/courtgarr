import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import HeroImage from '../../images/design.png';
import Fade from 'react-reveal/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Button = styled.a.attrs({
  className: 'button'
})`
  width: 180px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
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
  justify-content: flex-end;

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

  margin-bottom: 50px;
`;

const Prototyping = () => (
  <section className='hero has-background-info is-bold' id='lines-bg'>
    <div className='hero-body'>
      <div className='container'>
        <div className='columns'>
          <HeroText className='column has-text-right is-half'>
            <Fade left>
              <h1 className='title has-text-primary has-text-weight-bold'>
                <span className='half-highlight-alt'>
                  Planning & Prototyping
                </span>
              </h1>
              <h2 className='subtitle has-text-primary has-text-weight-light'>
                Planning and prototyping ensures everyone is on the same page.
                Using tools like Balsamiq and Sketch helps get a project off on
                the right foot.
              </h2>
            </Fade>
          </HeroText>
          <Image className='column has-text-centered is-half' id='proto-image'>
            <Fade right>
              <FontAwesomeIcon
                icon={['far', 'object-group']}
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
