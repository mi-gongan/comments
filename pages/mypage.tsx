import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Card from "../src/components/common/Card";
import ShareForm from "../src/components/mypage/ShareForm";
import {
  commentDataType,
  fetchReceiveCommentsData,
  fetchUserData,
} from "../src/firebase/firebase";
import { emailAtom } from "../src/recoil/user";

function Mypage() {
  const router = useRouter();
  const [email, setEmail] = useRecoilState(emailAtom);
  const [profile, setProfile] = useState({ name: "", img: "" });
  const [render, setRender] = useState("");
  const [comments, setComments] = useState<Array<commentDataType>>([]);

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
          <div className="profile">
            <div>다른 사람들이 써준</div>
            <div>{profile?.name}의 코멘션</div>
            {profile.img && (
              <Image
                alt="profile-img"
                src={profile.img}
                width="100"
                height="100"
              />
            )}
          </div>
          <div>받은거</div>
          {comments.map((comment, idx) => (
            <Card key={idx} text={comment.text} name={comment.name}></Card>
          ))}
          <div className="logout" onClick={handleLogout}>
            Logout
          </div>
        </Wrap>
      )}
    </>
  );
}

export default Mypage;

const Wrap = styled.div`
  text-align: center;
  .link-save {
    background-color: var(--primary-color);
  }
  .link-not-save {
    background-color: gray;
  }
`;
