import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

function Commention() {
  const [text, setText] = useState("");

  return (
    <Wrap>
      <Image
        alt="commention-logo"
        src="/assets/commention-logo.svg"
        width="160"
        height="40"
      />
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="안녕하세요 코멘션입니다.\n**에게 코멘트를 작성해주세요"
      />
      <div className="button-area">
        <button>Upload</button>
      </div>
    </Wrap>
  );
}

export default Commention;

const Wrap = styled.div`
  max-width: 500px;
  margin: 20px;
  padding: 20px;
  background-color: white;
  height: 250px;
  border-radius: 27px;
  filter: drop-shadow(0px 0px 14.6379px rgba(0, 0, 0, 0.13));
  textarea {
    margin-top: 15px;
    width: 100%;
    height: 150px;
    border: none;
    color: #adadad;
    resize: none;
  }
  .button-area {
    display: flex;
    justify-content: right;
  }
  button {
    width: 70px;
    height: 30px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 7px;
  }
`;
