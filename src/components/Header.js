import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const NavBar = styled.nav.attrs({
  className: 'navbar navbar-expand-lg navbar-light',
})`
  background-color: ${props => props.theme.main};
  box-shadow: ${props => props.theme.shadow };
  clear-fix: both;
 
  .logo {
    height: 40px;
    padding-top: 5px;
  }
  .nav-link{
     color: ${props => props.theme.color} !important;
  }
  &:after{
    top:65px;
  }
`;

const theme = {
  main: 'mediumseagreen',
  color: '#333',
  shadow: '0px 2px 15px 0px rgba(0,0,0,0.27)'
};



const Header = ({ bgColor, logoProp, textColor, shadow }) => (
<NavBar theme={{ main: bgColor, color: textColor, shadow: shadow}}>
  <div className="container">
        <Link className="navbar-brand" to="/">
        <img src={logoProp} alt='Squibly Logo' className="logo"/>
      </Link>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

  {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
    <ul className="navbar-nav ml-auto">

      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <a href="/#projects" className="nav-link">Projects</a>
      </li>
      <li className="nav-item">
        <a href="/#contact" className="nav-link">Contact</a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/blog">Blog</Link>
      </li>
    </ul>

  </div>
  {/* </div> */}
</NavBar>


)

export default Header
