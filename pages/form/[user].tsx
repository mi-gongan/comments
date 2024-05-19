import { NextPage } from "next";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Commention from "@components/form/Commention";
import FormHead from "@components/seo/FormHead";

interface FormPropsType {
  user: string;
  relation: string;
}

const Form: NextPage<FormPropsType> = ({ user, relation }: FormPropsType) => {
  return (
    <Wrap>
      <FormHead relation={relation} user={user} />
      <GrobalStyled />
      <Commention></Commention>
    </Wrap>
  );
};

Form.getInitialProps = (context) => {
  const query = context.query;
  const relation = String(query.relation);
  const user = String(query.user);
  return { relation, user };
};

export default Form;

const Wrap = styled.div`
  padding-top: 50px;
`;

const GrobalStyled = createGlobalStyle`
  body{
    background-color: white;
  }
`;
