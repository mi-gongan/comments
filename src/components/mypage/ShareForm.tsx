import React, { useState } from "react";
import styled from "styled-components";
import { profileType } from "../../../pages/mypage";
import { sendShare } from "../../services/kakao";
import { matchType } from "../../utils/translate";
import CheckBox from "./block/ShareForm/CheckBox";
import CopyBox from "./block/ShareForm/CopyBox";
import FoldingBar from "./block/ShareForm/FoldingBar";
import OpenBar from "./block/ShareForm/OpenBar";
import ShareImg from "./block/ShareForm/ShareImg";
import ShareKakao from "./block/ShareForm/ShareKakao";
import ShareTextBox from "./block/ShareForm/ShareTextBox";
import { RelationType } from "../../types/relation";

interface ShareFormPropsType {
  profile: profileType;
  email: string;
  handleToast: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShareForm({ profile, email, handleToast }: ShareFormPropsType) {
  const [linkSave, setLinkSave] = useState("");
  const [relation, setRelation] = useState<RelationType>(RelationType.동료);
  const [fold, setFold] = useState("");
  const linkFormat =
    process.env.NEXT_PUBLIC_BASEURL +
    `/form/${encodeURIComponent(email)}?relation=${matchType(relation)}`;

  const linkCopy = (e: any) => {
    window.dataLayer.push({ event: "copy-link" });
    e.preventDefault();
    window.navigator.clipboard.writeText(e.target.textContent);
    setLinkSave("ok");
    handleToast(true);
    setTimeout(() => {
      handleToast(false);
    }, 1500);
  };
  const shareKakao = (e: any) => {
    window.dataLayer.push({ event: "kakao-share" });
    e.preventDefault();
    sendShare(profile.name, relation, linkFormat, "코멘션 적으러 가기");
  };

  const handleFold = () => {
    window.dataLayer.push({ event: "fold" });
    if (fold) {
      setFold("");
    } else {
      setFold("ok");
    }
  };

  if (fold) {
    return <OpenBar handleFold={handleFold} />;
  }

  return (
    <Wrap>
      <ShareTextBox />
      <CheckBox setRelation={setRelation} choosedRelation={relation} />
      <ShareImg relation={relation} />
      <CopyBox
        linkCopy={linkCopy}
        linkFormat={linkFormat}
        linkSave={linkSave}
      />
      <ShareKakao shareKakao={shareKakao} />
      <FoldingBar handleFold={handleFold} />
    </Wrap>
  );
}

export default ShareForm;

const Wrap = styled.div`
  padding-top: 10%;
  text-align: center;
  background-color: white;
  padding-bottom: 3px;
`;
