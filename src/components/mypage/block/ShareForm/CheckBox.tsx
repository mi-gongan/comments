import React from "react";
import styled from "styled-components";
import CheckButton, { CheckPropsType } from "../../atom/CheckBox/CheckButton";

function CheckBox({ relation, assginRelation }: CheckPropsType) {
  const relationArray = ["동료", "가족", "친구", "연인", "기타"];
  return (
    <Wrap>
      <RelationBox>
        {relationArray.map((res: string, index: number) => (
          <CheckButton
            key={index}
            relation={relation}
            assginRelation={assginRelation}
          >
            {res}
          </CheckButton>
        ))}
      </RelationBox>
    </Wrap>
  );
}

export default CheckBox;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const RelationBox = styled.div`
  display: flex;
  width: 300px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 19px;
`;
