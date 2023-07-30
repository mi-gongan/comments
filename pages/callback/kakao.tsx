import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoginResponseType } from "../api/user/login";
import { useSetRecoilState } from "recoil";
import { emailAtom } from "../../src/recoil/user";
import { Service } from "../../src/services";

function Kakao() {
  const router = useRouter();
  const { code: authCode } = router.query;
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const setEmail = useSetRecoilState(emailAtom);

  const getToken = async () => {
    await axios
      .post("/api/user/login", {
        authCode,
      })
      .then((res: { data: LoginResponseType }) => {
        Service.kakao.setAccessToken(res.data.access_token);
        setAccessToken(res.data.access_token);
        setRefreshToken(res.data.refresh_token);
      });
  };

  useEffect(() => {
    if (!authCode) return;
    getToken();
  }, [authCode]);

  useEffect(() => {
    if (!accessToken) return;
    Service.kakao
      .login()
      .then(async (loginInfo: any) => {
        setEmail(loginInfo.kakao_account.email);
        await Service.firebase.setToken(
          loginInfo.kakao_account.email,
          accessToken,
          refreshToken
        );
        Service.firebase
          .assignUser(
            loginInfo.kakao_account.email,
            loginInfo.properties.nickname,
            loginInfo.properties.profile_image
          )
          .then(() => {
            router.push(`/mypage`);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  return <div>Kakao login...</div>;
}

export default Kakao;
