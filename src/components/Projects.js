import React, { Component } from 'react';
import styled from 'styled-components';
import Section from './Section';

import {SecondaryOutline} from './Buttons';
import BlueHaus from '../img/bluehaus.png';
import InfernoApps from '../img/infernoapps.png';
import InfernoCamp from '../img/infernocamp.png';
import KandanLogo from '../img/kandanred.png';
import SquiblyLogo from '../img/squiblydark.png';
import Lofi from '../img/lofilogo.png';

const PortfolioItem = styled.div.attrs({
  className: 'col-lg-4',
})`
 padding: 1rem;

 .card{
       height: 300px;
       background-color: #f6f6f6;
       color: #333;
       box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
 }
 img{
   height: 45px;
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
export default class Projects extends Component {
  render() {
    return (
      <div>
          <Section main={'#333'} textColor={'#fcfcfc'} id='projects'>
            <div className='container'>
              <h1>Projects</h1>
              
            </div>

          <div className="container" >
            <div className="row">
        <PortfolioItem>
        
        <div className="card">
          
          <div className="card-body">
          <img src={InfernoApps}/>
          <p className="text-muted"></p>
          <hr />
            <h5 className="card-title">My Freelance Design Site</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <SecondaryOutline>View Site</SecondaryOutline>
          </div>
        </div>
        </PortfolioItem>
        <PortfolioItem>
          
        <div className="card">
          <div className="card-body">
          <img src={Lofi}/>
            <hr />
            <h5 className="card-title">Online Clothing Store</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <SecondaryOutline>View Site</SecondaryOutline>
          </div>
        </div>
        </PortfolioItem>
        <PortfolioItem>
        <div className="card">
          
          <div className="card-body">
          <img src={BlueHaus}/>
            <hr />
            <h5 className="card-title">Code Snippet Library</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <SecondaryOutline>View Site</SecondaryOutline>
          </div>
        </div>
        </PortfolioItem>


            </div>
            <div className="row">
        <PortfolioItem>
        
        <div className="card">
          
          <div className="card-body">
          <img src={InfernoCamp}/>
          <hr />
            <h5 className="card-title">Learning Management System</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <SecondaryOutline>View Site</SecondaryOutline>
          </div>
        </div>
        </PortfolioItem>
        <PortfolioItem>
          
        <div className="card">
          <div className="card-body">
          <img src={KandanLogo}/>
            <hr />
            <h5 className="card-title">React UI Library</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <h4 className='text-muted'>under development...</h4>
          </div>
        </div>
        </PortfolioItem>
        <PortfolioItem>
        <div className="card">
          
          <div className="card-body">
          <img src={SquiblyLogo}/>
            <hr />
            <h5 className="card-title">Secure Chat App</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <h4 className='text-muted'>under development...</h4>
          </div>
        </div>
        </PortfolioItem>


            </div>
          </div>
          </Section>
      </div>
    )
  }
}
