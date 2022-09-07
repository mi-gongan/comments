import { useRouter } from "next/router";
import React from "react";
import { useSetRecoilState } from "recoil";
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
    <div className="logout" onClick={handleLogout}>
      로그아웃
    </div>
  );
}

export default Logout;
