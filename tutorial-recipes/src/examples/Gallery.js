import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            # transformOptions: { grayscale: true }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;

export default function Gallery() {
  const data = useStaticQuery(query);
  const { nodes = [] } = data.allFile;

  return (
    <Wrapper>
      {nodes.map((image, idx) => (
        <article key={idx} className="item">
          {/* images are greyed because grayscale is true in transformOptions */}
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt={image.name}
            className="gallery-img"
          />
          <p>{image.name}</p>
        </article>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  .item {
    margin-right: 1rem;
  }

  .gallery-img {
    border-radius: 1rem;
  }
`;
