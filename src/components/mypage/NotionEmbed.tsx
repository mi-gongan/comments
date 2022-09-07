import React, { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { emailAtom } from "../../recoil/user";

function NotionEmbed() {
  const Ref = useRef<any>();
  const email = useRecoilValue(emailAtom);
  const [linkSave, setLinkSave] = useState("");

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
      <div className="notion-text">노션 프로필 페이지가 있으신가요?</div>
      <div className="notion-box">
        <div className="notion-link"></div>
        <button>복사</button>
      </div>
      <div className="copy-text">
        코멘션을 노션프로필 페이지에
        <br />
        업로드할 수 있어요
      </div>
      <div ref={Ref} onClick={linkCopy} className="email-link">
        {process.env.NEXT_PUBLIC_BASEURL +
          `/mycomment/${encodeURIComponent(email)}`}
      </div>
      <div className="copy-link" onClick={clickButton}>
        <div className={linkSave ? "link-save" : "link-not-save"}>
          Copy&amp;Paste
        </div>
      </div>
    </Wrap>
  );
}

export default NotionEmbed;

const Wrap = styled.div`
  background-color: white;
  text-align: center;
  padding-top: 48px;
  padding-bottom: 50px;
  .notion-text {
    font-weight: 500;
    font-size: 17px;
    line-height: 26px;
  }
  .notion-box {
    margin-top: 21px;
    margin-left: 10%;
    width: 80%;
    height: 40px;
    border: 2px solid #d3d3d3;
    border-radius: 7px;
    padding: 10px;
    display: flex;
    .notion-link {
      flex: 1;
    }
  }
  .copy-text {
    margin-top: 44px;
    line-height: 26.95px;
    font-weight: 500;
    font-size: 17px;
  }
  .copy-link {
    margin-top: 17px;
    margin-left: 25%;
    width: 50%;
    height: 55px;
    line-height: 55px;
    .link-save {
      background-color: var(--primary-color);
      border-radius: 7px;
      color: white;
    }
    .link-not-save {
      background: #d3d3d3;
      border-radius: 7px;
    }
  }
  .email-link {
    display: none;
  }
  button {
    width: 65px;
    height: 40px;
    margin-left: 10px;
    border-radius: 5px;
    border: none;
  }
`;
