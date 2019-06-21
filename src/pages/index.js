import React from "react"
// import { Link } from 'gatsby'

import Layout from "../components/layout"
import Jumbotron from "../components/Home/Jumbotron"
import Skills from "../components/Home/Skills"
import Services from "../components/Home/Services"
import Hosting from "../components/Home/Hosting"
import About from "../components/Home/About"

// if (typeof window !== 'undefined') {
//   // Make scroll behavior of internal links smooth
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]');
// }
const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <Skills />
    <About />
    <Hosting />
    {/* <LaptopMockup /> */}
    <Services />
  </Layout>
)

export default IndexPage
