import React from "react";
import { CommentType } from "@libs/firebase";
import Card from "../../../common/Card";

interface CommentionBoxPropsType {
  comments: Array<CommentType>;
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
