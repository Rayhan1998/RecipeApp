import React from "react";
import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import RecipesTab from "../Components/RecipesTab";

export default function RecipesSidebar({ searchResults, getRecipeId }) {
  return (
    <Box w="30%" h="990px">
      {searchResults.map(rec => {
        return (
          <RecipesTab
            key={rec.id}
            title={rec.title}
            img={rec.image_url}
            publisher={rec.publisher}
            getRecipeId={getRecipeId}
            id={rec.id}
          />
        );
      })}
    </Box>
  );
}
