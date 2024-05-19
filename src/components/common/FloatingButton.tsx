import React from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

interface FloatingButtonPropsType {
  handleClick: () => void;
  children: React.ReactNode;
}

function FloatingButton({ handleClick, children }: FloatingButtonPropsType) {
  return (
    <Wrap>
      <div onClick={handleClick}>{children}</div>
    </Wrap>
  );
}

export default FloatingButton;

const Wrap = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${theme.color.primary};
  height: 35px;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.25);
  text-align: center;
  line-height: 35px;
  width: 200px;
  padding: 10px 20px;
  border-radius: 45px;
  color: white;
`;
