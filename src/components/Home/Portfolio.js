import React from 'react'
// import Link from 'gatsby-link';
// import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Portfolio = () => (

    <section className="hero has-background-info is-bold" id='about-section'>
        <div className="hero-body">
        <div className="container">
        <Fade left>
        <h1 className="title has-text-primary has-text-weight-bold">
           Some of my recent work...
        </h1>
        </Fade>
<div className="tile is-ancestor">
  <div className="tile is-vertical ">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <Fade left>
        <article className="tile is-child shadowed has-text-centered notification is-primary has-text-primary" id="infernotile">
          <div className='tilecontent'>
          <p className="title is-bold" style={{fontSize: '1.75rem'}}>Inferno Apps</p>
          <p className="subtitle">Freelance Design Site</p>
          <a className="button is-fullwidth is-success">View Site</a>
          </div>
        </article>
        </Fade>
        <Fade left>
        <article className="tile is-child shadowed has-text-centered notification is-white has-text-white" id="bluehaustile">
        <div className='tilecontent'>
          <p className="title" style={{fontSize: '1.75rem'}}>Bluehaus</p>
          <p className="subtitle">Code Snippets</p>
          <a className="button is-info is-fullwidth">View Site</a>
          </div>
        </article>
        </Fade>
      </div>
      <div className="tile is-parent is-vertical">
        <Fade down>
        <article className="tile is-child shadowed has-text-centered notification is-primary has-text-primary" id="squiblytile">
          <div className='tilecontent'>
          <p className="title is-bold" style={{fontSize: '1.75rem'}}>Squibly</p>
          <p className="subtitle">Secure Messaging App</p>
          <a className="button is-fullwidth is-success">View Site</a>
          </div>
        </article>
        </Fade>
        <Fade up>
        <article className="tile is-child shadowed has-text-centered notification is-white has-text-white" id="infernocamptile">
        <div className='tilecontent'>
          <p className="title" style={{fontSize: '1.75rem'}}>InfernoCamp</p>
          <p className="subtitle">Learning Management<br/>System</p>
          <a className="button is-info is-fullwidth">View Site</a>
          </div>
        </article>
        </Fade>
      </div>
      <div className="tile is-parent is-vertical">
        <Fade right>
        <article className="tile is-child shadowed has-text-centered notification is-primary has-text-primary" id="blocworktile">
          <div className='tilecontent'>
          <p className="title is-bold" style={{fontSize: '1.75rem'}}>Blocwork</p>
          <p className="subtitle">Building Blocks</p>
          <a className="button is-fullwidth is-success">View Site</a>
          </div>
        </article>
        </Fade>
        <Fade right>
        <article className="tile is-child shadowed has-text-centered notification is-white has-text-white" id="kandantile">
        <div className='tilecontent'>
          <p className="title" style={{fontSize: '1.75rem'}}>Kandan</p>
          <p className="subtitle">Learning Management<br/>System</p>
          <a className="button is-info is-fullwidth">View Site</a>
          </div>
        </article>
        </Fade>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
    </section>

)

export default Portfolio;