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
          {toastOpen && <Toast>Copy complete!</Toast>}
          <ShareForm
            profile={profile}
            email={email}
            handleToast={setToastOpen}
          />
          <CommentionArea>
            <ReceiveForm email={email} profile={profile} />
            <NotionEmbed profile={profile} email={email} />
            <Logout />
          </CommentionArea>
          <ScrollFloatingButton />
        </Wrap>
      )}
    </>
  );
}

export default Mypage;

const Wrap = styled.div`
  position: relative;
`;

const CommentionArea = styled.div`
  padding-top: 10px;
  background-color: #f0f0f0;
`;
