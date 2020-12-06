import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import RecipesSidebar from "../Components/RecipesSidebar";
import RecipeDeatails from "../Components/RecipeDetails";
import RecipeDetails from "../Components/RecipeDetails";

export default function HomePage() {
  const [userSearch, setUserSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  return (
    <Box maxW="80rem" h="1000%" bg="white" m="50px auto" borderRadius="9px">
      <Navbar
        setUserSearch={setUserSearch}
        userSearch={userSearch}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
      />
      <div style={{ display: "flex" }}>
        <RecipesSidebar searchResults={searchResults} />
        <RecipeDetails />
      </div>
    </Box>
  );
}
