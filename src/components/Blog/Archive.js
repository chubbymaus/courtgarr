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
                topic
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

      
       <div className="card shadowed">
        <div className="card-content">
         <h3>Archive</h3>
         <ul>
         {allMarkdownRemark.edges.map(edge => {
           if (edge.node.frontmatter.topic === "react") {
            return(
           <li className='has-text-info' key={edge.node.frontmatter.slug} >
           <Link to={`/posts/${edge.node.frontmatter.slug}`}>
           {edge.node.frontmatter.title}  <FontAwesomeIcon icon={['fab', 'vuejs']} className="has-text-success" /></Link></li>
           
            )
           } else {
            return(
           <li className='has-text-primary' key={edge.node.frontmatter.slug}>
           <Link to={`/posts/${edge.node.frontmatter.slug}`}>
           <FontAwesomeIcon icon={['fab', 'react']} />
           {edge.node.frontmatter.title} 
           </Link>
           </li>
            )

           }
         })}
         </ul>
         </div>
       </div>
      
      </>
    )}
  />
)

export default Archive
