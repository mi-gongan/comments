import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { assignUser } from "../src/firebase/firebase";
import { emailAtom } from "../src/recoil/user";
import { kakaoLogin } from "../src/services/kakao";

function login() {
  const setEmail = useSetRecoilState(emailAtom);
  const router = useRouter();
  const [render, setRender] = useState("");

  useEffect(() => {
    setRender("ok");
  }, []);

  useEffect(() => {
    kakaoLogin().then((res: any) => {
      setEmail(res.kakao_account.email);
      assignUser(
        res.kakao_account.email,
        res.properties.nickname,
        res.properties.profile_image
      ).then(() => {
        router.push(`/mypage`);
      });
    });
  }, [render]);

  return (
    <Wrap>
      <Head>
        <title>commention</title>
        <link rel="icon" href="/assets/logo.png" />
        <meta property="og:title" content="commention" />
        <meta property="og:description" content="서로 코멘션을 남겨봐요" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASEURL} />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_BASEURL + "/assets/logo.png"}
        />
      </Head>
    </Wrap>
  );
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
