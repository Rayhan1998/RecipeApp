import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import RecipesSidebar from "../Components/RecipesSidebar";
import RecipeIngrediants from "../Components/RecipeIngrediants";

export default function HomePage() {
  const [userSearch, setUserSearch] = useState("");
  return (
    <Box maxW="80rem" h="1000px" bg="white" m="50px auto" borderRadius="9px">
      <Navbar setUserSearch={setUserSearch} userSearch={userSearch} />
      <div style={{ display: "flex" }}>
        <RecipesSidebar />
        <RecipeIngrediants />
      </div>
    </Box>
  );
}
