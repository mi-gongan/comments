import React from "react";
import styled from "styled-components";

interface TextPropsType {
  children: React.ReactNode;
}

function CardText({ children }: TextPropsType) {
  return <Wrap>{children}</Wrap>;
}

export default CardText;

const Wrap = styled.div`
  height: 170px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  overflow: scroll;
`;
