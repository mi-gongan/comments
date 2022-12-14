import { useRouter } from "next/router";
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { emailAtom } from "../../recoil/user";

function Logout() {
  const router = useRouter();
  const setEmail = useSetRecoilState(emailAtom);

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
      success: function (res: any) {
        console.log(res);
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
    <Wrap>
      <div onClick={handleLogout}>๋ก๊ทธ์์</div>
    </Wrap>
  );
}

export default Logout;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  div {
    padding: 10px;
    margin: 10px;
  }
`;
