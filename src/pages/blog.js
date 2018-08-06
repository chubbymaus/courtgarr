import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import logo from '../img/cgicon_1.png';
import styled from 'styled-components';
import Footer from '../components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BlogContainer = styled.div`
  margin: 50px auto;
  background-color: #f3f5ff;
`;

const BlogPage = ({data}) => (
  <div>
    <Header bgColor={'#f3f5ff'} logoProp={logo} textColor={'#444'}/>
    <BlogContainer>
    <div className="container">
    <div className="row">
    <div className="col-md-8">

    
    {data.allMarkdownRemark.edges.map(post => (
     <div className="card">
     <div className="card-body">
     <h5 className="card-title">{post.node.frontmatter.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{post.node.frontmatter.date}</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link 
          key={post.node.id}
          to={post.node.frontmatter.path}>Read more...</Link>
     </div>   
     <br/>  
     </div>
     
    ))}
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
    </BlogContainer>
    <Footer />
  </div>
)
export const pageQuery = graphql `
  query IndexQuery{
    allMarkdownRemark(
      limit: 10,
       sort: {
         fields: [frontmatter___date],
         order: DESC
       },
      filter: {frontmatter: {published: {eq: true}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
            published
          }
        }
      }
    }
  }
`
export default BlogPage
