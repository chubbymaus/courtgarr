import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
const LISTING_QUERY = graphql `
      query BlogPostListing {
        allMarkdownRemark(
          limit: 10,
          sort: {
            fields: [frontmatter___date],
            order: DESC
          },

        ) {
          edges {
            node {
              excerpt
              frontmatter {
                title
                slug
                date(formatString: "MMMM DD, YYYY")
                topic
              }
            }
          }
        }
      }
    `;

const Listing = () => (
  <StaticQuery 
    query={LISTING_QUERY}
    render={({allMarkdownRemark}) => (
      allMarkdownRemark.edges.map(edge => (
        
        <article key={edge.node.frontmatter.slug}>
          <h2 className="title has-text-primary">   
          <Link to={`/posts${edge.node.frontmatter.slug}`}>          
             {edge.node.frontmatter.title}
          </Link>   
          </h2>
          <h2 className="subtitle">             
             {edge.node.frontmatter.date}
          </h2>
          
          <p>
            {edge.node.excerpt}
          </p>
          <Link to={`/posts${edge.node.frontmatter.slug}`}>Read More</Link>
          <hr style={{ backgroundColor:"#222", opacity: ".125", height:"1px"}}/>
        </article>
        
      ))
    )}
  />
)

export default Listing