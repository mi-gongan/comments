import type { NextPage } from "next";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { emailAtom } from "../src/recoil/user";
import { useEffect } from "react";
import LoginBox from "../src/components/index/LoginBox";
import { setKaKaoToken } from "../src/services/kakao";
import Head from "next/head";

const Home: NextPage = () => {
  const email = useRecoilValue(emailAtom);
  const router = useRouter();

  useEffect(() => {
    email && router.push("/mypage");
  }, [email]);

  const handleLogin = () => {
    try {
      setKaKaoToken().then((res) => {
        console.log(res);
        router.push("/login");
      });
    } catch (err) {
      console.log(err);
    }
  };

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
      <LoginBox handleLogin={handleLogin} />
    </Wrap>
  );
};

export default Home;

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
  .title {
    font-size: 24px;
    line-height: 34.87px;
    font-weight: 700;
  }
  .text {
    margin-top: 60%;
    font-size: 18px;
    font-weight: 600;
  }
  .login {
    margin-top: 15px;
  }
`;
