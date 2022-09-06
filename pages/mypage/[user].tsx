import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Carousel from "../../src/components/common/Carousel";
import { emailAtom } from "../../src/recoil/user";

function Mypage() {
  const router = useRouter();
  const { user } = router.query;
  const [email, setEmail] = useRecoilState(emailAtom);
  const [profile, setProfile] = useState({ name: "", img: "" });
  const [render, setRender] = useState("");
  const Ref = useRef<any>();

  useEffect(() => {
    if (user && user !== email) {
      alert("본인의 프로필이 아닙니다.");
      router.push("/");
    }
  }, [render, user]);

  useEffect(() => {
    if (email) {
      console.log(user, email);
      setRender("ok");
      fetchProfile();
    } else {
      router.push("/");
    }
  }, []);

  const handleLogout = () => {
    try {
      kakaoExit();
      setEmail("");
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProfile = () => {
    window.Kakao.API &&
      window.Kakao.API.request({
        url: "/v1/api/talk/profile",
        success: function (response: any) {
          setProfile({
            name: response.nickName,
            img: response.profileImageURL,
          });
        },
        fail: function (error: any) {
          console.log(error);
        },
      });
  };

  const kakaoExit = () => {
    window.Kakao.API.request({
      url: "/v1/user/unlink",
      success: function (response: any) {
        console.log(response);
      },
      fail: function (error: any) {
        console.log(error);
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
  };

  return (
    <>
      {render && (
        <Wrap>
          <div className="profile">
            {profile.img && (
              <Image
                alt="profile-img"
                src={profile.img}
                width="100"
                height="100"
              />
            )}
            <div>이름 : {profile?.name}</div>
          </div>
          <button onClick={clickButton}>코멘트 폼 링크 복사</button>
          <div ref={Ref} style={{ display: "none" }} onClick={linkCopy}>
            {process.env.NEXT_PUBLIC_BASEURL + `/form/${email}`}
          </div>
          <Carousel></Carousel>
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
