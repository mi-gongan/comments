import { callbackUrl } from "@utils/kakao";
import { getImg, getMessage } from "@utils/translate";

class KakaoService {
  login = () => {
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
  authorize = () => {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_BASEURL + callbackUrl,
    });
  };
  setAccessToken = (accessToken: string) => {
    window.Kakao.Auth.setAccessToken(accessToken);
  };
  sendShare = (
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
        imageUrl: process.env.NEXT_PUBLIC_BASEURL + getImg(relation, "png"),
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
      serverCallbackArgs: {
        name: name,
        relation: relation,
      },
    });
  };
}

export const Kakao = new KakaoService();
