import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { getImg } from "../../../../services/translate";

interface ShareImgPropsType {
  relation: string;
}

function ShareImg({ relation }: ShareImgPropsType) {
  return (
    <Wrap>
      <Image src={getImg(relation)} width={272} height={143} />
    </Wrap>
  );
}

export default ShareImg;

const Wrap = styled.div`
  height: 160px;
`;
