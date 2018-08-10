import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import logo from '../img/cgicon_1.png';
import styled from 'styled-components';
import Footer from '../components/Footer';
import AboutCard from '../components/AboutCard';

const PostContainer = styled.div`
  margin: 50px auto;
  min-height: 70vh;
a {
  color: #48acf0;

  font-size: .9rem;
  letter-spacing: 1px;
  &:hover{
    text-decoration: none;
   
  }
}


`


export default function Template ({data}) {

  const {markdownRemark: post} = data;

  return (
    <div>
    <Header bgColor={'#f3f5ff'} logoProp={logo} textColor={'#444'}/>
    <PostContainer>
     <div className="container">  
     <div className='row'>
     <div className='col-md-8'> 
      <div className="card">
      <div className="card-body">
      <h1 className="card-title">{post.frontmatter.title}</h1>
      <hr/>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
      
      <Link to="/blog">Go back</Link>
      </div>
      </div>
      </div>
        <div className="col-md-4">
          <AboutCard/>
        </div>
      </div>
      </div>
      </PostContainer>
      <Footer />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark( frontmatter: {path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
