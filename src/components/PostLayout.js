import React, { Component } from 'react'
import { graphql, Link } from 'gatsby';
import Layout from './layout'
import Archive from '../components/Blog/Archive'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <div className="blog-content container">
        <div className="columns">
          <div className="column is-three-quarters">
        <h1 className="title">{markdownRemark.frontmatter.title}</h1>
        <div className="subtitle">{markdownRemark.frontmatter.date} | {markdownRemark.frontmatter.topic}</div>
        <div dangerouslySetInnerHTML={{
          __html: markdownRemark.html
          }} />
          <Link to='/blog'><FontAwesomeIcon icon={['far', 'arrow-left']} /> Back to blog listing</Link>
        </div>
        <div className="column is-one-quarter">  
          <Archive />
        </div>
        </div>
        </div>
      </Layout>
    )
  }
};

export const query = graphql`
  query PostQuery($slug: String) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        topic
      }
    }
}`;
