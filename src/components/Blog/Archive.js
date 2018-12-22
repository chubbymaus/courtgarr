import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const POST_ARCHIVE_QUERY = graphql `
      query BlogPostsArchive {
        allMarkdownRemark(
          limit: 5,
          sort: {
            fields: [frontmatter___date],
            order: DESC
          },

        ) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
              }

            }
          }
        }
      
      }
    `;

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <>

 
       <aside className="container">
         <h3>Archive</h3>
         <ul>
         {allMarkdownRemark.edges.map(edge => {
           if (edge.node.frontmatter.topic === 'React') {
            return(
           <li className='has-text-info' key={edge.node.frontmatter.slug} >
           <Link to={`/posts/${edge.node.frontmatter.slug}`}>
           {edge.node.frontmatter.title}  <FontAwesomeIcon icon={['fab', 'react']} className="has-text-success" /></Link></li>
           
            )
           } else {
            return(
           <li className='has-text-primary' key={edge.node.frontmatter.slug}>
           <Link to={`/posts/${edge.node.frontmatter.slug}`}>
           {edge.node.frontmatter.title} <FontAwesomeIcon icon={['fab', 'node-js']} />
           </Link>
           </li>
            )

           }
         })}
         </ul>
       </aside>
      </>
    )}
  />
)

export default Archive
