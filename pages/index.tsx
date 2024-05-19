import type { NextPage } from "next";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { emailAtom } from "@store/user";
import { useEffect } from "react";
import LoginBox from "@components/index/LoginBox";
import DefaultHead from "@components/seo/DefaultHead";
import { theme } from "@styles/theme";
import { Kakao } from "@libs/kakao";

const Home: NextPage = () => {
  const email = useRecoilValue(emailAtom);
  const router = useRouter();

  useEffect(() => {
    email && router.push("/mypage");
  }, [email]);

  const handleLogin = () => {
    try {
      window.dataLayer.push({ event: "login" });
      Kakao.authorize();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrap>
      <DefaultHead />
      <LoginBox handleLogin={handleLogin} />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${theme.color.primary};
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
