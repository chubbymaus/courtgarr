import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import logo from '../img/cgicon_1.png';
import styled from 'styled-components';
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostContainer = styled.div`
  margin: 50px auto;
  min-height: 70vh;


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
           <div className="card">
     <div className="card-body">
     <h4 className="card-title">Court Garr</h4>
    <hr />
    <p className="card-text">Hi! Welcome to my blog. This is were I write about projects I'm working on and technologies I'm excited about.</p>
        <FontAwesomeIcon icon={['fab', 'github-alt']} className="fa-2x"/> 
        <FontAwesomeIcon icon={['fab', 'npm']} className="fa-2x"/>
        <FontAwesomeIcon icon={['fab', 'behance']} className="fa-2x"/>  
        <FontAwesomeIcon icon={['fab', 'linkedin']} className="fa-2x"/>  
     </div>   
  
     </div>

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
