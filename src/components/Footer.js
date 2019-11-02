import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterSection = styled.footer`
  a {
    color: #f1f0ee;
  }
  a:hover {
    color: #22a0f3;
  }
`;

const Footer = () => (
  <FooterSection
    className='section has-background-primary is-small has-text-centered'
    id='footer-bg'
  >
    <div className='container is-narrow'>
      <div className='logo' />
      <div className='columns has-text-white is-centered'>
        <div className='column is-half'>
          <h1 className='title has-text-white '>
            Living, learning, &amp; leveling up one day at a time.
          </h1>
        </div>
      </div>
      <div className='columns has-text-white is-centered'>
        <div className='column is-half'>
          <h3 style={{ fontSize: '2rem' }}>
            <a href='https://dribbble.com/court_garr'>
              <FontAwesomeIcon icon={['fab', 'dribbble']} />
            </a>
            <span>
              &nbsp;&nbsp;
              <a href='https://www.behance.net/court090c'>
                <FontAwesomeIcon icon={['fab', 'behance']} />
              </a>
            </span>
            <span>
              &nbsp;&nbsp;
              <a href='https://www.github.com/chubbymaus'>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </span>
            {/* <span>&nbsp;&nbsp;
              <a href="https://angel.co/court-garr?public_profile=1">
              <FontAwesomeIcon icon={['fab', 'angellist']} />
              </a>
            </span> */}
            <span>
              &nbsp;&nbsp;
              <a href='https://www.linkedin.com/in/court-garr/'>
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </span>
          </h3>
          <br />
          <br />
          {/* <a href="https://bulma.io">
          <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="128" height="24"/>
        </a> */}
          <p className='has-text-white'>
            {' '}
            &copy; {new Date().getFullYear()} Court Garr
          </p>
        </div>
      </div>
    </div>
  </FooterSection>
);

export default Footer;
