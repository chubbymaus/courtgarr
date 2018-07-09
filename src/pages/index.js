import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Hero from '../components/jumbotron'
import Section from '../components/section'
import {Button,PrimaryOutline,SecondaryOutline} from '../components/buttons';
import logo from '../img/cgicon_1.png';
import Footer from '../components/footer';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}


const IndexPage = () => (
  <div>
  <Header bgColor={'#f3f5ff'} logoProp={logo} textColor={'#444'}/>
  <Hero bgColor={'#f3f5ff'} />
  <Section main={'#333'} textColor={'#fcfcfc'} id="about">
  <div className="container" >
    <div className="row">
    <div className="col-md-6">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to = "/page-3/"> Go to page 3 </Link>
    </div>
        <div className="col-md-6">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to = "/page-3/"> Go to page 3 </Link>
    </div>
    </div>
  </div>
  </Section>
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
  <Footer/>
  </div>
)

export default IndexPage
