import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allContentfulBlog(limit: 100, sort: { fields: [date], order: [DESC] }) {
      totalCount
      edges {
        node {
          id
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allContentfulBlog }) =>
      allContentfulBlog.edges.map(edge => (
        <article key={edge.node.id}>
          <Link to={`/blog/${edge.node.slug}`}>
            <h2 className="title has-text-primary">{edge.node.title}</h2>
          </Link>

          <p>{edge.node.body.childMarkdownRemark.excerpt}</p>
          <Link to={`/blog/${edge.node.slug}`}>
            <h2 className="subtitle has-text-info">Read More</h2>
          </Link>
          <hr
            style={{ backgroundColor: "#222", opacity: ".125", height: "1px" }}
          />
        </article>
      ))
    }
  />
)

export default Listing
