import React from 'react'
// import { Link } from 'gatsby'
import Archive from '../components/Blog/Archive'
import Listing from '../components/Blog/Listing'
import BlogLayout from '../components/BlogLayout'

const Blog = () => (
  <BlogLayout>
    <div className="">
      <Listing />
      <Archive />

    </div>
  </BlogLayout>
)

export default Blog
