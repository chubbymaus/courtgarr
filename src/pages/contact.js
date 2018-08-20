import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import logo from '../img/cgicon_1.png';
import Footer from '../components/Footer';

const ContactPage = ({data}) => (
  <div>
    <Header bgColor={'#f3f5ff'} logoProp={logo} textColor={'#444'}/>
    <ContactForm />
    <Footer />
  </div>  
);

export default ContactPage;