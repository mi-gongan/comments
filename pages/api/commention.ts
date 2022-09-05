import { NextApiRequest, NextApiResponse } from "next";

const data = {
  name: "하규원",
  comments: [
    {
      name: "란경",
      text: "일하는 규원은 실행력과 학습 속도가 굉장히 빠릅니다. 이루고자 하는 것을 어떻게든 해내는 마법의 능력을 갖추고 있습니다. 규원은 애정을 갖고 사람을 바라볼 줄 아는 정 많은 사람이기도 합니다. 사람을 사랑하는 규원이 앞으로 어떻게 성장하고 목표를 이뤄낼지, 동료로서 무척 기대됩니다!",
      view: false,
    },
    {
      name: "성훈",
      text: "원큐는 체계적이며 도전적인 사업가입니다. 문제를 해결하는데 있어 조직을 효율적으로 구상하는 법을 잘 알고 있으며, 사람들을 끌어모으는 능력이 있습니다. 원큐와 일하는 시간동안 정말 많은 것을 배웠고, 누군가 스타트업을 하고 싶다면 원큐와 꼭 커피챗을 하는 것을 추천드립니다.",
      view: true,
    },
    {
      name: "예준",
      text: "서울대학교 창업동아리 SV 동기수 활동과 운영진 활동을 통해 1년 동안 함께할 수 있었습니다. 사람을 화려한 이력 몇 줄과 감언이설로 판단하지 않고 그 사람의 본질적인 장점을 정말 잘 통찰합니다. 거침없는 추진력을 통해 조직을 항해시키는 능력 또한 뛰어납니다.",
      view: true,
    },
    {
      name: "호연",
      text: "성장하는 사람, HR에 진심인 사람, 누구보다 자신의 사람을 챙기는 사람입니다. 원큐의 성장을 보며 그리고 도움을 받으며 불필요한 리소스 없이 빠르게 성장할 수 있었습니다. 스타트업씬에서 함께하는 동료로서 존경하고 함께하고 싶고 같이 성장하고 싶습니다. 적어도 이 글을 본 여러분께 원큐라는 사람을 제가 직접 보증합니다. 원큐와 알고지내게 된 것을 축하합니다.",
      view: true,
    },
  ],
};

export type dataType = {
  name: string;

  comments: { name: string; text: string; view: boolean }[];
};

export default (req: NextApiRequest, res: NextApiResponse<dataType>) => {
  res.status(200).json(data);
};
