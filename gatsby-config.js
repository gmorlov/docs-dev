module.exports = {
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: '${__dirname}/content/procedures',
        name: 'procedures',
      },
    },
          {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: '${__dirname}/content/appendices',
        name: 'appendicies',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: '${__dirname}/content/intro',
        name: 'intro',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: '${__dirname}/static/img/',
        name: 'images',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify',
  ],
}
