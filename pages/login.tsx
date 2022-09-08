import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { assignUser } from "../src/firebase/firebase";
import { emailAtom } from "../src/recoil/user";

function login() {
  const setEmail = useSetRecoilState(emailAtom);
  const router = useRouter();
  const [render, setRender] = useState("");

  useEffect(() => {
    setRender("ok");
  }, []);

  useEffect(() => {
    window.Kakao.API &&
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: function (res: any) {
          setEmail(res.kakao_account.email);
          assignUser(
            res.kakao_account.email,
            res.properties.nickname,
            res.properties.profile_image
          ).then(() => {
            router.push(`/mypage`);
          });
        },
        fail: function (error: any) {
          console.log(error);
        },
      });
  }, [render]);

  return <Wrap>login 중입니다...</Wrap>;
}

export default login;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
`;
