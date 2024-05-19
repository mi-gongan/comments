import styled, { css } from "styled-components";
import { LayoutBase } from "./LayoutBase";

type AbsoluteStyle = {
  flexDirection?: "row" | "column";
  b?: number | string;
  t?: number | string;
  l?: number | string;
  r?: number | string;
};

export const Absolute = styled(LayoutBase)<AbsoluteStyle>`
  position: absolute;
  ${({ b, t, l, r, flexDirection }) => css`
    flex-direction: ${flexDirection || "column"};
    bottom: ${b};
    top: ${t};
    left: ${l};
    right: ${r};
  `}
`;
