import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Jumbotron from '../components/Home/Jumbotron'
import About from '../components/Home/About'
import Prototyping from '../components/Home/Prototyping';
import Development from '../components/Home/Development';
import Production from '../components/Home/Production';
import Portfolio from '../components/Home/Portfolio';

const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <About />
    <Prototyping />
    <Development />
    <Production />
    <Portfolio />
  </Layout>
)

export default IndexPage
