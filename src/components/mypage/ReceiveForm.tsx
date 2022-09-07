import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { commentType } from "../../firebase/firebase";
import styled from "styled-components";
import Card from "../common/Card";

interface ReceiveFormPropsType {
  comments: commentType[];
}

function ReceiveForm({ comments }: ReceiveFormPropsType) {
  console.log(comments);
  const onDragEnd = () => {};
  return (
    <Wrap>
      <div className="number">코멘션 {comments.length}개</div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="cards">
          {(provided) => (
            <ul
              className="cards"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {comments.map((comment, idx) => (
                <Draggable
                  key={comment.id}
                  draggableId={comment.text}
                  index={idx}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <Card text={comment.text} name={comment.name}></Card>
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
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
