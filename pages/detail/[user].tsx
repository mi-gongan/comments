import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FloatingButton from "../../src/components/common/FloatingButton";
import DetailBody from "../../src/components/detail/DetailBody";
import DetailHeader from "../../src/components/detail/DetailHeader";
import { commentType, getComment } from "../../src/firebase/firebase";

function Detail() {
  const router = useRouter();
  const { user, id }: any = router.query;
  const [comment, setComment] = useState<commentType>({
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
      getComment(user, id).then((res: any) => {
        setComment(res);
      });
  }, [user]);

  const goForm = () => {
    router.push(linkFormat);
  };

  return (
    <Wrap>
      <Head>
        <title>commention</title>
        <link rel="icon" href="/assets/logo.png" />
        <meta property="og:title" content="commention" />
        <meta property="og:description" content="서로 코멘션을 남겨봐요" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASEURL} />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_BASEURL + "/assets/logo.png"}
        />
      </Head>
      <DetailHeader>{comment.name}</DetailHeader>
      <DetailBody>{comment.text}</DetailBody>
      <FloatingButton handleClick={goForm}>나도 소개글 보내기</FloatingButton>
    </Wrap>
  );
}

export default Detail;

const Wrap = styled.div`
  background-color: #f3f3f3;
  min-height: 100vh;
`;
