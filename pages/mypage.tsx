import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import DescriptionBox from "../src/components/mypage/DescriptionBox";
import Logout from "../src/components/mypage/Logout";
import NotionEmbed from "../src/components/mypage/NotionEmbed";
import ReceiveForm from "../src/components/mypage/ReceiveForm";
import ShareForm from "../src/components/mypage/ShareForm";
import { emailAtom } from "../src/recoil/user";

export type profileType = {
  name: string;
  img: string;
};

function Mypage() {
  const router = useRouter();
  const email = useRecoilValue(emailAtom);
  const [render, setRender] = useState("");
  useEffect(() => {
    if (email) {
      setRender("ok");
    } else {
      router.push("/");
    }
  }, []);

  return (
    <>
      {render && (
        <Wrap>
          <ShareForm />
          <CommentionArea>
            <DescriptionBox />
            <ReceiveForm />
            <NotionEmbed />
            <Logout />
          </CommentionArea>
        </Wrap>
      )}
    </>
  );
}

export default Mypage;

const Wrap = styled.div`
  .logout {
    text-align: center;
    text-decoration: underline;
    padding: 20px;
    cursor: pointer;
  }
`;

const CommentionArea = styled.div`
  margin-top: 30px;
  background-color: #f3f3f3;
`;
