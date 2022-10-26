require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `Awesome WebDev Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | WebDev Portfolio`,
    url: `https://temp-strapi-portfolio.netlify.app`,
    twitterUsername: `@john_smilga`,
    image: `/mainImg.png`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337/api',
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [`job`, `project`],
      },
    },
  ],
};
