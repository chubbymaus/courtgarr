import React, { Component } from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

const Card = styled.div`
  .social {
    color: #333 !important;

    &:hover{
      color: #3EAEEA !important;
    }
  }
`;
export default class AboutCard extends Component {
  render() {
    return (
      <Card>
           <div className="card">
            <div className="card-body">
              <h4 className="card-title">Court Garr</h4>
              <hr />
              <p className="card-text">Hi! Welcome to my blog. This is were I write about projects I'm working on and technologies I'm excited about.</p>
              <SocialLinks/> 
            </div>   
           </div>
      </Card>
    )
  }
}
