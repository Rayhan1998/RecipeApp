import React from "react";
import { Box } from "@chakra-ui/react";
import styled from "styled-components";

export default function RecipesTabs(props) {
  return (
    <Box h="80px" w="100%" bg="red" mt="10px" mb="10px">
      <Link>
        <Figure>
          <Image src={props.img} alt=""></Image>
        </Figure>
        <PreviewDataWrapper>
          <h4 className="previewTitle">{props.title}</h4>
          <p className="previewPublisher">{props.publisher}</p>
        </PreviewDataWrapper>
      </Link>
    </Box>
  );
}

const Link = styled.a`
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
