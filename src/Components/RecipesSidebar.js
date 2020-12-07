import React, { useEffect } from "react";

import { Box } from "@chakra-ui/react";

import RecipesTab from "./RecipesTab";

export default function RecipesSidebar({
  searchResults,
  getRecipeId,
  errorText,
  setErrorText,
  clickedRecipeId
}) {
  return (
    <Box w="30%" h="100%">
      {searchResults.map(rec => {
        // let { title } = rec.title;
        // let newTitle =
        //   title
        //     .split("")
        //     .splice(0, 25)
        //     .join("") + "...";

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
