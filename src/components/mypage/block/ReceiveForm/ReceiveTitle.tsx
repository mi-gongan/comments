import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";

interface PropsType {
  name: string;
}

function ReceiveTitle({ name }: PropsType) {
  return (
    <Wrap>
      {name}님을
      <br />
      소개합니다
    </Wrap>
  );
}

export default ReceiveTitle;

const Wrap = styled.div`
  font-weight: 550;
  font-size: 25px;
  line-height: 150%;
  color: ${theme.color.primary};
  margin: 0 10%;
`;
