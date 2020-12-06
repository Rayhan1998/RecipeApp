import React, { useState, useEffect } from "react";
import axios from "axios";

import logo from "../img/logo.png";
import styled from "styled-components";
import { Image } from "@chakra-ui/react";
export default function Navbar({
  setUserSearch,
  userSearch,
  setSearchResults,
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
  // Useeffect calles api and stores the data into an array
  useEffect(() => {
    axios
      .get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${userSearch}&key=a0eb0135-3c80-4a50-b545-d3f6434f4b4a`
      )
      .then(function(res) {
        console.log(res);
        setSearchResults(res.data.data.recipes);

        setIsFormSubmit(false);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [isFormSubmit]);

  return (
    <Header>
      <Image src={logo} objectFit="cover" alt="logo" h="40px"></Image>
      <Form onSubmit={formSubmit}>
        <SearchField
          type="text"
          value={userSearch}
          onChange={inputHandler}
        ></SearchField>
        <button className="search__btn btn">
          <span className="search__Icon"></span>
          <span>Search</span>
        </button>
      </Form>

      <h3>
        <i className="far fa-bookmark"></i>Booksmarks
      </h3>
    </Header>
  );
}

const Header = styled.header`
  height: 70px;
  padding: 20px;
  background-color: #f9f5f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;
