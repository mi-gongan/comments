import React, { useEffect, useState } from "react";
import { commentType, fetchReceiveCommentsData } from "../../firebase/firebase";
import styled from "styled-components";
import Card from "../common/Card";
import { useRecoilValue } from "recoil";
import { emailAtom } from "../../recoil/user";

function ReceiveForm() {
  const [comments, setComments] = useState<Array<commentType>>([]);
  const email = useRecoilValue(emailAtom);

  useEffect(() => {
    console.log(email);
    email &&
      fetchReceiveCommentsData(email).then((res: any) => setComments(res));
  }, [email]);

  return (
    <Wrap>
      <div className="number">코멘션 {comments.length}개</div>
      {comments.map((comment) => (
        <Card key={comment.id} text={comment.text} name={comment.name}></Card>
      ))}
    </Wrap>
  );
}

export default ReceiveForm;

const Wrap = styled.div`
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
