import React from "react";
import { commentType } from "../../../../firebase/firebase";
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
        ></Card>
      ))}
    </>
  );
}

export default CommentionBox;
