import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import logo from '../img/cgicon_1.png';

const BlogPage = ({data}) => (
  <div>
    <Header bgColor={'#f3f5ff'} logoProp={logo} />
    <div className="container">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
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
