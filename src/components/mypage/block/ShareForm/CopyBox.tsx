import Head from "next/head";
import React, { useRef } from "react";
import styled from "styled-components";
import { getMessage } from "../../../../services/kakao";

interface CopyBoxPropsType {
  name: string;
  relation: string;
  shareImg: string;
  linkFormat: string;
  linkSave: string;
  linkCopy: (e: any) => void;
}

function CopyBox({
  name,
  relation,
  linkFormat,
  shareImg,
  linkCopy,
  linkSave,
}: CopyBoxPropsType) {
  const Ref = useRef<any>();
  const clickButton = (e: any) => {
    Ref.current.click();
  };
  return (
    <Wrap>
      <Head>
        <meta property="og:title" content={`${name}님의 코맨션 적으러 가기`} />
        <meta property="og:description" content={getMessage(relation)} />
        <meta property="og:url" content={linkFormat} />
        <meta property="og:image" content={shareImg} />
      </Head>
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
    background-color: var(--primary-color);
    color: white;
    font-size: 15px;
    font-weight: 500;
  }
  .link-not-save {
    background: #d3d3d3;
    font-size: 15px;
    font-weight: 500;
  }
  button {
    width: 65px;
    height: 40px;
    margin-left: 10px;
    border-radius: 5px;
    border: none;
    color: black;
  }
`;
