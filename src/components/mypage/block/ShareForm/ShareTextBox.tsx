import React from "react";
import styled from "styled-components";

function ShareTextBox() {
  return (
    <Wrap>
      나의 소개를 요청하고 싶은
      <br />
      사람과 어떤 관계인가요?
    </Wrap>
  );
}

export default ShareTextBox;

const Wrap = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 130.5%;
  margin-bottom: 17px;
`;
