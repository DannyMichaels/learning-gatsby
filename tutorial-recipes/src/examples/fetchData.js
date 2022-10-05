import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const FetchDataExample = () => {
  const data = useStaticQuery(graphql`
    query GetMetadata {
      site {
        siteMetadata {
          title
          description
          author
          person {
            name
            age
          }
          simpleData
          complexData {
            name
            age
          }
        }
      }
    }
  `);

  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default FetchDataExample;
