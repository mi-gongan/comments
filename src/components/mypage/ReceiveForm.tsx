import React, { useEffect, useState } from "react";
import { commentType, fetchReceiveCommentsData } from "../../firebase/firebase";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { commentCountAtom } from "../../recoil/comment";
import { profileType } from "../../../pages/mypage";
import Image from "next/image";
import NotCommention from "./block/ReceiveForm/NotCommention";
import ReceiveTitle from "./block/ReceiveForm/ReceiveTitle";
import CommentionBox from "./block/ReceiveForm/CommentionBox";
import TabBar from "./block/ReceiveForm/TabBar";

interface ReceiveFormPropsType {
  email: string;
  profile: profileType;
}

function ReceiveForm({ email, profile }: ReceiveFormPropsType) {
  const [comments, setComments] = useState<Array<commentType>>([]);
  const [commentCount, setCommentCount] = useRecoilState(commentCountAtom);

  useEffect(() => {
    email &&
      fetchReceiveCommentsData(email).then((res: any) => setComments(res));
  }, [email]);

  useEffect(() => {
    comments && setCommentCount(comments.length);
  }, [comments]);

  return (
    <Wrap>
      <BackgrounImg>
        <Image
          src="/assets/receive_form_background.svg"
          width={278}
          height={158}
        />
      </BackgrounImg>
      <ReceiveTitle name={profile.name} />
      <TabBar img={profile.img} commentCount={commentCount} />
      {comments.length !== 0 ? (
        <CommentionBox comments={comments} />
      ) : (
        <NotCommention />
      )}
    </Wrap>
  );
}

export default ReceiveForm;

const Wrap = styled.div`
  padding-top: 42px;
  padding-bottom: 20px;
  position: relative;
  z-index: 1;
`;

const BackgrounImg = styled.div`
  position: absolute;
  z-index: -1;
  right: 0px;
  top: 0px;
`;
