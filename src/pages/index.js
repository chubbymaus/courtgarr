import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Hero from '../components/jumbotron'
import {Button,PrimaryOutline,SecondaryOutline} from '../components/buttons';
import logo from '../img/cgicon5.png';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}


const IndexPage = () => (
  <div>
  <Header bgColor={'#f3f3f3'} logoProp={logo} textColor={'#444'}/>
  <Hero bgColor={'#f3f3f3'} />

  <div className="container" id="about">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to = "/page-3/"> Go to page 3 </Link>
  </div>
    <div className="container">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to = "/page-3/"> Go to page 3 </Link>
  </div>
    <div className="container">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to = "/page-3/"> Go to page 3 </Link>
  </div>
    <div className="container">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <PrimaryOutline>
    <Link to="/page-2/">Go to page 2</Link>
    </PrimaryOutline>
    <br/>
    <Link to = "/page-3/"> Go to page 3 </Link>
  </div>
  </div>
)

export default IndexPage
