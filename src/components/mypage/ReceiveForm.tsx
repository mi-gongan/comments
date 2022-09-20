import React, { useEffect, useState } from "react";
import { commentType, fetchReceiveCommentsData } from "../../firebase/firebase";
import styled from "styled-components";
import Card from "../common/Card";
import { useRecoilState, useRecoilValue } from "recoil";
import { emailAtom } from "../../recoil/user";
import { commentCountAtom } from "../../recoil/comment";

function ReceiveForm() {
  const [comments, setComments] = useState<Array<commentType>>([]);
  const [commentCount, setCommentCount] = useRecoilState(commentCountAtom);
  const email = useRecoilValue(emailAtom);

  useEffect(() => {
    email &&
      fetchReceiveCommentsData(email).then((res: any) => setComments(res));
  }, [email]);
  useEffect(() => {
    comments && setCommentCount(comments.length);
  }, [comments]);

  return (
    <Wrap>
      <div className="number">코멘션 {commentCount}개</div>
      {comments.map((comment) => (
        <Card
          key={comment.id}
          _from={comment._from}
          id={comment.id}
          text={comment.text}
          name={comment.name}
          view={comment.view}
        ></Card>
      ))}
    </Wrap>
  );
}

export default ReceiveForm;

const Wrap = styled.div`
  padding-bottom: 20px;
  .number {
    margin-left: 10%;
    font-weight: 600;
    font-size: 14px;
    color: #828282;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    padding: 0px 20px;
  }
  li {
    list-style: none;
  }
`;
