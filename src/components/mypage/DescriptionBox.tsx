import React from "react";
import Image from "next/image";
import { profileType } from "../../../pages/mypage";
import styled from "styled-components";

function DescriptionBox({ name, img }: profileType) {
  return (
    <Wrap>
      <div className="description">
        <div className="text">다른 사람들이 써준</div>
        <div className="commention">
          <span>{name}</span>의 코멘션
        </div>
      </div>
      <div className="img">
        <Image alt="profile-img" src={img} width="72" height="72" />
      </div>
    </Wrap>
  );
}

export default DescriptionBox;

const Wrap = styled.div`
  display: flex;
  padding: 20px 10%;
  justify-content: space-between;
  .description {
    margin-top: 8px;
  }
  .text {
    font-weight: 600;
    font-size: 14px;
  }
  .commention {
    font-weight: 600;
    font-size: 22.5px;
    line-height: 35.66px;
    span {
      color: var(--primary-color);
    }
  }
  .img {
    margin-right: 10px;
    width: 72px;
    height: 72px;
    border-radius: 100%;
    border: 3px solid var(--primary-color);
  }
  Img {
    border-radius: 100%;
  }
`;
