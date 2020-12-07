import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import RecipesSidebar from "../Components/RecipesSidebar";

import RecipeDetails from "../Components/RecipeDetails";

export default function HomePage() {
  const [userSearch, setUserSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [clickedRecipeId, setClickedRecipeId] = useState(undefined);
  const { recipeId } = useParams();
  const getRecipeId = id => {
    setClickedRecipeId(id);
  };

  return (
    <Box maxW="80rem" h="1000%" bg="white" m="50px auto" borderRadius="9px">
      <Navbar
        setUserSearch={setUserSearch}
        userSearch={userSearch}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
      />
      <div style={{ display: "flex" }}>
        <RecipesSidebar
          searchResults={searchResults}
          getRecipeId={getRecipeId}
        />
        <RecipeDetails RecipeId={recipeId} />
      </div>
    </Box>
  );
}
