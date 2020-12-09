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

      <FooterWrapper>
        <h1 style={{ color: "orange", marginRight: "15px" }}>Project Repo</h1>
        <a
          className="github-link"
          href="https://github.com/Rayhan1998/RecipeApp"
          target="_blank"
        >
          <i
            className="fab fa-github"
            style={{ fontSize: "60px", color: "grey" }}
          ></i>
        </a>
      </FooterWrapper>
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

const FooterWrapper = styled.div`
  height: 150px;
  display: flex;

  justify-content: center;
  align-items: center;

  .github-link {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 1150px) {
    display: none;
  }
`;
