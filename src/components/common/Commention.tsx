import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchUserData } from "../../firebase/firebase";
import { useSetRecoilState } from "recoil";
import { formAtom } from "../../recoil/form";

function Commention() {
  const router = useRouter();
  const { user }: any = router.query;
  const [text, setText] = useState("");
  const [render, setRender] = useState("");
  const [userName, setUserName] = useState<any>("");
  const setForm = useSetRecoilState(formAtom);
  const textRef = useRef<any>();

  useEffect(() => {
    setRender("ok");
  }, []);

  useEffect(() => {
    //@ts-ignore
    user && fetchUserData(user).then((res: any) => setUserName(res.name));
  }, [router]);

  const handleResizeHeight = useCallback(() => {
    console.log(textRef.current.style.height, textRef.current.scrollHeight);
    textRef.current.style.height = textRef.current.scrollHeight - 20 + "px";
  }, []);

  const sendComment = () => {
    //@ts-ignore
    setForm({
      _from: "",
      _to: user,
      id: 0,
      name: "",
      text: text,
      view: true,
    });
    router.push("/commentlogin");
  };

  return (
    <>
      {render && (
        <Wrap>
          <Image
            alt="commention-logo"
            src="/assets/commention-logo.svg"
            width="160"
            height="40"
          />
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            autoFocus
            ref={textRef}
            onInput={handleResizeHeight}
            placeholder={`안녕하세요 코멘션입니다.\n${userName}에게 코멘트를 작성해주세요`}
          />
          <div className="button-area" onClick={sendComment}>
            <button>Upload</button>
          </div>
        </Wrap>
      )}
    </>
  );
}

export default Commention;

const Wrap = styled.div`
  margin: auto;
  width: calc(100% - 100px);
  padding: 30px;
  background-color: white;
  border-radius: 27px;
  filter: drop-shadow(0px 0px 14.6379px rgba(0, 0, 0, 0.13));
  textarea {
    margin-top: 15px;
    width: 95%;
    font-weight: 400;
    line-height: 26px;
    border: none;
    resize: none;
    padding: 10px;
  }
  .button-area {
    display: flex;
    justify-content: right;
  }
  button {
    width: 70px;
    height: 30px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 7px;
  }
`;
