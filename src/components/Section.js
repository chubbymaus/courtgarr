import styled from 'styled-components';

const Section = styled.div`
  background-color: ${props => props.main};
  color: ${props => props.textColor};
  padding: 2.5rem 0;
  min-height: 92.5vh;
    hr{
        width: 50px; 
        height: 3px;
        color: #31c56e;
        background: #31c56e;
        
    }
    
`;



export default Section;