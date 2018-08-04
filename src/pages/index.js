import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Hero from '../components/jumbotron'
import About from '../components/about'
import Section from '../components/section'
import {PortfolioItem, PortfolioInfo} from '../components/PortfolioItem'
import {Button,PrimaryOutline,SecondaryOutline} from '../components/buttons';
import BlueHaus from '../img/bluehaus.png';
import InfernoApps from '../img/infernoapps.png';
import InfernoCamp from '../img/infernocamp.png';
import KandanLogo from '../img/kandanred.png';
import SquiblyLogo from '../img/squiblydark.png';
import Lofi from '../img/lofilogo.png';
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
  <About bgColor={'#45BA82'}/>
  <Section main={'#333'} textColor={'#fcfcfc'} id='projects'>
    <div className='container'>
      <h1>Projects</h1>
      
    </div>

  <div className="container" >
    <div className="row">
 <PortfolioItem>
 
 <div className="card">
  
  <div className="card-body">
  <img src={InfernoApps}/>
  <p className="text-muted"></p>
  <hr />
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <SecondaryOutline>View Site</SecondaryOutline>
  </div>
</div>
 </PortfolioItem>
 <PortfolioItem>
  
 <div className="card">
  <div className="card-body">
  <img src={Lofi}/>
    <hr />
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <SecondaryOutline>View Site</SecondaryOutline>
  </div>
</div>
 </PortfolioItem>
 <PortfolioItem>
 <div className="card">
  
  <div className="card-body">
  <img src={BlueHaus}/>
    <hr />
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <SecondaryOutline>View Site</SecondaryOutline>
  </div>
</div>
 </PortfolioItem>


    </div>
    <div className="row">
 <PortfolioItem>
 
 <div className="card">
  
  <div className="card-body">
  <img src={InfernoCamp}/>
  <hr />
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <SecondaryOutline>View Site</SecondaryOutline>
  </div>
</div>
 </PortfolioItem>
 <PortfolioItem>
  
 <div className="card">
  <div className="card-body">
  <img src={KandanLogo}/>
    <hr />
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <h4 className='text-muted'>under development...</h4>
  </div>
</div>
 </PortfolioItem>
 <PortfolioItem>
 <div className="card">
  
  <div className="card-body">
  <img src={SquiblyLogo}/>
    <hr />
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <h4 className='text-muted'>under development...</h4>
  </div>
</div>
 </PortfolioItem>


    </div>
  </div>
  </Section>
 

  <Section main={'#3EAEEA'} textColor={'#fcfcfc'}>
    <div className="container">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to = "/page-3/"> Go to page 3 </Link>
  </div>
  </Section>
 
  <Footer/>
  </div>
)

export default IndexPage
