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
