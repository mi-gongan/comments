import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { commentCountAtom } from "@store/comment";
import Image from "next/image";
import NotCommention from "./block/ReceiveForm/NotCommention";
import ReceiveTitle from "./block/ReceiveForm/ReceiveTitle";
import CommentionBox from "./block/ReceiveForm/CommentionBox";
import TabBar from "./block/ReceiveForm/TabBar";
import Description from "./block/ReceiveForm/Description";
import { FloatingButton } from "@common";
import { theme } from "@styles/theme";
import { Firebase, CommentType } from "@libs/firebase";
import { ProfileType } from "@types";

interface ReceiveFormPropsType {
  email: string;
  profile: ProfileType;
}

function ReceiveForm({ email, profile }: ReceiveFormPropsType) {
  const [comments, setComments] = useState<Array<CommentType>>([]);
  const [commentCount, setCommentCount] = useRecoilState(commentCountAtom);
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    email &&
      Firebase.fetchReceiveCommentsData(email).then((res: any) =>
        setComments(res)
      );
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
  background-color: ${theme.bg.gray100};
  z-index: 1;
`;

const BackgrounImg = styled.div`
  position: absolute;
  z-index: -1;
  right: 0px;
  top: 0px;
`;
