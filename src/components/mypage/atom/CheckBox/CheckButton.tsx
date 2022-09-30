import React, { Children } from "react";
import styled from "styled-components";

export interface CheckPropsType {
  relation: string;
  assginRelation: (e: any) => void;
}

interface ButtonPropsType {
  children: React.ReactNode;
}

function CheckButton({
  relation,
  assginRelation,
  children,
}: CheckPropsType & ButtonPropsType) {
  return (
    <Wrap>
      <div
        className={relation === children ? "relation-check" : "relation-type"}
        onClick={assginRelation}
      >
        {children}
      </div>
    </Wrap>
  );
}

export default CheckButton;

const Wrap = styled.div`
  padding: 5px;
  .relation-type {
    width: 74px;
    font-size: 14px;
    font-weight: 500;
    height: 29px;
    text-align: center;
    line-height: 29px;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    margin-right: 5px;
  }
  .relation-check {
    width: 74px;
    font-size: 14px;
    font-weight: 500;
    height: 29px;
    text-align: center;
    line-height: 29px;
    border: none;
    border-radius: 5px;
    margin-right: 5px;
    color: white;
    border: 1px solid var(--primary-color);
    background-color: var(--primary-color);
  }
`;
