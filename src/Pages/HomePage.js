import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

export default function HomePage() {
  const [userSearch, setUserSearch] = useState("");
  return (
    <Box
      maxW="80rem"
      h="1000px"
      bg="lightBlue"
      m="50px auto"
      borderRadius="9px"
    >
      <Navbar setUserSearch={setUserSearch} userSearch={userSearch} />
    </Box>
  );
}
