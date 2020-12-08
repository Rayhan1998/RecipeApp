import React, { useEffect } from "react";

import { Box } from "@chakra-ui/react";

import RecipesTab from "./RecipesTab";

export default function RecipesSidebar({
  searchResults,
  getRecipeId,

  clickedRecipeId,
  errorText
}) {
  return (
    <Box w="30%" h="100%">
      <h1
        style={{
          marginLeft: "1.5rem",
          fontSize: "1.3rem",
          lineHeight: "1.5",
          fontWeight: "600",
          marginTop: "10px"
        }}
      >
        {errorText}
      </h1>
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
