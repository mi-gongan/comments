import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { notionLinkSave } from "../../firebase/firebase";
import { emailAtom } from "../../recoil/user";

function NotionEmbed() {
  const Ref = useRef<any>();
  const email = useRecoilValue(emailAtom);
  const [linkSave, setLinkSave] = useState("");
  const [notionLink, setNotionLink] = useState("");
  const [checkNotion, setCheckNotion] = useState("ok");
  const [saveCheck, setSaveCheck] = useState("");

  const handleNotionLink = (e: any) => {
    e.preventDefault();
    setNotionLink(e.target.value);
  };

  const saveNotionLink = (e: any) => {
    e.preventDefault();
    if (notionLink.includes("notion")) {
      setCheckNotion("ok");
      notionLinkSave(email, notionLink);
      setSaveCheck("ok");
      alert("저장되었습니다");
    } else {
      setCheckNotion("");
    }
  };

  const clickButton = (e: any) => {
    if (!saveCheck) {
      alert("노션 링크를 저장해야 복사할 수 있습니다");
      return;
    }
    e.preventDefault();
    Ref.current.click();
  };

  const linkCopy = (e: any) => {
    e.preventDefault();
    window.navigator.clipboard.writeText(e.target.textContent);
    setLinkSave("ok");
  };
  return (
    <Wrap>
      <div className="notion-text">노션 프로필 페이지가 있으신가요?</div>
      <div className="notion-box">
        <input
          className="notion-link"
          onChange={handleNotionLink}
          value={notionLink}
        ></input>
        <button onClick={saveNotionLink} className="link-save">
          저장
        </button>
      </div>
      {!checkNotion && (
        <div className="alert-must-notion">
          <Image
            alt="notion-alert"
            src="/assets/notion-alert.svg"
            height="21px"
            width="193px"
          ></Image>
        </div>
      )}
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
      border: none;
    }
    button {
      width: 65px;
      height: 40px;
      margin-left: 10px;
      border-radius: 5px;
      border: none;
    }
  }
  .alert-must-notion {
    margin-top: 8px;
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
    .link-not-save {
      background: #d3d3d3;
      border-radius: 7px;
    }
  }
  .link-save {
    background-color: var(--primary-color);
    border-radius: 7px;
    color: white;
  }
  .email-link {
    display: none;
  }
`;
