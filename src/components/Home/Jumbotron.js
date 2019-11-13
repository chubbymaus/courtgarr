import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import JumboImage from "../../images/coding2.png";
const Button = styled.a.attrs({
  className: "button"
})`
  width: 180px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
  border-radius: 0;
  border-width: 2px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Jumbotron = () => (
  <section
    className="hero has-background-info is-fullheight is-bold"
    id="jumbo-bg"
  >
    <div className="hero-body">
      <div className="container has-text-left">
        <div className="columns is-centered">
          <HeroText className="column">
            <h1 className="title has-text-primary has-text-weight-bold ">
              <span className="half-highlight is-size-1">
                Hi! My Name Is Court
              </span>
            </h1>
            <h2 className="has-text-weight-light subtitle has-text-primary is-size-2">
              I'm a Fullstack Developer and Designer...
            </h2>
            <ButtonGroup>
              <Button
                className="is-primary is-outlined is-medium"
                href="#skills"
              >
                Learn More
              </Button>
              <Link to="/blog">
                <Button className="is-outlined is-primary is-medium">
                  Visit My Blog
                </Button>
              </Link>
            </ButtonGroup>
          </HeroText>
          <div className="column has-text-centered" id="header-image">
            <img src={JumboImage} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Jumbotron;
