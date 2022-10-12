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

  // siteMetadata can be accessed in graphql
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: 'Daniel',
    person: {
      name: 'Daniel',
      age: 22,
    },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      {
        name: 'Daniel',
        age: 22,
      },
      {
        name: 'Sean',
        age: 21,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images

    // can get these images using graphql with file/allFile fields
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `styles`,
    //     path: `${__dirname}/src/assets/css`,
    //   },
    // },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `o2thccrdp6pd`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // content delivery one
      },
    },

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat',
              variants: ['400'],
            },
            {
              family: 'Inconsolata',
              variants: ['400', '500', '600', '700'],
            },
          ],
        },
      },
    },
  ],
};
