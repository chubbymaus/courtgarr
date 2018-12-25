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
         <h3>Recent Posts</h3>
         <ul>
         {allMarkdownRemark.edges.map(edge => {
           if (edge.node.frontmatter.topic === "React") {
            return(
           <li className='has-text-info' key={edge.node.frontmatter.slug} >
           <Link to={`/posts/${edge.node.frontmatter.slug}`}>
           <FontAwesomeIcon icon={['fab', 'react']} className="has-text-info" />
           &nbsp; {edge.node.frontmatter.title}  </Link></li>
           
            )
           } else if (edge.node.frontmatter.topic === "nodejs") {
            return(
           <li className='has-text-info' key={edge.node.frontmatter.slug} >
           <Link to={`/posts/${edge.node.frontmatter.slug}`}>
           <FontAwesomeIcon icon={['fab', 'Node']} className="has-text-primary" />
           &nbsp; {edge.node.frontmatter.title}  </Link></li>
           
            )
           } else if (edge.node.frontmatter.topic === "Vue") {
            return(
           <li className='has-text-info' key={edge.node.frontmatter.slug} >
           <Link to={`/posts/${edge.node.frontmatter.slug}`}>
           <FontAwesomeIcon icon={['fab', 'vuejs']} className="has-text-success" />
           &nbsp; {edge.node.frontmatter.title}  </Link></li>
           
            )
           } else if (edge.node.frontmatter.topic === "Python") {
             return (
               <li className='has-text-info' key={edge.node.frontmatter.slug} >
                 <Link to={`/posts/${edge.node.frontmatter.slug}`}>
                   <FontAwesomeIcon icon={['fab', 'python']} className="has-text-success" />
                   &nbsp; {edge.node.frontmatter.title}  </Link></li>

             )
           } else{
            return(
           <li className='has-text-primary' key={edge.node.frontmatter.slug}>
           <Link to={`/posts/${edge.node.frontmatter.slug}`}>
           <FontAwesomeIcon icon={['far', 'pencil-ruler']} />
            &nbsp; {edge.node.frontmatter.title} 
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
