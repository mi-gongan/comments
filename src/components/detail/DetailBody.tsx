import React from "react";
import styled from "styled-components";
import { childrenProps } from "./DetailHeader";

function DetailBody({ children }: childrenProps) {
  return <Wrap>{children}</Wrap>;
}

export default DetailBody;

const Wrap = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 13px;
  margin: 30px 30px;
`;
