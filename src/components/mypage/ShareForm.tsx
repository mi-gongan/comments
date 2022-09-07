import React, { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { emailAtom } from "../../recoil/user";

function ShareForm() {
  const email = useRecoilValue(emailAtom);
  const [linkSave, setLinkSave] = useState("");
  const Ref = useRef<any>();

  const clickButton = () => {
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
      {" "}
      <div>코멘션을 받고 싶다면, 친구들에게 공유해보세요!</div>
      <div>
        <div ref={Ref} onClick={linkCopy}>
          {process.env.NEXT_PUBLIC_BASEURL + `/form/${email}`}
        </div>
        <button
          onClick={clickButton}
          className={linkSave ? "link-save" : "link-not-save"}
        >
          코멘트 폼 링크 복사
        </button>
      </div>
    </Wrap>
  );
}

export default ShareForm;

const Wrap = styled.div``;
