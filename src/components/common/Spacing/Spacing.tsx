import React, { memo } from "react";
import Layout from "../Layout";

interface Props {
  size: number;
  direction?: "row" | "column";
}

const Spacing = ({ direction = "column", size }: Props) => {
  return direction === "row" ? (
    <Layout.FlexRow w={size} />
  ) : (
    <Layout.FlexCol h={size} />
  );
};

export default memo(Spacing);
