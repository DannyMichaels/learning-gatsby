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
  const { allContentfulRecipe } = useStaticQuery(getAllRecipes);

  return (
    <div>
      <h4>All Recipes</h4>
      <TagsList recipes={allContentfulRecipe.nodes} />
      <RecipesList recipes={allContentfulRecipe.nodes} />
    </div>
  );
}

export default AllRecipes;
