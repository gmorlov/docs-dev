import React from 'react';

export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="procedure-container">
      <div className="procedure">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.contacts}</h2>
        <div
          className="procedure-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
