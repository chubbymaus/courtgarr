module.exports = {
  siteMetadata: {
    title: "Court Garr",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "7lh30egvcf1r",
        accessToken: "UBdynbOyjyqV1HritlML07Ss4PW7rSjlWXLlXCNQENE",
      },
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
        icon: "src/images/cgicon3.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
  ],
}
