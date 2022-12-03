import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { formAtom } from "../src/recoil/form";
import {
  assignUser,
  fetchUserData,
  getFinalIndex,
  setComment,
} from "../src/firebase/firebase";
import { emailAtom } from "../src/recoil/user";
import { kakaoLogin, setKaKaoToken } from "../src/services/kakao";
import LoginBox from "../src/components/commentionlogin/LoginBox";
import Head from "next/head";
import DefaultHead from "../src/components/seo/defaultHead";

function commentlogin() {
  const router = useRouter();
  const [form, setForm] = useRecoilState(formAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [upload, setUpload] = useState("");
  const [peerName, setPeerName] = useState<string>(form._to.split("@")[0]);
  const [login, setLogin] = useState("");
  const [render, setRender] = useState("");

  useEffect(() => {
    if (!form._to) {
      router.push("/");
      return;
    }
    fetchUserData(form._to).then((res: any) => {
      if (res) {
        setPeerName(res.name);
      }
    });
    setRender("ok");
  }, []);

  //email 있는 경우
  useEffect(() => {
    if (email) {
      fetchUserData(email).then((res: any) => {
        if (email === form._to) {
          alert("본인에게는 코멘트를 작성할 수 없습니다");
          router.push("/");
          return;
        }
        getFinalIndex(form._to).then((finalIndex) => {
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
      setComment(form);
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
  const handleLogin = () => {
    setKaKaoToken().then((res) => {
      console.log(res);
      setLogin("ok");
    });
  };

  useEffect(() => {
    if (login === "ok") {
      kakaoLogin().then((res: any) => {
        assignUser(
          res.kakao_account.email,
          res.properties.nickname,
          res.properties.profile_image
        ).then(() => {
          setEmail(res.kakao_account.email);
        });
      });
    }
  }, [login]);

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
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
`;
