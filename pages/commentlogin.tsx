import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { formAtom } from "@store/form";
import { emailAtom } from "@store/user";
import LoginBox from "@components/commentionlogin/LoginBox";
import DefaultHead from "@components/seo/DefaultHead";
import { theme } from "@styles/theme";
import { Firebase } from "@libs/firebase";
import { Kakao } from "@libs/kakao";

function commentlogin() {
  const router = useRouter();
  const [form, setForm] = useRecoilState(formAtom);
  const email = useRecoilValue(emailAtom);
  const [upload, setUpload] = useState("");
  const [peerName, setPeerName] = useState<string>(form._to.split("@")[0]);
  const [render, setRender] = useState("");

  useEffect(() => {
    if (!form._to) {
      router.push("/");
      return;
    }
    Firebase.fetchUserData(form._to).then((res: any) => {
      if (res) {
        setPeerName(res.name);
      }
    });
    setRender("ok");
  }, []);

  //email 있는 경우
  useEffect(() => {
    if (email) {
      Firebase.fetchUserData(email).then((res: any) => {
        if (email === form._to) {
          alert("본인에게는 코멘트를 작성할 수 없습니다");
          router.push("/");
          return;
        }
        Firebase.getFinalIndex(form._to).then((finalIndex) => {
          setForm({
            _from: email,
            _to: form._to,
            id: finalIndex + 1,
            name: res.name,
            text: form.text,
            view: false,
          });
          setUpload("ok");
        });
      });
    }
  }, [email]);

  // uplaod되면 page 이동
  useEffect(() => {
    if (upload) {
      Firebase.setComment(form);
      router.push(
        `/peercomment/${encodeURIComponent(form._to)}?formState=true`
      );
      setForm({
        _from: "",
        _to: "",
        id: 0,
        name: "",
        text: "",
        view: false,
        star: false,
      });
    }
  }, [upload]);

  // email 없는 경우 login
  const handleLogin = async () => {
    Kakao.authorize();
  };

  return (
    <Wrap>
      <DefaultHead />
      {render && (
        <LoginBox
          peerName={peerName}
          handleLogin={!email ? handleLogin : undefined}
        />
      )}
    </Wrap>
  );
}

export default commentlogin;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${theme.color.primary};
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
`;
