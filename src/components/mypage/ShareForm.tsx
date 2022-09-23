import Image from "next/image";
import React, { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { emailAtom } from "../../recoil/user";
import { sendShare } from "../../utils/kakao";

function ShareForm() {
  const email = useRecoilValue(emailAtom);
  const [linkSave, setLinkSave] = useState("");
  const Ref = useRef<any>();
  const linkFormat =
    process.env.NEXT_PUBLIC_BASEURL + `/form/${encodeURIComponent(email)}`;

  const clickButton = (e: any) => {
    console.log(e);
    Ref.current.click();
  };

  const linkCopy = (e: any) => {
    e.preventDefault();
    console.log(e);
    window.navigator.clipboard.writeText(e.target.textContent);
    setLinkSave("ok");
  };
  const shareKakao = (e: any) => {
    e.preventDefault();
    sendShare(
      "코맨션 적으러 가기",
      "일을 하는 곳에서의 나는 어떤 사람인가요? 나의 모습을 소개해주세요!",
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F02e1788c-9f9b-4d21-a660-632f3bf3e018%2FGroup_199.png?table=block&id=21ca1beb-4e50-42b9-8da6-98fbddb9cf52&spaceId=8205b724-2467-4e7d-872e-5d97f05e8fdb&width=250&userId=01067604-9d7f-4ed1-b550-69611cb5ddba&cache=v2",
      linkFormat,
      "코멘션 적으러 가기"
    );
  };
  return (
    <Wrap>
      <div className="text">
        <span>코멘션</span>을 받고 싶다면,
        <br />
        친구들에게 공유해보세요!
      </div>
      <div className="copy-box">
        <div ref={Ref} onClick={linkCopy} className="email-link">
          {linkFormat}
        </div>
        <button
          onClick={clickButton}
          className={linkSave ? "link-save" : "link-not-save"}
        >
          복사
        </button>
      </div>
      <div onClick={shareKakao} className="kakao_share">
        <div className="kakao-share-text">
          <Image
            alt="kakao-share-text"
            src="/assets/kakao-share-text.svg"
            width="183px"
            height="27px"
          ></Image>
        </div>
      </div>
    </Wrap>
  );
}

export default ShareForm;

const Wrap = styled.div`
  padding-top: 10%;
  text-align: center;
  background-color: white;
  padding-bottom: 30px;
  .text {
    font-weight: 600;
    font-size: 22px;
    line-height: 34px;
    margin-bottom: 25px;
    span {
      color: var(--primary-color);
    }
  }
  .copy-box {
    margin: auto;
    width: 75%;
    height: 40px;
    border: 2px solid #d3d3d3;
    border-radius: 7px;
    padding: 10px;
    display: flex;
    white-space: nowrap;
  }
  .email-link {
    margin-left: 8px;
    line-height: 40px;
    width: calc(100% - 90px);
    overflow: hidden;
    color: #8c8c8c;
  }
  button {
    width: 65px;
    height: 40px;
    margin-left: 10px;
    border-radius: 5px;
    border: none;
    color: black;
  }
  .link-save {
    background-color: var(--primary-color);
    color: white;
    font-size: 17px;
    font-weight: 500;
  }
  .link-not-save {
    background: #d3d3d3;
  }
  .kakao_share {
    background-color: #ffd600;
    border-radius: 7px;
    height: 60px;
    margin: 30px 10% 0px 10%;
    .kakao-share-text {
      padding-top: 16.5px;
    }
  }
`;
