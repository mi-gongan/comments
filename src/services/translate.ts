export const matchType = (type: string) => {
  switch (type) {
    case "동료":
      return "peer";
    case "가족":
      return "family";
    case "친구":
      return "friend";
    case "연인":
      return "couple";
    case "기타":
      return "etc";
  }
};

export const getImg = (relation: string) => {
  switch (relation) {
    case "동료":
      return "/assets/share_img_peer.svg";
    case "가족":
      return "/assets/share_img_family.svg";
    case "친구":
      return "/assets/share_img_friend.svg";
    case "연인":
      return "/assets/share_img_couple.svg";
    default:
      return "/assets/share_img_etc.svg";
  }
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
