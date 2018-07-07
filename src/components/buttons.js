import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    width: 188px;
    border: 2px solid transparent;
    margin: 1em;
    padding: 0.5em 1em;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    border-radius: .20rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

`;
const PrimaryOutline = Button.extend `
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
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
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  color: #48acf0;
  background-color: transparent;
  background-image: none;
  border-color: #48acf0;
    &: hover {
    background-color: #48acf0;
    color: #fff;
  }
`;

export default {
  Button, 
  PrimaryOutline, 
  SecondaryOutline
}