import React from "react";
import styled from "styled-components";
import CheckButton from "../../atom/CheckBox/CheckButton";
import { relationArray } from "@utils/relation";
import { RelationType } from "@types";

interface CheckBoxProps {
  choosedRelation: RelationType;
  setRelation: React.Dispatch<React.SetStateAction<RelationType>>;
}

function CheckBox({ choosedRelation, setRelation }: CheckBoxProps) {
  return (
    <Wrap>
      <RelationBox>
        {relationArray.map((relation: RelationType, index: number) => (
          <CheckButton
            key={index}
            text={relation}
            checked={choosedRelation === relation}
            handleClick={() => {
              setRelation(relation);
            }}
          />
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
  gap: 10px;
  justify-content: center;
  margin-bottom: 19px;
`;
