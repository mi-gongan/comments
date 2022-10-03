import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import { profileType } from "../../../pages/mypage";
import { sendShare } from "../../services/kakao";
import { matchType } from "../../services/translate";
import CheckBox from "./block/ShareForm/CheckBox";
import CopyBox from "./block/ShareForm/CopyBox";
import FoldingBar from "./block/ShareForm/FoldingBar";
import OpenBar from "./block/ShareForm/OpenBar";
import ShareImg from "./block/ShareForm/ShareImg";
import ShareKakao from "./block/ShareForm/ShareKakao";
import ShareTextBox from "./block/ShareForm/ShareTextBox";

interface ShareFormPropsType {
  profile: profileType;
  email: string;
}

function ShareForm({ profile, email }: ShareFormPropsType) {
  const [linkSave, setLinkSave] = useState("");
  const [relation, setRelation] = useState("동료");
  const [fold, setFold] = useState("");
  const shareImg = `/assets/share_img/share_img_${matchType(relation)}.svg`;
  const linkFormat =
    process.env.NEXT_PUBLIC_BASEURL +
    `/form/${encodeURIComponent(email)}?relation=${matchType(relation)}`;

  const linkCopy = (e: any) => {
    e.preventDefault();
    window.navigator.clipboard.writeText(e.target.textContent);
    setLinkSave("ok");
  };
  const shareKakao = (e: any) => {
    e.preventDefault();
    sendShare(
      profile.name,
      relation,
      shareImg,
      linkFormat,
      "코멘션 적으러 가기"
    );
  };

  const assginRelation = (e: any) => {
    setRelation(e.target.textContent);
  };

  const handleFold = () => {
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
      <CheckBox relation={relation} assginRelation={assginRelation} />
      <ShareImg type={relation} />
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
