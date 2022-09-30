import Image from "next/image";
import React from "react";
import styled from "styled-components";

export interface FoldingBarPropsType {
  handleFold: () => void;
}

function FoldingBar({ handleFold }: FoldingBarPropsType) {
  return (
    <Wrap onClick={handleFold}>
      <div className="text">위로 접어두기</div>
      <Image
        src="/assets/fold_icon.svg"
        alt="folde_icon"
        width={17}
        height={13}
      />
    </Wrap>
  );
}

export default FoldingBar;

const Wrap = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130.5%;
  color: #9c9c9c;
  margin: 20px;
  padding: 5px;
  display: flex;
  justify-content: center;
  .text {
    margin-right: 5px;
  }
`;
