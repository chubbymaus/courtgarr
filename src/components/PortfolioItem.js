import React from 'react';
import styled from 'styled-components';

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

const PortfolioInfo = styled.div`
  display: none;

  &: hover{
    display: block;
  background-color: rgba(0,0,0,0.5); 
    z-index: 2;
  }

`
export default {PortfolioItem, PortfolioInfo}