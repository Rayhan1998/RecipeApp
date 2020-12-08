import React, { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
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

  return (
    <Box w="70%" h="100%" bg="#f9f5f3">
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
            <h2
              style={{ fontSize: "25px" }}
            >{`${recipeDetails.cooking_time} minutes`}</h2>

            <h1 style={{ fontSize: "25px" }}>
              {`${recipeDetails.servings} Servings`}{" "}
            </h1>

            <button className="btn--round btn--bookmark">
              <svg
                style={{ color: "orange" }}
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bookmark-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z"
                />
              </svg>
            </button>
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
                        fill-rule="evenodd"
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
    </Box>
  );
}

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
