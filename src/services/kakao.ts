import { getImg, getMessage } from "./translate";

export const kakaoLogin = () => {
  return new Promise((resolve, reject) => {
    window.Kakao.API &&
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: function (res: any) {
          resolve(res);
        },
        fail: function (error: any) {
          reject(error);
        },
      });
  });
};

export const setKaKaoToken = () => {
  return new Promise((resolve, reject) => {
    window.Kakao.Auth.login({
      success: function (response: any) {
        window.Kakao.Auth.setAccessToken(response.access_token);
        resolve(response);
      },
      fail: function (error: any) {
        console.log(error);
        reject(error);
      },
    });
  });
};

export const sendShare = (
  name: string,
  relation: string,
  link: string,
  buttonTitle: string
) => {
  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: `${name}님의 코맨션 적으러 가기`,
      description: getMessage(relation),
      imageUrl: getImg(relation),
      link: {
        mobileWebUrl: link,
        webUrl: link,
      },
    },
    buttons: [
      {
        title: buttonTitle,
        link: {
          mobileWebUrl: link,
          webUrl: link,
        },
      },
    ],
  });
};
