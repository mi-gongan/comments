import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

function AppBar() {
  const [text, setText] = useState("");

  const inputText = (e: any) => {
    setText(e.target.value);
  };
  return (
    <Wrap>
      <Logo>
        <Image
          alt="logo"
          src="/assets/logo.svg"
          className="logo"
          width="192px"
          height="28px"
        />
      </Logo>
      <Search>
        <input onChange={inputText} value={text} placeholder="search" />
        <button>
          <Image alt="search" src="/assets/search.svg" width="25" height="25" />
        </button>
      </Search>
    </Wrap>
  );
}

export default AppBar;

const Wrap = styled.div`
  background-color: white;
  height: 135px;
  display: flex;
`;

const Logo = styled.div`
  margin-top: 62px;
  margin-right: 30px;
  margin-left: 30px;
`;

const Search = styled.div`
  display: flex;
  margin-top: 52px;
  height: 48px;
  background-color: #f3f3f3;
  width: 500px;
  border-radius: 8px;
  input {
    padding-left: 38px;
    border: none;
    background-color: #f3f3f3;
    flex: 1;
    font-size: 18px;
    font-weight: 400;
    color: #c5c5c5;
    border-radius: 8px;
  }
  button {
    background-color: blue;
    width: 79px;
    height: 48px;
    border-radius: 8px;
    border: none;
  }
`;
