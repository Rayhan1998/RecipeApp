import React from "react";

import styled from "styled-components";

import RecipesTab from "./RecipesTab";

export default function RecipesSidebar({
  searchResults,
  getRecipeId,

  clickedRecipeId,
  errorText
}) {
  return (
    <RecipeSidebarWrapper>
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
    </RecipeSidebarWrapper>
  );
}

const RecipeSidebarWrapper = styled.div`
  width: 30%;

  height: 100%;

  @media (max-width: 1150px) {
    width: 100%;
    overflow-x: scroll;
    display: flex;
  }
`;
