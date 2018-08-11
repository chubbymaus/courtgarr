import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const iconWrapper = styled.div`

`
export default class SocialLinks extends Component {
  render() {
    return (
      <iconWrapper>
        <a href="https://github.com/chubbymaus" target="_blank" className="social">
         <FontAwesomeIcon icon={['fab', 'github-alt']} className="fa-2x"/> 
        </a>
        <a href="https://www.npmjs.com/~chubbymaus" target="_blank" className="social">
          <FontAwesomeIcon icon={['fab', 'npm']} className="fa-2x"/>
        </a>
        <a href="https://www.behance.net/court090c" target="_blank" className="social">
         <FontAwesomeIcon icon={['fab', 'behance']} className="fa-2x"/>
        </a>
        <a href="https://www.linkedin.com/in/court-garr" target="_blank" className="social"> 
         <FontAwesomeIcon icon={['fab', 'linkedin']} className="fa-2x"/>
        </a> 
        
      </iconWrapper>
    )
  }
}
