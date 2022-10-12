import React from 'react';
import TagsList from './TagsList';
import RecipesList from './RecipesList';
import { useStaticQuery, graphql } from 'gatsby';
// import { getAllRecipes } from '../queries/recipes';

export const getAllRecipes = graphql`
  query {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        title
        id
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

function AllRecipes() {
  const {
    allContentfulRecipe: { nodes },
  } = useStaticQuery(getAllRecipes);

  return (
    <section className="recipes-container">
      <TagsList recipes={nodes} />
      <RecipesList recipes={nodes} />
    </section>
  );
}

export default AllRecipes;
