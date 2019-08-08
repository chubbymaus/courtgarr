import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const POST_ARCHIVE_QUERY = graphql`
  query ArchivePostListing {
    allContentfulBlog(limit: 5, sort: { fields: [date], order: [DESC] }) {
      edges {
        node {
          id
          title
          slug
          iconClass
          iconName
        }
      }
    }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allContentfulBlog }) => (
      <div className="card shadowed">
        <div className="card-content">
          <h2 className="subtitle">Recent Posts</h2>
          {allContentfulBlog.edges.map(edge => (
            <ul key={edge.node.id}>
              <Link to={`/blog/${edge.node.slug}`}>
                <li className=" has-text-info">
                  {edge.node.title} &nbsp;
                  <FontAwesomeIcon
                    icon={[`${edge.node.iconClass}`, `${edge.node.iconName}`]}
                  />
                </li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    )}
  />
);

export default Archive
