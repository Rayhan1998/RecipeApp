import React from "react";
import { Box } from "@chakra-ui/react";
import RecipesTab from "../Components/RecipesTab";

export default function RecipesSidebar({ searchResults }) {
  return (
    <Box w="30%" h="990px" bg="grey">
      {searchResults.map(rec => {
        return (
          <RecipesTab
            key={rec.id}
            title={rec.title}
            img={rec.image_url}
            publisher={rec.publisher}
          />
        );
      })}
    </Box>
  );
}
