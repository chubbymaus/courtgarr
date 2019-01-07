import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'

import styled from 'styled-components'

const RequestWrapper = styled.div `
  margin-top:0px;

  @media only screen and (max-width: 600px){
    padding: 15px !important;
}
`;

const HeroText = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const ContactPage = () => (
  <Layout>
    <div id="about-section">
     <RequestWrapper className="container is-fluid">


      <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                    <HeroText className="column is-half">
                        
                    <h1 className="title has-text-primary">
                          Ready To Work Together?
                        </h1>
                        <h2 className="subtitle has-text-primary">
                           Fill out the form and I will be in touch as soon as possible!
                        </h2>

                    </HeroText>
                  <div className="column is-half">
                    <div className="card shadowed" id="contact-card">
                    <div className="card-content">
                    <h1 className="title has-text-primary">
                          Say Hello...
                        </h1>
                        <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <input type="hidden" name="bot-field" />
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input className="input" type="text" name="firstName" placeholder="First Name"/>
                      </div>
                      <div className="control is-expanded">
                        <input className="input" type="text" name="lastName" placeholder="Last Name"/>
                      </div>
                    
                    </div>

                    <div className="field">
                      <div className="control is-expanded">
                        <input className="input" type="email" name="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input className="input" type="tel" name="phoneNumber" placeholder="Phone" />
                      </div>
                      <div className="control is-expanded">
                        <input className="input" type="text" name="companyName" placeholder="Company Name" />
                      </div>
                    </div>



                    <div className="field">
                      <div className="control">
                        <textarea className="textarea" name="message" placeholder="Message"></textarea>
                      </div>
                    </div>

                    <div className="field">
                      <p className="control">
                        <button className="button shadowed is-info is-medium is-fullwidth" type="submit">
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
        </div>
    </section>
          </RequestWrapper>
  </div>
  </Layout>
)

export default ContactPage
