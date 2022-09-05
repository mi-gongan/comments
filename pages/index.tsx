import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Commention from "../src/components/common/Commention";
import Carousel from "../src/components/common/Carousel";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
      <Carousel></Carousel>
    </>
  );
};

export default Home;
