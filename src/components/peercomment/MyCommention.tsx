import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Firebase, CommentType } from "@libs/firebase";
import { emailAtom } from "@store/user";
import { Card } from "@common";
import { theme } from "@styles/theme";

function MyCommention() {
  const router = useRouter();
  const { user }: any = router.query;
  const name = user && user.split("@")[0];
  const [recentComment, setRecentComment] = useState<Array<CommentType>>([]);
  const email = useRecoilValue(emailAtom);

  useEffect(() => {
    if (user) {
      Firebase.fetchRecentCommentsData(email, user).then((res) => {
        setRecentComment(res);
      });
    }
  }, [user]);

  return (
    <>
      {recentComment[0] && (
        <Wrap>
          <div className="send-image">
            <Image
              alt="send-image"
              src="/assets/send-img.svg"
              width="48"
              height="48"
            />
          </div>
          <div className="send-text">
            <span>{name}</span>에게 발송을 완료했어요
          </div>
          <Card
            _from={recentComment[0]._from}
            name={recentComment[0]?.name}
            view={true}
            text={recentComment[0]?.text}
            id={recentComment[0]?.id}
            star={recentComment[0]?.star}
          ></Card>
        </Wrap>
      )}
    </>
  );
}

export default MyCommention;

const Wrap = styled.div`
  background-color: white;
  padding-top: 20px;
  padding-bottom: 10px;
  .send-image {
    text-align: center;
    margin-top: 31px;
  }
  .send-text {
    margin-top: 12px;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 22px;
    line-height: 26.95px;
    text-align: center;
    span {
      font-weight: 600;
      color: ${theme.color.primary};
    }
  }
`;
