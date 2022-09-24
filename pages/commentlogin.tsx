import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { emailAtom } from "../src/recoil/user";
import Image from "next/image";
import { formAtom } from "../src/recoil/form";
import {
  assignUser,
  fetchUserData,
  getFinalIndex,
  setComment,
} from "../src/firebase/firebase";

function commentlogin() {
  const [email, setEmail] = useRecoilState(emailAtom);
  const router = useRouter();
  const [render, setRender] = useState("");
  const [form, setForm] = useRecoilState(formAtom);
  const [upload, setUpload] = useState("");
  const [peerName, setPeerName] = useState(form._to.split("@")[0]);

  useEffect(() => {
    if (!form._to) {
      router.push("/");
      return;
    }
    setRender("ok");
    fetchUserData(form._to).then((res: any) => {
      if (res) {
        setPeerName(res.name);
      }
    });
  }, []);

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
      });
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
        window.Kakao.Auth.setAccessToken(response.access_token).then(() => {
          window.Kakao.API &&
            window.Kakao.API.request({
              url: "/v2/user/me",
              success: function (response: any) {
                setEmail(response.kakao_account.email);
                assignUser(
                  response.kakao_account.email,
                  response.properties.nickname,
                  response.properties.profile_image
                );
              },
              fail: function (error: any) {
                console.log(error);
              },
            });
        });
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
          <div className="comment-text">
            <span>{peerName}</span>에게
            <br />
            코멘션을 보내기 위해
            <br />
            카카오톡 로그인을 해주세요!
          </div>
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
  color: white;
  .comment-text {
    text-align: center;
    font-weight: 500;
    line-height: 34.87px;
    font-size: 22px;
    margin-top: 75%;
    span {
      font-weight: 600;
      text-emphasis-style: dot;
      text-emphasis-position: over left;
      -webkit-text-emphasis-style: dot;
      -webkit-text-emphasis-position: over;
    }
  }
  .login {
    margin-top: 30%;
    text-align: center;
  }
`;
