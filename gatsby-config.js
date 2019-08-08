const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
module.exports = {
  siteMetadata: {
    title: "Court Garr"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Court Garr",
        short_name: "Court Garr",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/cgicon3.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-offline",
    "gatsby-plugin-sass"
  ]
};
