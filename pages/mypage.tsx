import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import ReceiveForm from "../src/components/mypage/ReceiveForm";
import ShareForm from "../src/components/mypage/ShareForm";
import {
  commentType,
  fetchReceiveCommentsData,
  fetchUserData,
} from "../src/firebase/firebase";
import { emailAtom } from "../src/recoil/user";

function Mypage() {
  const router = useRouter();
  const [email, setEmail] = useRecoilState(emailAtom);
  const [profile, setProfile] = useState({ name: "", img: "" });
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
          <ReceiveForm comments={comments}></ReceiveForm>
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
`;
