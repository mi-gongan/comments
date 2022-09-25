import type { NextPage } from "next";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { emailAtom } from "../src/recoil/user";
import { useEffect } from "react";
import LoginBox from "../src/components/index/LoginBox";

const Home: NextPage = () => {
  const email = useRecoilValue(emailAtom);
  const router = useRouter();

  useEffect(() => {
    email && router.push("/mypage");
  }, [email]);

  return (
    <Wrap>
      <LoginBox />
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
