import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import {AltOutline,PrimaryOutline,SecondaryOutline} from '../components/buttons';
import aboutImage from '../img/aboutImage.png';

const Jumbotron = styled.div.attrs({
  className: 'jumbotron',
})`
  background-color: ${props => props.theme.main} !important;
  background-image: url(${aboutImage});
  background-repeat: no-repeat;
  background-position: 5% 50%; 
  background-size: 50%;
  height: 100vh;
  margin-bottom: 0px !important;
  border-radius: 0 !important;
  h1{
    font-size: 3rem;
  }
  p{
    font-family:  'Ubuntu', sans-serif;
    font-size: 1.5rem;
  }
  button{
    margin-right:0;
  }
  .col{
   text-align: right;
   color: #333;
   padding-top: 60px;
  }
  @media only screen and (max-width: 978px){
    background-position: 3% 65%;
  }
 
  @media only screen and (max-width: 600px){
      background-position: center bottom;
      background-size: 85%;
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



const About = ({ bgColor, textColor}) => (
<Jumbotron theme={{ main: bgColor, color: textColor}} id="about" >
  <div className="container">
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
      <div className="col">
        <h1>Marketing Meet Design</h1>
        <p> I have a bachelors degree in Marketing<br/>In addition to years of experience<br/> as a freelance developer</p>
          <a href="#projects"><AltOutline>View Projects</AltOutline></a>
        
      </div>
    </div>
  </div>
</Jumbotron>

)

export default About
