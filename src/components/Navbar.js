import React, { Component } from "react"
import Link from "gatsby-link"
import Logo from "../images/courtgarr2.png"
import Icon from "../images/courtgarr3.png"

class Navbar extends Component {
  state = {
    menuOpen: false,
    isTop: true,
    navColor: "navbar is-info",
    logo: Logo,
    contact: "button is-white has-text-white is-outlined is-fullwidth",
    mobile: "navbar-menu has-background-info has-text-white",
    mobileToggle: "navbar-burger has-text-white",
  }

  menuToggleClickHandler = () => {
    this.setState(prevState => {
      return { menuOpen: !prevState.menuOpen }
    })
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 75
      if (isTop !== this.state.isTop) {
        this.setState({
          navColor: "navbar is-white shadowed is-fixed-top",
          logo: Icon,
          contact: "button is-info is-outlied is-fullwidth",
          mobile: "navbar-menu has-background-white has-text-primary",
          mobileToggle: "navbar-burger has-text-primary",
        })
      } else {
        this.setState({
          navColor: "navbar is-info",
          logo: Logo,
          contact: "button is-white has-text-white is-outlined is-fullwidth",
          mobile: "navbar-menu has-background-info has-text-white",
          mobileToggle: "navbar-burger has-text-white",
        })
      }
    })
  }
  render() {
    return (
      <div>
        <nav className={this.state.navColor}>
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src={this.state.logo} alt="Logo" />
              </Link>
              <div
                role="button"
                className={
                  this.state.menuOpen
                    ? `${this.state.mobileToggle} is-active`
                    : `${this.state.mobileToggle}`
                }
                data-target="navMenu"
                aria-label="menu"
                aria-expanded="false"
                onClick={this.menuToggleClickHandler}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </div>
            </div>
            <div
              className={
                this.state.menuOpen
                  ? `${this.state.mobile} is-active`
                  : "navbar-menu"
              }
              id="navMenu"
            >
              <div className="navbar-end">
                <Link to="/blog" className="navbar-item">
                  Code & Design Blog
                </Link>
                {/* <Link to="/starters" className="navbar-item">Starter Templates</Link> */}
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <Link to="/contact" className={this.state.contact}>
                    Say Hello...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
