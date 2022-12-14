import Head from "next/head";
import React, { useRef } from "react";
import styled from "styled-components";

interface CopyBoxPropsType {
  linkFormat: string;
  linkSave: string;
  linkCopy: (e: any) => void;
}

function CopyBox({ linkFormat, linkCopy, linkSave }: CopyBoxPropsType) {
  const Ref = useRef<any>();
  const clickButton = (e: any) => {
    Ref.current.click();
  };

  return (
    <Wrap>
      <div ref={Ref} onClick={linkCopy} className="email-link">
        {linkFormat}
      </div>
      <button
        onClick={clickButton}
        className={linkSave ? "link-save" : "link-not-save"}
      >
        복사
      </button>
    </Wrap>
  );
}

export default CopyBox;

const Wrap = styled.div`
  margin: auto;
  width: 75%;
  height: 40px;
  border: 2px solid #d3d3d3;
  border-radius: 7px;
  padding: 10px;
  display: flex;
  white-space: nowrap;
  .email-link {
    margin-left: 8px;
    line-height: 40px;
    width: calc(100% - 90px);
    overflow: hidden;
    color: #8c8c8c;
  }
  .link-save {
    font-size: 15px;
    font-weight: 500;
  }
  .link-not-save {
    font-size: 15px;
    font-weight: 500;
  }
  button {
    width: 65px;
    height: 40px;
    margin-left: 10px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: var(--primary-color);
  }
`;
