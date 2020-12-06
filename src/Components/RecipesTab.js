import React from "react";
import { Box } from "@chakra-ui/react";

export default function RecipesTabs(props) {
  return (
    <Box h="80px" w="100%" bg="red" mt="10px">
      {props.title}
    </Box>
  );
}
