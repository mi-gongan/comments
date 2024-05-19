import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { FoldingBarPropsType } from "./FoldingBar";
import { theme } from "../../../../styles/theme";

function OpenBar({ handleFold }: FoldingBarPropsType) {
  return (
    <Wrap onClick={handleFold}>
      <div className="text">소개를 요청해보세요</div>
      <Image
        src="/assets/open_icon.svg"
        alt="folde_icon"
        width={17}
        height={13}
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
  color: ${theme.text.secondary};
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  .text {
    margin-right: 5px;
  }
`;
