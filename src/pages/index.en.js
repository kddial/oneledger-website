import React from 'react';
import graphql from 'graphql';

const IndexPage = ({ data }) => {
  const header =
    data && data.datoCmsHomePage && data.datoCmsHomePage.header
      ? data.datoCmsHomePage.header
      : '';

  return (
    <div>
      <h1>Header: {header}</h1>
      <p>Welcome to your new Gatsby site.</p>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexEnQuery {
    datoCmsHomePage(locale: { eq: "en" }) {
      header
    }
  }
`;
