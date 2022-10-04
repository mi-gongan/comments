import { getImg } from "./translate";

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

export const getMessage = (relation: string) => {
  switch (relation) {
    case "동료":
      return "일을 하는 곳에서의 나는 어떤 사람인가요? 나의 모습을 소개해주세요!";
    case "가족":
      return "가정에서 나는 어떤 사람인가요? 가족으로 보는 나의 모습을 소개해주세요!";
    case "친구":
      return "친구로서 보는 나는 어떤 사람인가요? 나의 모습을 소개해주세요!";
    case "연인":
      return "나는 어떤 연인인가요? 연인으로서 보는 나의 모습을 소개해주세요!";
    default:
      return "나는 어떤 사람인가요? 당신이 알고있는 나의 모습을 소개해주세요!";
  }
};
