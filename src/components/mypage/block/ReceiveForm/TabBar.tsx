import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface TabBarPropsType {
  commentCount: number;
  img: string;
}

function TabBar({ commentCount, img }: TabBarPropsType) {
  return (
    <Wrap>
      <Number>코멘션 {commentCount}개</Number>
      <ProfileImg>
        <div className="img-ring">
          {img && <Image alt="profile-img" src={img} width="72" height="72" />}
        </div>
      </ProfileImg>
    </Wrap>
  );
}

export default TabBar;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 10% 0px 10%;
`;

const ProfileImg = styled.div`
  .img-ring {
    width: 72px;
    height: 72px;
    border-radius: 100%;
    border: 3px solid var(--primary-color);
  }
  Img {
    border-radius: 100%;
  }
`;

const Number = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #828282;
  position: relative;
  margin-top: 55px;
`;
