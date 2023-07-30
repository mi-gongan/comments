import React from "react";
import { commentType } from "../../../../services/firebase";
import Card from "../../../common/Card";

interface CommentionBoxPropsType {
  comments: Array<commentType>;
  canEdit: boolean;
}

function CommentionBox({ comments, canEdit }: CommentionBoxPropsType) {
  return (
    <>
      {comments.map((comment) => (
        <Card
          key={comment.id}
          _from={comment._from}
          id={comment.id}
          text={comment.text}
          name={comment.name}
          view={comment.view}
          canEdit={canEdit}
          star={comment.star}
        ></Card>
      ))}
    </>
  );
}

export default CommentionBox;
