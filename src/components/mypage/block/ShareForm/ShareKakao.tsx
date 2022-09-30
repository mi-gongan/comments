import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface ShareKaKaoPropsType {
  shareKakao: (e: any) => void;
}

function ShareKakao({ shareKakao }: ShareKaKaoPropsType) {
  return (
    <Wrap>
      <KakaoShare onClick={shareKakao}>
        <div className="kakao-share-text">
          <Image
            alt="kakao-share-text"
            src="/assets/kakao-share-text.svg"
            width="183px"
            height="27px"
          ></Image>
        </div>
      </KakaoShare>
      <div className="kakao_share"></div>
    </Wrap>
  );
}

export default ShareKakao;

const Wrap = styled.div``;

const KakaoShare = styled.div`
  background-color: #ffd600;
  border-radius: 7px;
  height: 60px;
  margin: 30px 10% 0px 10%;
  .kakao-share-text {
    padding-top: 16.5px;
  }
`;
