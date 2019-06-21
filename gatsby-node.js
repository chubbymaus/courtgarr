const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;
  return new Promise((res, rej) => {
    graphql(`
      {
        allContentfulBlog {
          edges {
            node {
              slug
            }
          }
        }
      }`).then(results => {
            results.data.allContentfulBlog.edges.forEach(({node}) => {
              createPage({
                path: `blog/${node.slug}`,
                component: path.resolve('./src/posts/PostPage.js'),
                context: {
                  slug: node.slug,
                }
              });
            })
            res();
          })
        });
      }