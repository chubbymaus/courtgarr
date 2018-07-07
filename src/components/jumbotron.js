import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import {Button,PrimaryOutline,SecondaryOutline} from '../components/buttons';

const Jumbotron = styled.div.attrs({
  className: 'jumbotron',
})`
  background-color: ${props => props.theme.main} !important;
  height: 95vh;
  h1{
    font-family: 'VT323', monospace;
    font-size: 3.5rem;
  }
  p{
    font-family:  'Ubuntu', sans-serif;
    font-size: 2rem;
  }
  .col{
   text-align: center;
   color: #333;
   padding-top: 60px;
  }
  @media only screen and (max-width: 600px){
      h1{
        font-family: 'VT323', monospace;
        font-size: 2.5rem;
      }
      p{
        font-family:  'Ubuntu', sans-serif;
        font-size: 1.75rem;
      }
  }
`;

const theme = {
  main: '#f3f3f3',
  color: '#333',
};



const Hero = ({ bgColor, textColor}) => (
<Jumbotron theme={{ main: bgColor, color: textColor}}>
  <div className="container">
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
      <div className="col">
        <h1>Hi! My name is Court</h1>
        <p>I'm a full-stack developer <br/> and graphic designer..</p>

        
          <a href="#about"><PrimaryOutline>Learn More</PrimaryOutline></a>
        
        
          <Link to="/blog"><SecondaryOutline>View My Blog</SecondaryOutline></Link>
        
      </div>
    </div>
  </div>
</Jumbotron>

)

export default Hero
