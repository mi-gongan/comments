import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";

interface ToastPropsType {
  children: React.ReactNode;
}

function Toast({ children }: ToastPropsType) {
  return (
    <Wrap>
      <div className="back"></div>
      <div className="alert">
        <div className="icon">
          <Image src="/assets/done-icon.svg" width={30} height={30} />
        </div>
        <div className="text">{children}</div>
      </div>
    </Wrap>
  );
}

export default Toast;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%,100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%,0%);
  }
`;

const Wrap = styled.div`
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  .back {
    width: 100%;
    height: 100%;
  }
  .alert {
    position: absolute;
    z-index: 11;
    opacity: 1;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 50px;
    border-radius: 20px;
    line-height: 50px;
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    animation-name: ${fadeIn};
    animation-duration: 1.5s;
  }
  .icon {
    position: absolute;
    left: 15px;
    top: 10px;
  }
  .text {
    font-weight: 600;
  }
`;
