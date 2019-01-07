import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Jumbotron from '../components/Home/Jumbotron'
import Prototyping from '../components/Home/Prototyping';
import Development from '../components/Home/Development';
import Production from '../components/Home/Production';
import Portfolio from '../components/Home/Portfolio';
import Skills from '../components/Home/Skills';
const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <Skills />
    <Production />
    <Development />
    <Prototyping />
    <Portfolio />
  </Layout>
)

export default IndexPage
