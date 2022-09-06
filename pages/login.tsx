import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { emailAtom } from "../src/recoil/user";

function login() {
  const setEmail = useSetRecoilState(emailAtom);
  const router = useRouter();
  const [render, setRender] = useState("");

  useEffect(() => {
    window.Kakao.API &&
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: function (response: any) {
          setEmail(response.kakao_account.email);
          router.push(`/mypage/${response.kakao_account.email}`);
          console.log(response);
        },
        fail: function (error: any) {
          console.log(error);
        },
      });
  }, [render]);

  useEffect(() => {
    setRender("ok");
  }, []);

  return <div>login 중입니다...</div>;
}

export default login;
