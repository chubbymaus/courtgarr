import React, { Component } from 'react';
import Link from 'gatsby-link';
import Icon from '../images/courtgarr3.png';

class Navbar extends Component {
  state = {
    menuOpen: false,
    isTop: true,
    navColor: 'navbar is-white shadowed is-fixed-top',
    logo: Icon,
    contact: 'button is-info is-outlined is-fullwidth',
    mobile: 'navbar-menu has-background-white has-text-primary',
    mobileToggle: 'navbar-burger has-text-primary'
  };

  render() {
    return (
      <div>
        <nav className={this.state.navColor}>
          <div className='container is-fluid'>
            <div className='navbar-brand'>
              <Link className='navbar-item' to='/'>
                <img src={this.state.logo} alt='Logo' />
              </Link>
              <div
                role='button'
                className={
                  this.state.menuOpen
                    ? `${this.state.mobileToggle} is-active`
                    : `${this.state.mobileToggle}`
                }
                data-target='navMenu'
                aria-label='menu'
                aria-expanded='false'
                onClick={this.menuToggleClickHandler}
              >
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </div>
            </div>
            <div
              className={
                this.state.menuOpen
                  ? `${this.state.mobile} is-active`
                  : 'navbar-menu'
              }
              id='navMenu'
            >
              <div className='navbar-end'>
                <Link to='/blog' className='navbar-item'>
                  Code & Design Blog
                </Link>
                {/* <Link to="/starters" className="navbar-item">Starter Templates</Link> */}
              </div>
              <div className='navbar-end'>
                <div className='navbar-item'>
                  <Link to='/contact' className={this.state.contact}>
                    Say Hello...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
