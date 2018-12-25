---
title: Code test
slug: /code-test
date: 2018-12-23T01:05:39.437Z
topic: React
---
Lorem ipsum dolor amet kickstarter mlkshk swag truffaut meh. Cardigan seitan offal poutine listicle af hell of stumptown brooklyn vape gochujang normcore hexagon shabby chic. Hell of gastropub bespoke, aesthetic brooklyn waistcoat chia keffiyeh affogato pok pok intelligentsia taiyaki tumblr. Kombucha food truck tilde, chartreuse bespoke snackwave forage copper mug chia bitters shoreditch. Butcher farm-to-table forage keytar crucifix ennui, +1 copper mug subway tile. Coloring book tumblr swag chia bitters schlitz tumeric stumptown hell of vape ethical.

```javascript
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

```
