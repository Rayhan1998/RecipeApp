import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import styled from "styled-components";

export default function RecipeDetails({ RecipeId }) {
  const [recipeDetails, setRecipesDetails] = useState(undefined);

  if (recipeDetails != undefined) {
    var {
      cooking_time,
      id,
      image_url,
      ingrediants,
      publisher,
      serving,
      source_url,
      title
    } = recipeDetails;
  }

  useEffect(() => {
    axios
      .get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${RecipeId}?key=c3414168-d8c1-439f-b9bc-b60f414dae75`
      )
      .then(res => {
        setRecipesDetails(res.data.data.recipe);
      });
  }, [RecipeId]);

  console.log(recipeDetails);

  return (
    <Box w="70%" h="990px" bg="pink">
      {recipeDetails == undefined ? (
        <h1>Hello</h1>
      ) : (
        <>
          {" "}
          <figure className="recipe__fig">
            <img
              src={recipeDetails.image_url}
              alt={recipeDetails.title}
              className="recipe__img"
            />
            <h1 className="recipe__title">
              <span>{recipeDetails.title}</span>
            </h1>
          </figure>
          <RecipeInfo>
            <h2>{`${recipeDetails.cooking_time} minutes`}</h2>
            <div className="servings">
              <h1>{`${recipeDetails.servings}`}</h1>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-plus-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
              </svg>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-dash-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                />
              </svg>
            </div>
            <span className="logo">
              <h2>Bookmark</h2>
            </span>
          </RecipeInfo>
          <RecipeIngrediants>
            <h2 className="heading-2">Recipe Ingrediants</h2>
            <ul class="recipe__ingredient-list"></ul>
          </RecipeIngrediants>
        </>
      )}
    </Box>
  );
}

const RecipeInfo = styled.div`
  display: flex;
  justify-content: space-between;

  .servings {
    display: flex;
    align-items: center;
  }
  .logo {
    margin-left: ;
  }
`;

const RecipeIngrediants = styled.div`
  padding: 5rem 8rem;
  font-size: 1.6rem;
  line-height: 1.4;
  background-color: #f2efee;
  display: flex;
  flex-direction: column;
  align-items: center;

  .heading-2 {
    font-size: 2rem;
    font-weight: 700;
    color: #f38e82;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  .recipe__ingredient-list {
    display: flex;
  }
`;

const RecipeDirections = styled.div``;
