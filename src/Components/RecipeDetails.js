import React, { useEffect, useState } from "react";

import { Box, Image } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import axios from "axios";
import styled from "styled-components";

export default function RecipeDetails({ RecipeId }) {
  const [recipeDetails, setRecipesDetails] = useState(undefined);
  const [isrecipeLoading, setIsRecipeLoading] = useState(true);

  // api request for function details using recipe id
  useEffect(() => {
    if (RecipeId != undefined) {
      axios
        .get(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${RecipeId}?key=c3414168-d8c1-439f-b9bc-b60f414dae75`
        )
        .then(res => {
          setRecipesDetails(res.data.data.recipe);
          setIsRecipeLoading(false);
        });
    }
  }, [RecipeId]);

  return (
    <RecipeDetailsWrapper>
      {recipeDetails == undefined ? (
        <Box
          maxWidth="100%"
          margin="0 auto"
          padding="5rem 4rem"
          display="flex"
          height="1200px"
        >
          <p>Start by searching for a recipe or an ingredient. Have fun!</p>
        </Box>
      ) : (
        <>
          {" "}
          {isrecipeLoading ? (
            <Spinner
              position="absolute"
              top="50%"
              left="50%"
              transform="(translate(-50%, -50%))"
              size="xl"
              h="100px"
              w="100px"
              color="grey"
            />
          ) : null}
          <figure
            className="recipe__fig"
            style={{ height: "350px", position: "relative" }}
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              height="100%"
              width="100%"
              backgroundImage="linear-gradient(to right bottom,#fbdb89,#f48982)"
              opacity="0.6"
            ></Box>
            <Image
              height="350px"
              width="100%"
              objectFit="cover"
              src={recipeDetails.image_url}
              alt={recipeDetails.title}
              className="recipe__img"
            />
            <h1
              className="recipe__title"
              style={{
                padding: "10px",
                color: "#f38e82",
                textAlign: "center",
                marginBottom: "10px"
              }}
            >
              <span>{recipeDetails.title}</span>
            </h1>
          </figure>
          <RecipeInfo>
            <Box display="flex" alignItems="center">
              <svg
                style={{ fill: "#f38e82", marginRight: "7px" }}
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-clock"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" />
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
              </svg>
              <h2
                style={{ fontSize: "25px" }}
              >{`${recipeDetails.cooking_time} minutes`}</h2>
            </Box>
            <Box display="flex" alignItems="center">
              <svg
                style={{ fill: "#f38e82", marginRight: "7px" }}
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-people"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                />
              </svg>
              <h1 style={{ fontSize: "25px" }}>
                {`${recipeDetails.servings} Servings`}{" "}
              </h1>
            </Box>
          </RecipeInfo>
          <RecipeIngrediants>
            <h2 className="heading-2">Recipe Ingrediants</h2>
            <ul className="recipe__ingredient-list">
              {recipeDetails.ingredients.map((rec, i) => {
                return (
                  <li className="ingrediants" key={i}>
                    <svg
                      style={{ marginRight: "5px" }}
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-check2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                    <div className="recipe_quanity">{rec.quantity}</div>
                    <div className="recipe_description">{rec.description}</div>
                  </li>
                );
              })}
            </ul>
          </RecipeIngrediants>
          <RecipeDirections>
            <h2 className="heading--2">HOW TO COOK IT</h2>
            <p className="recipe__directions-text">
              {`This recipe was carefully designed and tested by ${recipeDetails.publisher}. Please check out directions at their website.`}
            </p>
            <a
              className="btn--small recipe__btn"
              href={`${recipeDetails.source_url}`}
              target="_blank"
            >
              <button className="search__btn btn">
                <span className="search__Icon"></span>
                <span>Directions</span>
              </button>
            </a>
          </RecipeDirections>
        </>
      )}
    </RecipeDetailsWrapper>
  );
}

const RecipeDetailsWrapper = styled.div`
  width: 70%;
  background: #f9f5f3;
  height: 100%;
  position: "relative";

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

const RecipeInfo = styled.div`
  display: flex;
  justify-content: space-around;
  height: 200px;
  align-items: center;

  .logo {
    margin-left: 10px;
  }

  .btn--round {
    background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    height: 4.5rem;
    width: 4.5rem;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn--round:hover {
    transform: translateY(-2px);
  }

  .btn--round svg {
    height: 2.5rem;
    width: 2.5rem;
    fill: #fff;
  }
`;

const RecipeIngrediants = styled.div`
  padding: 10px;
  padding-bottom: 100px;

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
    font-size: 16px;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .ingrediants {
    display: flex;
    width: 40%;
    margin: 5px;
  }

  .recipe_quanity {
    margin-right: 10px;
  }
`;

const RecipeDirections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 50px;

  .heading--2 {
    font-size: 2rem;
    font-weight: 700;
    color: #f38e82;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .recipe__directions-text {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 2.5rem;
    color: #918581;
  }

  .btn--small, .btn--small: link, .btn--small: visited {
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1.25rem 2.25rem;
    text-decoration: none;
  }
`;
