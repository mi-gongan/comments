import React from "react";
import styled from "styled-components";

interface CardPropsType {
  name: string;
  text: string;
}

function Card({ name, text }: CardPropsType) {
  return (
    <Wrap>
      <div className="card">
        <div className="text">{text}</div>
        <div className="name">{name}</div>
      </div>
    </Wrap>
  );
}

export default Card;

const Wrap = styled.div`
  max-width: 360px;
  height: 320px;
  margin: 0 auto;
  .card {
    height: 200px;
    box-shadow: 0px 4px 7.60246px rgba(0, 0, 0, 0.11);
    border-radius: 19.3559px;
    padding: 30px;
    position: relative;
  }
  .text {
    font-size: 14px;
    font-weight: 400;
    line-height: 27px;
  }
  .name {
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    right: 30px;
    bottom: 40px;
  }
`;
