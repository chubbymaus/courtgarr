import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import HeroImage from "../../images/screens2.png"
const Button = styled.a.attrs({
  className: "button",
})`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
    ${"" /* margin-right: 1rem; */}
    margin-left: 0;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.75rem;
  }
`
const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Prototyping = () => (
  <section className="hero has-background-primary  is-bold">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <HeroText className="column has-text-right is-half">
            <Fade left>
              <h1 className="title has-text-white">
                Project Management & Strategy
              </h1>
              <h2 className="subtitle has-text-white">
                If you ever want people to use your app you need a good
                marketing strategy. I have a Bachelor's degree in Marketing and
                love helping companies make meaningful strategies.
              </h2>
              <ButtonGroup>
                <Link to="/contact">
                  <Button className="is-success shadowed is-medium">
                    Let's Get Some Traffic!
                  </Button>
                </Link>
              </ButtonGroup>
            </Fade>
          </HeroText>

          <Image className="column has-text-left is-half" id="proto-image">
            <Fade right>
              <img src={HeroImage} alt="Hero" />
            </Fade>
          </Image>
        </div>
      </div>
    </div>
  </section>
)

export default Prototyping
