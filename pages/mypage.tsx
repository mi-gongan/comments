import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Toast from "../src/components/common/Toast";
import Logout from "../src/components/mypage/Logout";
import NotionEmbed from "../src/components/mypage/NotionEmbed";
import ReceiveForm from "../src/components/mypage/ReceiveForm";
import ScrollFloatingButton from "../src/components/mypage/ScrollFloatingButton";
import ShareForm from "../src/components/mypage/ShareForm";
import { fetchUserData } from "../src/firebase/firebase";
import { emailAtom } from "../src/recoil/user";

export type profileType = {
  name: string;
  img: string;
  link: string;
};

function Mypage() {
  const router = useRouter();
  const email = useRecoilValue(emailAtom);
  const [render, setRender] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [profile, setProfile] = useState<profileType>({
    name: "",
    img: "",
    link: "",
  });

  useEffect(() => {
    if (email) {
      setRender("ok");
    } else {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (email) {
      fetchUserData(email).then((res: any) => setProfile(res));
    }
  }, [email]);

  return (
    <>
      {render && (
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
          {toastOpen && <Toast>Copy complete!</Toast>}
          <ShareForm
            profile={profile}
            email={email}
            handleToast={setToastOpen}
          />
          <ReceiveForm email={email} profile={profile} />
          <NotionEmbed profile={profile} email={email} />
          <Logout />
          <ScrollFloatingButton />
        </Wrap>
      )}
    </>
  );
}

export default Mypage;

const Wrap = styled.div`
  position: relative;
  background-color: white;
`;
