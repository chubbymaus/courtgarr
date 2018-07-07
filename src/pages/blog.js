import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import logo from '../img/cgicon5.png';

const BlogPage = ({data}) => (
  <div>
    <Header bgColor={'#f3f3f3'} logoProp={logo} />
    <div className="container">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
    {data.allMarkdownRemark.edges.map(post => (
     <li>
      <Link 
          key={post.node.id}
          to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
     </li>
    ))}
    </ul>
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
            path
            published
          }
        }
      }
    }
  }
`
export default BlogPage
