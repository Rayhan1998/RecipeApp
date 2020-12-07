import React from "react";
import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function RecipesTabs(props) {
  let { title } = props;
  let newTitle =
    title
      .split("")
      .splice(0, 25)
      .join("") + "...";

  return (
    <RecipesTabWrapper
      onClick={() => {
        props.getRecipeId(props.id);
      }}
    >
      <Link to={`/${props.id}`} style={{ textDecoration: "none" }}>
        <Ancor>
          <Figure style={{ marginLeft: "5px" }}>
            <Image src={props.img} alt={props.title}></Image>
          </Figure>
          <PreviewDataWrapper>
            <h4 className="previewTitle">
              {title.length < 25 ? title : newTitle}
            </h4>
            <p className="previewPublisher">{props.publisher}</p>
          </PreviewDataWrapper>
        </Ancor>
      </Link>
    </RecipesTabWrapper>
  );
}

const RecipesTabWrapper = styled.div`
  height: 90px;
  width: 100%;
  margin-top: 13px;
  margin-bottom: 13px;

  display: flex;
  align-items: center;

  &:hover {
    background-color: #f9f5f3;
    transform: translateY(-2px);
  }
`;
const Ancor = styled.div`
  display: flex;
  align-items: center;

  transition: all 0.3s;
  border-right: 1px solid #fff;
  text-decoration: none;
`;

const Figure = styled.figure`
  flex: 0 0 5.8rem;
  border-radius: 50%;
  overflow: hidden;
  height: 4.8rem;
  margin-right: 2rem;
  position: relative;
  backface-visibility: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
`;

const PreviewDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: 600;

  .previewTitle {
    font-size: 12px;
    color: #f38e82;
    text-overflow: ellipsis;
    max-width: 25rem;
    white-space: nowrap;
    overflow: hidden;
  }

  .previewPublisher {
    font-size: 12px;
    color: #918581;
  }
`;
