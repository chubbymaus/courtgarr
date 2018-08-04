import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    min-width: 188px;
    border: 2px solid transparent;
    margin-right: 1em;
    padding: 0.5em 1em;
    font-size: 1.25rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    line-height: 1.5;
    border-radius: .20rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      @media only screen and (max-width: 600px){
        margin: 1em;
      }

`;
const PrimaryOutline = Button.extend `
  font-family: 'Ubuntu', sans-serif;
  font-size: 1rem;
  color: #31c56e !important;
  background-color: transparent;
  background-image: none;
  border-color: #31c56e;
    &:hover {
    background-color: #31c56e;
    color: #fff !important;
  }

`;
const SecondaryOutline = Button.extend `
  font-family: 'Ubuntu', sans-serif;
  font-size: 1rem;
  color: #48acf0;
  background-color: transparent;
  background-image: none;
  border-color: #48acf0;
    &: hover {
    background-color: #48acf0;
    color: #fff;
  }
`;
const AltOutline = Button.extend `
  font-family: 'Ubuntu', sans-serif;
  font-size: 1rem;
  color: #333;
  background-color: transparent;
  background-image: none;
  border-color: #333;
    &: hover {
    background-color: #333;
    color: #fff;
  }
`;

export default {
  Button, 
  AltOutline,
  PrimaryOutline, 
  SecondaryOutline
}