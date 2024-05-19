import React from "react";
import { TextType } from "./Text.types";
import { Span } from "./Text.styles";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  type: TextType;
  color: string;
  children: React.ReactNode;
}

const Text = ({ type, color, children, ...props }: Props) => {
  return (
    <Span type={type} style={{ color: color, ...props.style }} {...props}>
      {children}
    </Span>
  );
};

export default Text;
