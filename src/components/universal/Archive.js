import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'



const Archive = () => (
  <StaticQuery
    query={graphql`
      query BlogPostsArchive {
        allMarkdownRemark(
          limit: 10,
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
              }

            }
          }
        }
      
      }
    `}
    render={({allMarkdownRemark}) => (
      <>

 
       <aside>
         <h3>Archive</h3>
         {allMarkdownRemark.edges.map(edge => {
           if (edge.node.frontmatter.title === 'My First Gatsby Post') {
            return(
           <li className='has-text-success'>{edge.node.frontmatter.title}  <FontAwesomeIcon icon={['far', 'gem']} /></li>
            )
           } else {
            return(
           <li className='has-text-primary'>{edge.node.frontmatter.title} <FontAwesomeIcon icon={['fab', 'node-js']} /></li>
            )

           }
         })}
       </aside>
      </>
    )}
  />
)

export default Archive
