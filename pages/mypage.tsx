import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Card from "../src/components/common/Card";
import Carousel from "../src/components/common/Carousel";
import {
  commentDataType,
  fetchCommentsData,
  fetchUserData,
} from "../src/firebase/firebase";
import { emailAtom } from "../src/recoil/user";

function Mypage() {
  const router = useRouter();
  const [email, setEmail] = useRecoilState(emailAtom);
  const [profile, setProfile] = useState({ name: "", img: "" });
  const [render, setRender] = useState("");
  const [comments, setComments] = useState<Array<commentDataType>>([]);
  const [linkSave, setLinkSave] = useState("");
  const Ref = useRef<any>();

  useEffect(() => {
    if (email) {
      fetchUserData(email).then((res) =>
        //@ts-ignore
        setProfile({ name: res.name, img: res.img })
      );
      setRender("ok");
      fetchCommentsData(email).then((res: any) => setComments(res));
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

  const clickButton = () => {
    Ref.current.click();
  };

  const linkCopy = (e: any) => {
    e.preventDefault();
    console.log(e);
    window.navigator.clipboard.writeText(e.target.textContent);
    setLinkSave("ok");
  };

  return (
    <>
      {render && (
        <Wrap>
          <div>코멘션을 받고 싶다면, 친구들에게 공유해보세요!</div>
          <div>
            <div ref={Ref} onClick={linkCopy}>
              {process.env.NEXT_PUBLIC_BASEURL + `/form/${email}`}
            </div>
            <button
              onClick={clickButton}
              className={linkSave ? "link-save" : "link-not-save"}
            >
              코멘트 폼 링크 복사
            </button>
          </div>
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
          {comments.map((comment) => (
            <Card text={comment.text} name={comment.name}></Card>
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