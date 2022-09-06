export const kakaoLogin = () => {
  window.Kakao.Auth.login({
    success: function (response: any) {
      console.log(response);
    },
    fail: function (error: any) {
      console.log(error);
    },
  });
};

export const kakaoLogout = () => {
  if (!window.Kakao.Auth.getAccessToken()) {
    throw "Not logged in.";
  }
  window.Kakao.Auth.logout(function () {
    console.log(window.Kakao.Auth.getAccessToken());
  });
};

export const kakaoExit = () => {
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
