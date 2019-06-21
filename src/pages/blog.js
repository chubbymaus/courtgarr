import React from 'react'
// import { Link } from 'gatsby'
import Archive from '../components/Blog/Archive'
import Listing from '../components/Blog/Listing'
import BlogLayout from '../components/BlogLayout'

const Blog = () => (
  <BlogLayout>
    <div className="columns">
    <div className="column is-three-quarters">
      <Listing />
    </div>
    <div className="column is-one-quarter">  
      <Archive />
    </div>
    </div>
  </BlogLayout>
)

export default Blog