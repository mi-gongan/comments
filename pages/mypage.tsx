import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import DescriptionBox from "../src/components/mypage/DescriptionBox";
import ReceiveForm from "../src/components/mypage/ReceiveForm";
import ShareForm from "../src/components/mypage/ShareForm";
import {
  commentType,
  fetchReceiveCommentsData,
  fetchUserData,
} from "../src/firebase/firebase";
import { emailAtom } from "../src/recoil/user";

export type profileType = {
  name: string;
  img: string;
};

function Mypage() {
  const router = useRouter();
  const [email, setEmail] = useRecoilState(emailAtom);
  const [profile, setProfile] = useState<profileType>({ name: "", img: "" });
  const [render, setRender] = useState("");
  const [comments, setComments] = useState<Array<commentType>>([]);

  useEffect(() => {
    if (email) {
      fetchUserData(email).then((res) =>
        //@ts-ignore
        setProfile({ name: res.name, img: res.img })
      );
      setRender("ok");
      fetchReceiveCommentsData(email).then((res: any) => setComments(res));
    } else {
      router.push("/");
    }
  }, []);

  const handleLogout = () => {
    try {
      kakaoExit();
    } catch (err) {
      console.log(err);
    }
  };

  const kakaoExit = () => {
    window.Kakao.API.request({
      url: "/v1/user/unlink",
      success: function (response: any) {
        console.log(response);
        setEmail("");
        router.push("/");
      },
      fail: function (error: any) {
        console.log(error);
        setEmail("");
        router.push("/");
      },
    });
  };

  return (
    <>
      {render && (
        <Wrap>
          <ShareForm />
          <CommentionArea>
            <DescriptionBox name={profile.name} img={profile.img} />
            <ReceiveForm comments={comments}></ReceiveForm>{" "}
            <div className="logout" onClick={handleLogout}>
              로그아웃
            </div>
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
  }
`;

const CommentionArea = styled.div`
  margin-top: 30px;
  background-color: #f3f3f3;
`;
