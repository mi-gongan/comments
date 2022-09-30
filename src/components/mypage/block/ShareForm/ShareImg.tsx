import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { matchType } from "../../../../services/translate";

interface ShareImgPropsType {
  type: string;
}

function ShareImg({ type }: ShareImgPropsType) {
  return (
    <Wrap>
      <Image
        src={`/assets/share_img/share_img_${matchType(type)}.svg`}
        width={272}
        height={143}
      />
    </Wrap>
  );
}

export default ShareImg;

const Wrap = styled.div`
  height: 160px;
`;
