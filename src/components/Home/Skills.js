import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => (
  <section
    className="has-text-centered has-background-primary"
    id="skills-section"
  >
    <div className="container">
      <div className="box shadowed has-background-white">
        <div className="content">
          <div className="columns is-centered">
            <div className="column">
              <h1 style={{ fontSize: "2.75rem" }}>
                <FontAwesomeIcon icon={["fab", "sketch"]} />
                <span>
                  &nbsp;&nbsp;
                  <FontAwesomeIcon icon={["far", "pencil-ruler"]} />
                </span>
                <span>
                  &nbsp;&nbsp;
                  <FontAwesomeIcon icon={["fab", "fort-awesome"]} />
                </span>
              </h1>
              <h1 className="title is-size-4 is-spaced">Designer</h1>
              <p>
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
              <p className="list-title has-text-primary has-text-weight-normal">
                Things I enjoy designing:
              </p>
              <p>UX, UI, Web, Mobile, Apps, Logos</p>
              <ul>
                <p className="subtitle has-text-primary has-text-weight-normal">
                  Design Tools
                </p>
                <li>Mockflow Wireframes</li>
                <li>Sketch</li>
                <li>Zeplin</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
                <li>Pen &amp; Paper</li>
                <li>Lucidchart</li>
              </ul>
            </div>
            <div className="column">
              <h1 style={{ fontSize: "3rem" }}>
                <FontAwesomeIcon icon={["fab", "react"]} />
                <span>
                  &nbsp;
                  <FontAwesomeIcon icon={["fab", "node-js"]} />
                </span>
                <span>
                  &nbsp;
                  <FontAwesomeIcon icon={["fab", "docker"]} />
                </span>
              </h1>
              <h1 className="title is-size-4 is-spaced">Developer</h1>
              <p>
                I tend to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
              <p className="list-title has-text-primary has-text-weight-normal">
                Languages I speak:
              </p>
              <p>Javascript, React, Nodejs, Ruby on Rails</p>
              <ul>
                <p className="subtitle has-text-primary has-text-weight-normal">
                  Dev Tools
                </p>
                <li>VS code</li>
                <li>Github</li>
                <li>Gatsbyjs</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Shopify</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
