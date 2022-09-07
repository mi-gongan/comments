import { async } from "@firebase/util";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { assignUser } from "../src/firebase/firebase";
import { emailAtom } from "../src/recoil/user";

function login() {
  const setEmail = useSetRecoilState(emailAtom);
  const router = useRouter();

  useEffect(() => {
    window.Kakao.API &&
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: function (response: any) {
          setEmail(response.kakao_account.email);
          console.log(response);
          assignUser(
            response.kakao_account.email,
            response.properties.nickname,
            response.properties.profile_image
          ).then(() => {
            router.push(`/mypage`);
          });
          console.log(response);
        },
        fail: function (error: any) {
          console.log(error);
        },
      });
  }, [window]);

  return <div>login 중입니다...</div>;
}

export default login;
