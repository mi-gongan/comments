import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { commentType, fetchReceiveCommentsData } from "../../firebase/firebase";
import Card from "../common/Card";

function PeerCommention() {
  const router = useRouter();
  const { user }: any = router.query;
  const name = user && user.split("@")[0];
  const [comments, setComments] = useState<Array<commentType>>([]);

  useEffect(() => {
    if (user) {
      fetchReceiveCommentsData(user).then((res) => {
        setComments(res);
      });
    }
  }, [user]);

  return (
    <Wrap>
      <div className="peer-text">
        <div>다른 사람들이 써준</div>
        <div>
          <span>{name}</span>의 코멘션
        </div>
      </div>
      {comments.map((comment) => {
        if (!comment.view) return;
        return (
          <Card
            _from={comment._from}
            key={comment.id}
            id={comment.id}
            text={comment.text}
            name={comment.name}
            view={comment.view}
          ></Card>
        );
      })}
    </Wrap>
  );
}

export default PeerCommention;

const Wrap = styled.div`
  padding-top: 10px;
  .peer-text {
    margin-top: 18px;
    margin-left: 10%;
    div:nth-child(1) {
      font-size: 14.62px;
      font-weight: 600;
      line-height: 23.18px;
      color: #464646;
    }
    div:nth-child(2) {
      font-size: 22.5px;
      font-weight: 600;
      line-height: 33.5px;
      span {
        color: var(--primary-color);
      }
    }
  }
`;
