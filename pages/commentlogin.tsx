import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { emailAtom } from "../src/recoil/user";
import Image from "next/image";
import { formAtom } from "../src/recoil/form";
import { fetchUserData, setComments } from "../src/firebase/firebase";

function commentlogin() {
  const email = useRecoilValue(emailAtom);
  const router = useRouter();
  const [render, setRender] = useState("");
  const [form, setForm] = useRecoilState(formAtom);
  const [upload, setUpload] = useState("");
  useEffect(() => {
    if (!form._to) router.push("/");
    setRender("ok");
  }, []);

  useEffect(() => {
    if (email) {
      fetchUserData(email).then((res: any) => {
        if (email === form._to) {
          alert("본인에게는 코멘트를 작성할 수 없습니다");
          router.push("/");
          return;
        }
        setForm({
          _from: email,
          _to: form._to,
          name: res.name,
          text: form.text,
          view: true,
        });
        setUpload("ok");
      });
    }
  }, [email]);

  useEffect(() => {
    if (upload) {
      setComments(form);
      setForm({
        _from: "",
        _to: "",
        name: "",
        text: "",
        view: true,
      });
      router.push("/peercomment");
    }
  }, [upload]);

  const handleLogin = () => {
    try {
      kakaoLogin();
    } catch (err) {
      console.log(err);
    }
  };

  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      success: function (response: any) {
        window.Kakao.Auth.setAccessToken(response.access_token);
        console.log(response);
        router.push("/login");
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  };

  return (
    <>
      {render && (
        <Wrap>
          <div className="login" onClick={handleLogin}>
            <Image
              alt="kakao-login"
              src="/assets/kakao-login.png"
              width="300px"
              height="45px"
            ></Image>
          </div>
        </Wrap>
      )}
    </>
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
  justify-content: center;
  .login {
    text-align: center;
  }
`;
