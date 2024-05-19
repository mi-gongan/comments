import React from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

function Description() {
  return (
    <Wrap>
      별표 버튼을 누르면 순서를 바꿀 수 있어요
      <br />
      시야 버튼을 누르면 소개글을 숨길 수 있어요
    </Wrap>
  );
}

export default Description;

const Wrap = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: ${theme.color.primary};
  text-align: center;
  line-height: 150.5%;
  position: relative;
  top: 50px;
  margin-top: 20px;
`;
