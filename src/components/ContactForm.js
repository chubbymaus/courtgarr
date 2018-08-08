import React, { Component } from 'react'
import Section from '../components/Section';
import Link from 'gatsby-link';
import {Button} from './Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Submit = Button.extend`
  background-color: #45BA82;
  color: #f6f6f6;
  width: 100%;
  max-width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
`

export default class ContactForm extends Component {
  render() {
    return (
      <div>
        <Section main={'#3EAEEA'} textColor={'#333'}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>About Me</h1>
                <h5>I am a Southern Utah native with a deep love of learning, music, and traveling. In addition to learning new programming or design techniques I love studying foreign languages. More specifically Korean, Chinese, and Japanese.</h5>
                <br />
                <h4>View more at:</h4>
                <FontAwesomeIcon icon={['fab', 'github-alt']} className="fa-3x"/> 
                <FontAwesomeIcon icon={['fab', 'npm']} className="fa-3x"/>
                <FontAwesomeIcon icon={['fab', 'behance']} className="fa-3x"/>
                <FontAwesomeIcon icon={['fab', 'linkedin']} className="fa-3x"/>
                <br/>
                <Link to = "/page-3/"> Go to page 3 </Link>
              </div>
              <div className="col-md-6">
               <div className="card">
                <div className="card-body">
                <div className="card-title">
                  <h2>Drop me a line...</h2>
                </div>
                
                  <form name="contact" method="POST" netlify>
                      <div className="form-group">
                        
                        <input type="text" className="form-control"  placeholder="Name"/>
                        
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email"/>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone Number"/>
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" placeholder="Message..." rows="5"></textarea>
                      </div>
                      <Submit type="submit">Send</Submit>
                    
                  </form>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

      </div>
    )
  }
}
