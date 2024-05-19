import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Firebase, CommentType } from "@libs/firebase";
import { Card } from "@common";
import { theme } from "@styles/theme";

function PeerCommention() {
  const router = useRouter();
  const { user }: any = router.query;
  const name = user && user.split("@")[0];
  const [comments, setComments] = useState<CommentType[]>([]);
  const [starComments, setStarComments] = useState<CommentType[]>([]);

  useEffect(() => {
    if (user) {
      Firebase.fetchReceiveCommentsData(user).then((res) => {
        const data = res.filter((comment) => comment.view === true);
        const starData = data.filter((comment) => comment.star == true);
        const notStarData = data.filter((comment) => comment.star == false);
        setComments(notStarData);
        setStarComments(starData);
      });
    }
  }, [user]);

  const goCommetion = () => {
    router.push(`/form/${user}`);
  };

  return (
    <Wrap>
      <div className="peer-text">
        <div>다른 사람들이 써준</div>
        <div>
          <span>{name}</span>의 코멘션
        </div>
        <div className="go-write-commetion" onClick={goCommetion}>
          코멘션 쓰러가기
        </div>
      </div>
      <div className="commention">
        {starComments.map((comment) => {
          return (
            <Card
              _from={comment._from}
              key={comment.id}
              id={comment.id}
              text={comment.text}
              name={comment.name}
              view={comment.view}
              star={comment.star}
            ></Card>
          );
        })}
        {comments.map((comment) => {
          return (
            <Card
              _from={comment._from}
              key={comment.id}
              id={comment.id}
              text={comment.text}
              name={comment.name}
              view={comment.view}
              star={comment.star}
            ></Card>
          );
        })}
      </div>
    </Wrap>
  );
}

export default PeerCommention;

const Wrap = styled.div`
  padding-top: 10px;
  padding-bottom: 100px;
  .peer-text {
    margin-top: 18px;
    margin-left: 10%;
    div:nth-child(1) {
      font-size: 14.62px;
      font-weight: 600;
      line-height: 23.18px;
      color: ${theme.text.primary};
    }
    div:nth-child(2) {
      font-size: 22.5px;
      font-weight: 600;
      line-height: 33.5px;
      span {
        color: ${theme.color.primary};
      }
    }
    .go-write-commetion {
      display: flex;
      font-size: 15px;
      font-weight: 500;
      justify-content: flex-end;
      margin-right: 8%;
      position: relative;
      bottom: 25px;
      text-decoration: underline;
      cursor: pointer;
      :hover {
        color: ${theme.color.primary};
      }
    }
  }
`;
