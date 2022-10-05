import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import backButton from "../../../public/assets/back-button.svg";

export interface childrenProps {
  children: React.ReactNode;
}

function DetailHeader({ children }: childrenProps) {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <Wrap>
      <div className="img" onClick={goBack}>
        <Image src={backButton} />
      </div>
      <div className="text">{children}</div>
    </Wrap>
  );
}

export default DetailHeader;

const Wrap = styled.div`
  background-color: white;
  height: 70px;
  display: flex;
  align-items: center;
  .img {
    margin-left: 18px;
    margin-top: 3px;
  }
  .text {
    margin-left: 21px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 158.5%;
  }
`;
