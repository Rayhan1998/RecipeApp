import React, { useState, useEffect } from "react";
import axios from "axios";

import logo from "../img/logo.png";
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
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${userSearch}&key=a0eb0135-3c80-4a50-b545-d3f6434f4b4a`
      )
      .then(function(res) {
        setSearchResults(res.data.data.recipes);
        if (searchResults.length == 0) {
          setErrorText("please search again");
        }

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

      <div
        style={{ display: "flex", alignItems: "center" }}
        className="bookmark-logo"
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-bookmark-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "orange" }}
        >
          <path
            fill-rule="evenodd"
            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z"
          />
        </svg>
        Booksmarks
      </div>
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

  .bookmark-logo {
      height: 100%;
    font-family: inherit;
    color: inherit;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 1.5rem;
    transition: all .3s;
    display: flex;
    align-items: center;
}

.bookmark-logo:hover {
    
    background-color: #d3c7c3;
    transform: translateY(-2px);
  
}
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
`;
