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
          layout="fixed"
        />
      </Logo>
      <Search>
        <div className="when-wide">
          <input onChange={inputText} value={text} placeholder="search" />
          <button>
            <Image
              alt="search"
              src="/assets/search-white.svg"
              width="25"
              height="25"
            />
          </button>
        </div>
        <div className="when-narrow">
          <Image
            alt="search"
            src="/assets/search-blue.svg"
            width="25"
            height="25"
          />
        </div>
      </Search>
      <Mypage>Login</Mypage>
    </Wrap>
  );
}

export default AppBar;

const Wrap = styled.div`
  background-color: white;
  height: 115px;
  display: flex;
`;

const Search = styled.div`
  flex: 1;
  .when-wide {
    width: 100%;
    display: flex;
    margin-top: 32px;
    height: 48px;
    background-color: #f3f3f3;
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
      background-color: var(--primay-color);
      width: 79px;
      height: 48px;
      border-radius: 8px;
      border: none;
    }
  }
  .when-narrow {
    display: none;
  }
  @media screen and (max-width: 650px) {
    .when-wide {
      display: none;
    }
    .when-narrow {
      display: block;
      margin-top: 45px;
      text-align: right;
      margin-right: 10px;
    }
  }
`;

const Logo = styled.div`
  margin-top: 42px;
  margin-right: 30px;
  margin-left: 30px;
`;

const Mypage = styled.div`
  width: 70px;
  color: var(--primay-color);
  line-height: 115px;
  text-align: center;
`;
