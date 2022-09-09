import React, { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { emailAtom } from "../../recoil/user";

function ShareForm() {
  const email = useRecoilValue(emailAtom);
  const [linkSave, setLinkSave] = useState("");
  const Ref = useRef<any>();

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
  return (
    <Wrap>
      <div className="text">
        <span>코멘션</span>을 받고 싶다면,
        <br />
        친구들에게 공유해보세요!
      </div>
      <div className="copy-box">
        <div ref={Ref} onClick={linkCopy} className="email-link">
          {process.env.NEXT_PUBLIC_BASEURL +
            `/form/${encodeURIComponent(email)}`}
        </div>
        <button
          onClick={clickButton}
          className={linkSave ? "link-save" : "link-not-save"}
        >
          복사
        </button>
      </div>
    </Wrap>
  );
}

export default ShareForm;

const Wrap = styled.div`
  padding-top: 10%;
  text-align: center;
  background-color: white;
  padding-bottom: 55px;
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
`;
