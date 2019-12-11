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
    className='section has-background-primary has-text-left'
    id='footer-bg'
  >
    <div className='container'>
      <div className='columns has-text-white '>
        <div className='column is-half has-text-cenetered'>
          <h1 className='title has-text-white'>
            Living, learning, &amp; leveling up one day at a time.
          </h1>

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
        </div>
        <div className='column is-half'>
          <div className='card shadowed'>
            <div className='card-content'>
              <h1 className='title has-text-primary'>Say Hello...</h1>
              <form
                name='contact'
                method='POST'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
              >
                <input type='hidden' name='form-name' value='contact' />
                <input type='hidden' name='bot-field' />
                <div className='field is-grouped'>
                  <div className='control is-expanded'>
                    <input
                      className='input'
                      type='text'
                      name='firstName'
                      placeholder='First Name'
                    />
                  </div>
                  <div className='control is-expanded'>
                    <input
                      className='input'
                      type='text'
                      name='lastName'
                      placeholder='Last Name'
                    />
                  </div>
                </div>

                <div className='field'>
                  <div className='control is-expanded'>
                    <input
                      className='input'
                      type='email'
                      name='email'
                      placeholder='Email'
                    />
                  </div>
                </div>
                <div className='field is-grouped'>
                  <div className='control is-expanded'>
                    <input
                      className='input'
                      type='tel'
                      name='phoneNumber'
                      placeholder='Phone'
                    />
                  </div>
                  <div className='control is-expanded'>
                    <input
                      className='input'
                      type='text'
                      name='companyName'
                      placeholder='Company Name'
                    />
                  </div>
                </div>

                <div className='field'>
                  <div className='control'>
                    <textarea
                      className='textarea'
                      name='message'
                      placeholder='Message'
                    />
                  </div>
                </div>

                <div className='field'>
                  <p className='control'>
                    <button
                      className='button is-info is-medium is-fullwidth shadowed'
                      type='submit'
                    >
                      Submit
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p className='has-text-white'>
      {' '}
      &copy; {new Date().getFullYear()} Court Garr
    </p>
  </FooterSection>
);

export default Footer;
