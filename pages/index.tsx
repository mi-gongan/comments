import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  console.log(
    process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
    process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET,
    typeof process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET
  );
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Home;
