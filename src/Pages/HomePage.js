import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import RecipesSidebar from "../Components/RecipesSidebar";
import styled from "styled-components";

import RecipeDetails from "../Components/RecipeDetails";

export default function HomePage() {
  const [userSearch, setUserSearch] = useState(""); // stores users query
  const [searchResults, setSearchResults] = useState([]);
  const [modifiedResults, setModifiedResults] = useState(searchResults);
  const [clickedRecipeId, setClickedRecipeId] = useState(undefined);
  const [errorText, setErrorText] = useState(""); // stores wheither user search is valid or not

  const { recipeId } = useParams();
  const getRecipeId = id => {
    setClickedRecipeId(id);
  };

  useEffect(() => {
    //   Saves only the first 10 items in the array
    setModifiedResults(searchResults.splice(0, 10));
  }, [searchResults]);

  return (
    <Box maxW="80rem" minH="1200px" bg="white" m="50px auto" borderRadius="9px">
      <Navbar
        setUserSearch={setUserSearch}
        userSearch={userSearch}
        setSearchResults={setSearchResults}
        setErrorText={setErrorText}
      />
      <MainBodyWrapper>
        <RecipesSidebar
          searchResults={modifiedResults}
          getRecipeId={getRecipeId}
          clickedRecipeId={clickedRecipeId}
          errorText={errorText}
        />
        <RecipeDetails RecipeId={recipeId} />
      </MainBodyWrapper>
    </Box>
  );
}

const MainBodyWrapper = styled.div`
  display: flex;
  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
