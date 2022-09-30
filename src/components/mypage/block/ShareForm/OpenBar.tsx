import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { FoldingBarPropsType } from "./FoldingBar";

function OpenBar({ handleFold }: FoldingBarPropsType) {
  return (
    <Wrap>
      <div className="text">소개를 요청해보세요</div>
      <Image
        src="/assets/open_icon.svg"
        alt="folde_icon"
        width={17}
        height={13}
        onClick={handleFold}
      />
    </Wrap>
  );
}

export default OpenBar;

const Wrap = styled.div`
  height: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  color: #9c9c9c;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  .text {
    margin-right: 5px;
  }
`;
