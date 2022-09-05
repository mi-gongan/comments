import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Carousel from "../src/components/common/Carousel";
import Image from "next/image";
import Commention from "../src/components/common/Commention";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <>
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
    </>
  );
};

export default Home;
