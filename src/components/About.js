import React from 'react';
import styled from 'styled-components';
import {AltOutline} from '../components/Buttons';
import aboutImage from '../img/aboutImage.png';

const Jumbotron = styled.div.attrs({
  className: 'jumbotron',
})`
  background-color: ${props => props.theme.main} !important;
  background-image: url(${aboutImage});
  background-repeat: no-repeat;
  background-position: 5% 50%; 
  background-size: 45%;
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
    background-position: 3% 75%;
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
        <h1>Design + Marketing</h1>
        <p> I began building web projects 5 years ago <br/>
          while working on a degree in Marketing at SUU. <br/> Since then I 've helped businesses throughout Utah build <br/> their web presence and plan their marketing strategies. </p>
          {/* <a href="#projects"><AltOutline>View Projects</AltOutline></a> */}
        
      </div>
    </div>
  </div>
</Jumbotron>

)

export default About
