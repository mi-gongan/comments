import styled from "styled-components";
import { FontWeightKey, TextType } from "./Text.types";
import { FONT_WEIGHT } from "./Text.constant";

export const Span = styled.span<{ type: TextType }>`
  font-size: ${(props) => props.type.split("-")[1]}px;
  font-weight: ${(props) =>
    FONT_WEIGHT[props.type.split("-")[0] as FontWeightKey]};
`;
