import type { NextPage } from "next";
import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";
import Carousel from "../src/components/common/Carousel";
import Image from "next/image";
import Commention from "../src/components/common/Commention";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <Wrap>
      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <div onClick={() => signIn()}>
          <Image
            alt="kakao-login"
            src="/assets/kakao-login.png"
            width="300px"
            height="45px"
          ></Image>
        </div>
      )}
      <Commention />
      <Carousel></Carousel>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  width: 100%;
`;
