import React from "react";

import logo from "../img/logo.png";
import styled from "styled-components";
import { Image, Button } from "@chakra-ui/react";
export default function Navbar(props) {
  return (
    <Header>
      <Image src={logo} objectFit="cover" alt="logo" h="40px"></Image>
      <Form>
        <SearchField type="text"></SearchField>
        <button className="search__btn btn">Search</button>
      </Form>
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
`;
