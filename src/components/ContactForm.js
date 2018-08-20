import React, { Component } from 'react'
import Section from '../components/Section';

import {Button} from './Buttons';
import SocialLinks from './SocialLinks';

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
        <Section main={'#f3f5ff'} textColor={'#333'} id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>About Me</h1>
                <h5>I am a Southern Utah native with a deep love of learning, music, and traveling. In addition to learning new programming or design techniques I love studying foreign languages. More specifically Korean, Chinese, and Japanese.</h5>
                <br />
                <h4>View more at:</h4>
                <SocialLinks/>

              </div>
              <div className="col-md-6">
               <div className="card">
                <div className="card-body">
                <div className="card-title">
                  <h2>Drop me a line...</h2>
                </div>
                
                    <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <input type="hidden" name="bot-field" />
                      <div className="form-group">
                        
                        <input type="text" className="form-control" name="name" placeholder="Name"/>
                        
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email" name="email"/>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" name="phone" placeholder="Phone Number"/>
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" name="message" placeholder="Message..." rows="5"></textarea>
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
