import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import {PrimaryOutline,SecondaryOutline} from '../components/Buttons';
import bgimage from '../img/bgimage@2.5x.png';

const Jumbotron = styled.div.attrs({
  className: 'jumbotron',
})`
  background-color: ${props => props.theme.main} !important;
  background-image: url(${bgimage});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 50%;
  height: 95vh;
  margin-bottom: 0px !important;
  h1{
    font-size: 3rem;
  }
  p{
    font-family:  'Ubuntu', sans-serif;
    font-size: 2rem;
  }
  .col{
   text-align: left;
   color: #333;
   padding-top: 60px;
  }
  @media only screen and (max-width: 768px){
    background-image: none;
  }
  @media only screen and (max-width: 600px){
      
      h1{
        
        font-size: 2rem;
      }
      p{
        font-family:  'Ubuntu', sans-serif;
        font-size: 1.5rem;
      }
        .col{
          text-align: center;
          color: #333;
          padding-top: 60px;
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
        <p>I'm a full-stack developer <br/> and graphic designer...</p>

        
          <a href="#about"><PrimaryOutline>Learn More</PrimaryOutline></a>
        
        
          <Link to="/blog"><SecondaryOutline>View My Blog</SecondaryOutline></Link>
        
      </div>
    </div>
  </div>
</Jumbotron>

)

export default Hero
