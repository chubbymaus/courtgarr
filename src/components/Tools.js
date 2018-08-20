import React, {Component} from 'react';
import styled from 'styled-components';
import Section from './Section';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

const PortfolioItem = styled.div.attrs({className: 'col-lg-4'})`
 padding: 1rem;

 .card{
       min-height: 300px;
       background-color: #fff;
       color: #333;
       box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
 }
 .list-group-item{
   background-color: #fff;
 }
 img{
   height: 45px;
 }

 button{
   margin-top: 10px;
   width: 100%;
 }


  hr{

      height: 5px;
      color: #333;
      background: #3EAEEA;
      border: none;
      max-width: 75px;
      margin: 10px 0px;
  }
  
`
export default class Tools extends Component {
  render() {
    return (
    <div>
      <Section main={'#fcfcfc'} textColor={'#333'} sectionheight={'30vh'}>
        <div className="container">
          <div className="row">
            <div className="card-group">
              <div className="card text-center">
                <div className="card-body">
                    <h2 className="">
                    <FontAwesomeIcon icon='sitemap' className="fa-2x"/>
                    </h2>
                  <h3 className="card-title">Design</h3>
                  <p className="card-text text-muted">I enjoy every aspect of the design process from mapping out ideas with clients to publishing designs to the web.</p>
                  
                  <h4 className="card-text">Design Tools</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item text-muted">Adobe XD</li>
                    <li className="list-group-item text-muted">Illustrator/Photoshop</li>
                    <li className="list-group-item text-muted">Mockflow</li>
                    <li className="list-group-item text-muted">Lucidcharts</li>
                    <li className="list-group-item text-muted">FontAwesome</li>
                    <li className="list-group-item text-muted">After Effects</li>
                    <li className="list-group-item text-muted">Camtasia/SnagIt</li>
                  </ul>
                </div>
              </div>
              <div className="card text-center">
                <div className="card-body">
                    <h2 className="">
                    <FontAwesomeIcon icon='file-code' className="fa-2x"/>
                    </h2>
                  <h3 className="card-title">Development</h3>
                  <p className="card-text text-muted">Nothing is better than bringing great designs to life with modern technologies like React/NodeJs or Ruby on Rails.</p>
                  <h4 className="card-text">Development Tools</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item text-muted">React & Node</li>
                    <li className="list-group-item text-muted">Ruby on Rails</li>
                    <li className="list-group-item text-muted">Postgres</li>
                    <li className="list-group-item text-muted">GitHub</li>
                    <li className="list-group-item text-muted">VS Code</li>
                    <li className="list-group-item text-muted">Hyper Terminal</li>
                    <li className="list-group-item text-muted">Wordpress</li>
                  </ul>
                </div>
              </div>
              <div className="card text-center">
                <div className="card-body">
                    <h2 className="">
                    <FontAwesomeIcon icon='chart-area' className="fa-2x"/>
                    </h2>
                  <h3 className="card-title">Business Development</h3>
                  <p className="card-text text-muted">I love helping others develop their creative ideas and have worked on strategy and planning with startups.</p>
                  <h4 className="card-text">Business Dev Tools</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item text-muted">SWOT Analysis</li>
                    <li className="list-group-item text-muted">MVP Planning</li>
                    <li className="list-group-item text-muted">Business Plans</li>
                    <li className="list-group-item text-muted">Asana</li>
                    <li className="list-group-item text-muted">Content Creation</li>
                    <li className="list-group-item text-muted">Google Analytics</li>
                    <li className="list-group-item text-muted">Agile</li>
                  </ul>
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
