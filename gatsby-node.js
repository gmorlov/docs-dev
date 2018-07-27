const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const ProcedureTemplate = path.resolve('src/templates/ProcedureTemplate.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: ProcedureTemplate,
        context: {},
      });
    });
  });
};
