import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Toast from "@components/common/Toast";
import Logout from "@components/mypage/Logout";
import NotionEmbed from "@components/mypage/NotionEmbed";
import ReceiveForm from "@components/mypage/ReceiveForm";
import ScrollFloatingButton from "@components/mypage/ScrollFloatingButton";
import ShareForm from "@components/mypage/ShareForm";
import DefaultHead from "@components/seo/DefaultHead";
import { emailAtom } from "@store/user";
import { ProfileType } from "@types";
import { Firebase } from "@libs/firebase";

function Mypage() {
  const router = useRouter();
  const email = useRecoilValue(emailAtom);
  const [render, setRender] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [profile, setProfile] = useState<ProfileType>({
    name: "",
    img: "",
    link: "",
  });

  useEffect(() => {
    if (email) {
      setRender(true);
    } else {
      router.push("/");
    }
  }, [email, render]);

  useEffect(() => {
    if (email) {
      Firebase.fetchUserData(email).then((res: any) => setProfile(res));
    }
  }, [email]);

  return (
    <>
      {render && (
        <Wrap>
          <DefaultHead />
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
