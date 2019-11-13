import React, { Component } from 'react';
import Link from 'gatsby-link';
import Logo from '../images/courtgarr3.png';

class Navbar extends Component {
  state = {
    menuOpen: false,
    isTop: true,
    navColor: 'navbar clearBG',
    logo: Logo,
    mobile: 'navbar-menu has-background-white has-text-dark',
    mobileToggle: 'navbar-burger has-text-dark'
  };

  menuToggleClickHandler = () => {
    this.setState(prevState => {
      return { menuOpen: !prevState.menuOpen };
    });
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 75;
      if (isTop !== this.state.isTop) {
        this.setState({
          navColor: 'navbar is-white is-fixed-top shadowed',
          mobile: 'navbar-menu has-background-white has-text-dark',
          mobileToggle: 'navbar-burger has-text-dark'
        });
      } else {
        this.setState({
          navColor: 'navbar clearBG',

          mobile: 'navbar-menu has-background-white has-text-dark',
          mobileToggle: 'navbar-burger has-text-dark'
        });
      }
    });
  }
  render() {
    return (
      <div>
        <nav className={this.state.navColor} id='clearBG'>
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
                  ? `${this.state.mobile}  has-text-white is-active`
                  : 'navbar-menu'
              }
              id='navMenu'
            >
              <div className='navbar-end is-primary'>
                <div className='navbar-item'>
                  <Link to='/' className='has-text-dark'>
                    Home
                  </Link>
                </div>
                {/* <div className='navbar-item'>
                  <Link to='/wordpress' className='has-text-dark'>
                    Wordpress Solutions
                  </Link>
                </div> */}
                <div className='navbar-item'>
                  <Link to='/blog' className='has-text-dark'>
                    Blog
                  </Link>
                </div>

                <div className='navbar-item'>
                  <Link
                    to='/contact'
                    className='button is-fullwidth is-outlined is-primary'
                  >
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
