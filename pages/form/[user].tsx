import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Commention from "../../src/components/form/Commention";
import FormHead from "../../src/components/seo/FormHead";

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

Form.getInitialProps = async (
  context: NextPageContext
): Promise<FormPropsType> => {
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
