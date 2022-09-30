import React from "react";
import styled from "styled-components";

function NotCommention() {
  return (
    <Wrap>
      아직 받은 코멘션이 없어요
      <br />
      링크를 친구에게 공유해볼까요?
    </Wrap>
  );
}

export default NotCommention;

const Wrap = styled.div`
  padding: 100px 0px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  color: #868686;
`;
