import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

function Commention() {
  const router = useRouter();
  const { user } = router.query;
  const [text, setText] = useState("");
  const [render, setRender] = useState("");

  useEffect(() => {
    setRender("ok");
  });

  return (
    <>
      {render && (
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
            autoFocus
            placeholder={`안녕하세요 코멘션입니다.\n${user}에게 코멘트를 작성해주세요`}
          />
          <div className="button-area">
            <button>Upload</button>
          </div>
        </Wrap>
      )}
    </>
  );
}

export default Commention;

const Wrap = styled.div`
  width: calc(100% - 60px);
  padding: 30px;
  background-color: white;
  height: 250px;
  border-radius: 27px;
  filter: drop-shadow(0px 0px 14.6379px rgba(0, 0, 0, 0.13));
  textarea {
    margin-top: 15px;
    width: 95%;
    height: 150px;

    font-weight: 400;
    line-height: 26px;
    border: none;
    resize: none;
    padding: 10px;
  }
  .button-area {
    display: flex;
    justify-content: right;
  }
  button {
    width: 70px;
    height: 30px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 7px;
  }
`;
