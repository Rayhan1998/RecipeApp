import React, { useState, useEffect } from "react";
import { Heading, Box } from "@chakra-ui/react";
import axios from "axios";

import logo from "../img/favicon.png";
import styled from "styled-components";
import { Image } from "@chakra-ui/react";
export default function Navbar({
  setUserSearch,
  userSearch,
  setSearchResults,
  setErrorText,
  searchResults
}) {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const formSubmit = e => {
    e.preventDefault();
    setIsFormSubmit(true);
  };

  const inputHandler = e => {
    setUserSearch(e.target.value);
  };

  //   Useeffect calles api and stores the data into an array
  useEffect(() => {
    axios
      .get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${userSearch}&key=c3414168-d8c1-439f-b9bc-b60f414dae75`
      )
      .then(function(res) {
        setSearchResults(res.data.data.recipes);
        console.log(res.data.results);
        if (res.data.results == 0) {
          setErrorText("Recipe Not Found Please Search Again");
        } else {
          setErrorText("");
        }

        setIsFormSubmit(false);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [isFormSubmit]);

  return (
    <Header>
      <Box display="flex">
        <Image src={logo} objectFit="cover" alt="logo" h="40px"></Image>
        <Heading marginLeft="10px">Foody</Heading>
      </Box>

      <Form onSubmit={formSubmit}>
        <SearchField
          className="form"
          type="text"
          value={userSearch}
          onChange={inputHandler}
          placeholder="search for recipes"
        ></SearchField>
        <button className="search__btn btn">
          <span className="search__Icon"></span>
          <span>Search</span>
        </button>
      </Form>
    </Header>
  );
}

const Header = styled.header`
  height: 100px;
  padding: 20px;
  background-color: #f9f5f3;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1150px) {
    flex-direction: column;
    height: 150px;
  }

  @media (max-width: 800px) {
  }

  .search {
  }
`;

const Form = styled.form`
  background-color: #fff;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  transition: all 0.3s;
`;

const SearchField = styled.input`
  border: none;
  background: none;
  font-family: inherit;
  color: inherit;
  font-size: 1.7rem;
  width: 30rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 800px) {
    width: 20rem;
  }

  @media (max-width: 600px) {
    width: 10rem;
  }
`;
