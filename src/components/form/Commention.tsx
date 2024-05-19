import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { formAtom } from "../../recoil/form";
import FloatingButton from "../common/FloatingButton";
import { theme } from "../../styles/theme";
import { Service } from "../../services";

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
    setForm({
      _from: "",
      _to: "",
      id: 0,
      name: "",
      text: "",
      view: false,
    });
  }, []);

  useEffect(() => {
    try {
      user &&
        Service.firebase
          .fetchUserData(user)
          .then((res: any) =>
            res ? setUserName(res.name) : setUserName(user.split("@")[0])
          );
    } catch (err) {
      console.log(err);
    }
  }, [router]);

  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight - 50 + "px";
  }, []);

  const sendComment = () => {
    setForm({
      _from: "",
      _to: decodeURIComponent(user),
      id: 0,
      name: "",
      text: text,
      view: false,
    });
    router.push("/commentlogin");
  };

  return (
    <>
      {render && (
        <Wrap>
          <div className="header">
            <div className="user-name">
              <span>{userName}</span>님
            </div>
            <Image
              alt="commention-logo"
              src="/assets/commention-logo.svg"
              width="45"
              height="30"
            />
          </div>
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            autoFocus
            ref={textRef}
            onInput={handleResizeHeight}
            placeholder={`안녕하세요 코멘션입니다.\n이 노션에 남길 메세지를 작성해주세요\n업로드 버튼을 클릭하기 전에는\n노션주인이 볼 수 없습니다\n이 텍스트를 클릭하면 작성 가능합니다`}
          />
          <FloatingButton handleClick={sendComment}>보내기</FloatingButton>
          {/* <div className="button-area" onClick={sendComment}>
            보내기
          </div> */}
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
  .header {
    display: flex;
    justify-content: space-between;
    .user-name {
      font-size: 22px;
      font-weight: 600;
      line-height: 34px;
      span {
        color: ${theme.color.primary};
      }
    }
  }
  textarea {
    background-color: ${theme.bg.gray100};
    min-height: 200px;
    margin: 15px auto;
    width: 90%;
    font-family: inherit;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    border: none;
    resize: none;
    padding: 25px;
    border-radius: 6px;
    ::placeholder {
      font-size: 15px;
    }
  }
  .button-area {
    text-align: center;
    margin-top: 26px;
    margin-left: 20%;
    width: 60%;
    height: 55px;
    line-height: 55px;
    background-color: ${theme.color.primary};
    color: white;
    border-radius: 7px;
  }
`;
