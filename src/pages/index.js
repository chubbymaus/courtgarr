import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Jumbotron'
import About from '../components/About'
import Projects from '../components/Projects'
import logo from '../img/cgicon_1.png';
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer';

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
  <Projects /> 
  <ContactForm />
  <Footer/>
  </div>
)

export default IndexPage
