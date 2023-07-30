import React, { useEffect, useState } from "react";
import { commentType, fetchReceiveCommentsData } from "../../services/firebase";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { commentCountAtom } from "../../recoil/comment";
import { profileType } from "../../../pages/mypage";
import Image from "next/image";
import NotCommention from "./block/ReceiveForm/NotCommention";
import ReceiveTitle from "./block/ReceiveForm/ReceiveTitle";
import CommentionBox from "./block/ReceiveForm/CommentionBox";
import TabBar from "./block/ReceiveForm/TabBar";
import Description from "./block/ReceiveForm/Description";
import FloatingButton from "../common/FloatingButton";

interface ReceiveFormPropsType {
  email: string;
  profile: profileType;
}

function ReceiveForm({ email, profile }: ReceiveFormPropsType) {
  const [comments, setComments] = useState<Array<commentType>>([]);
  const [commentCount, setCommentCount] = useRecoilState(commentCountAtom);
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    email &&
      fetchReceiveCommentsData(email).then((res: any) => setComments(res));
  }, [email]);

  useEffect(() => {
    comments && setCommentCount(comments.length);
  }, [comments]);

  const setEdit = () => {
    setCanEdit(false);
  };

  return (
    <Wrap>
      <BackgrounImg>
        <Image
          src="/assets/receive_form_background.png"
          width={278}
          height={158}
        />
      </BackgrounImg>
      <ReceiveTitle name={profile.name} />
      {canEdit && <Description />}
      <TabBar
        img={profile.img}
        commentCount={commentCount}
        setEdit={setCanEdit}
      />
      {comments.length !== 0 ? (
        <CommentionBox comments={comments} canEdit={canEdit} />
      ) : (
        <NotCommention />
      )}
      {canEdit && (
        <FloatingButton handleClick={setEdit}>편집 저장하기</FloatingButton>
      )}
    </Wrap>
  );
}

export default ReceiveForm;

const Wrap = styled.div`
  padding-top: 52px;
  padding-bottom: 20px;
  position: relative;
  background-color: #f0f0f0;
  z-index: 1;
`;

const BackgrounImg = styled.div`
  position: absolute;
  z-index: -1;
  right: 0px;
  top: 0px;
`;
