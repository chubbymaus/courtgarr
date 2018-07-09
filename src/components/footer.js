import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #333;
`;

const FooterHero = styled.div `

  margin-right: auto;
  margin-left: auto;
      p{
        text-transform: uppercase;
        margin-bottom: 0;
        padding: 1rem 0;
        letter-spacing: 1px;
        color: #fcfcfc;
    }

`;


const Footer = () => (
 <FooterContainer>
    <FooterHero>
      <div className="container">
      <p> &copy; {new Date().getFullYear()} Court Garr</p>
      </div>
    </FooterHero>
  </FooterContainer>
)

export default Footer