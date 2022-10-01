import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface TabBarPropsType {
  commentCount: number;
  img: string;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

function TabBar({ commentCount, img, setEdit }: TabBarPropsType) {
  return (
    <Wrap>
      <TextWrap>
        <Number>코멘션 {commentCount}개</Number>
        <Edit onClick={() => setEdit(true)}>편집</Edit>
      </TextWrap>
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
  margin: 60px 10% 0px 10%;
`;

const TextWrap = styled.div`
  position: relative;
  margin-top: 55px;
  display: flex;
  color: var(--primary-color);
`;

const Number = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

const Edit = styled.div`
  font-weight: 300;
  font-size: 12px;
  margin-left: 15px;
  margin-top: 5px;
  text-decoration: underline;
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
