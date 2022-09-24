import React, { useEffect, useState } from "react";
import {
  commentType,
  fetchReceiveCommentsData,
  fetchUpdateCommentsData,
} from "../../firebase/firebase";
import styled from "styled-components";
import Card from "../common/Card";
import { useRecoilState, useRecoilValue } from "recoil";
import { emailAtom } from "../../recoil/user";
import { commentCountAtom } from "../../recoil/comment";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

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

  const handleChange = (result: DropResult) => {
    if (!result.destination) return;
    const items = [...comments];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    fetchUpdateCommentsData(
      email,
      comments[result.destination.index],
      comments[result.source.index]
    );
    setComments(items);
  };

  return (
    <Wrap>
      <div className="number">코멘션 {commentCount}개</div>
      <DragDropContext onDragEnd={handleChange}>
        <Droppable droppableId="comments">
          {(provided) => (
            <div
              className="comments"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {comments.map((comment, index) => (
                <Draggable
                  key={comment.id}
                  draggableId={String(comment.id)}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <Card
                        _from={comment._from}
                        id={comment.id}
                        text={comment.text}
                        name={comment.name}
                        view={comment.view}
                      ></Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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
