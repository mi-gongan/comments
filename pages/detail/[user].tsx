import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FloatingButton from "@components/common/FloatingButton";
import DetailBody from "@components/detail/DetailBody";
import DetailHeader from "@components/detail/DetailHeader";
import DefaultHead from "@components/seo/DefaultHead";
import { CommentType, Firebase } from "@libs/firebase";
import { theme } from "@styles/theme";

function Detail() {
  const router = useRouter();
  const { user, id }: any = router.query;
  const [comment, setComment] = useState<CommentType>({
    _from: "",
    _to: "",
    id: 0,
    name: "",
    text: "",
    view: false,
    star: false,
  });
  const linkFormat =
    process.env.NEXT_PUBLIC_BASEURL +
    `/form/${encodeURIComponent(comment._from)}`;

  useEffect(() => {
    user &&
      Firebase.getComment(user, id).then((res: any) => {
        setComment(res);
      });
  }, [user]);

  const goForm = () => {
    router.push(linkFormat);
  };

  return (
    <Wrap>
      <DefaultHead />
      <DetailHeader>{comment.name}</DetailHeader>
      <DetailBody>{comment.text}</DetailBody>
      <FloatingButton handleClick={goForm}>나도 소개글 보내기</FloatingButton>
    </Wrap>
  );
}

export default Detail;

const Wrap = styled.div`
  background-color: ${theme.bg.gray200};
  min-height: 100vh;
`;
