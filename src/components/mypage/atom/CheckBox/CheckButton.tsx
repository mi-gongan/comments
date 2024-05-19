import React from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

export interface CheckPropsType {
  text: string;
  checked: boolean;
  handleClick: () => void;
}

function CheckButton({ text, checked, handleClick }: CheckPropsType) {
  return (
    <Wrap checked={checked} onClick={handleClick}>
      {text}
    </Wrap>
  );
}

export default CheckButton;

const Wrap = styled.div<{ checked: boolean }>`
  margin-right: 5px;
  padding: 5px;

  width: 74px;
  height: 29px;

  background-color: ${(props) => (props.checked ? theme.color.primary : "")};
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.checked ? theme.color.primary : theme.bg.gray300)};

  color: ${(props) => (props.checked ? "white" : "black")};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 29px;

  cursor: pointer;
`;
