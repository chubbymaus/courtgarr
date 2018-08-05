import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header';
import logo from '../img/greenLogo.png';

export default function Template ({data}) {

  const {markdownRemark: post} = data;

  return (
    <div>
    <Header bgColor={'#333'} logoProp={logo} textColor={'#f6f6f6'}/>
     <div className="container">   
      <h1>{post.frontmatter.title}</h1>
      <hr/>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
      <Link to="/blog">Go back</Link>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark( frontmatter: {path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
