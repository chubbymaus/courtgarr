import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import logo from '../img/cgicon_1.png';
import styled from 'styled-components';
import Footer from '../components/Footer';

import AboutCard from '../components/AboutCard';

const BlogContainer = styled.div`
  margin: 50px auto;
  background-color: #f3f5ff;

  a {
  color: #48acf0;

  font-size: .9rem;
  letter-spacing: 1px;
  &:hover{
    text-decoration: none;
   
  }
}

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
    <p className="card-text">{post.node.excerpt}</p>
      <Link 
          key={post.node.id}
          to={post.node.frontmatter.path}>Read more...</Link>
     </div>   
     <br/>  
     </div>
     
    ))}
    </div>
    <div className="col-md-4">
      <AboutCard />
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
          html
          excerpt
        }
      }
    }
  }
`
export default BlogPage
