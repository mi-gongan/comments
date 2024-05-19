import styled, { css } from "styled-components";

type BgColor = {
  $bgColor?: string;
};

type Flex = {
  flex?: string;
  $alignItems?: string;
  $justifyContent?: string;
};

type BoxStyle = {
  p?: number;
  ph?: number;
  pv?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  m?: number;
  mh?: number;
  mv?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  w?: string;
  h?: string;
  rounded?: number;
  z?: number;
  outline?: string;
  cursor?: string;
  gap?: number;
};

type Border = {
  border?: string;
};

export const LayoutBase = styled.div<BgColor & Flex & BoxStyle & Border>`
  ${({
    p,
    ph,
    pv,
    pt,
    pr,
    pb,
    pl,
    m,
    mh,
    mv,
    mt,
    mr,
    mb,
    ml,
    w,
    h,
    flex,
    rounded,
    z,
    outline,
    $alignItems = "flex-start",
    $bgColor,
    $justifyContent = "flex-start",
    cursor,
    gap,
  }) => css`
    padding: ${toMarginPaddingString(p, ph, pv, pt, pr, pb, pl)};
    margin: ${toMarginPaddingString(m, mh, mv, mt, mr, mb, ml)};
    width: ${w};
    height: ${h};
    flex: ${flex};
    border-radius: ${rounded}px;
    border-color: ${outline};
    z-index: ${z};
    ${typeof rounded === "number" ? "overflow: hidden;" : ""}
    ${typeof outline === "string"
      ? "border-width: 1px; border-style: solid;"
      : ""}
      display: flex;
    flex-direction: column;
    align-items: ${$alignItems};
    justify-content: ${$justifyContent};
    background-color: ${$bgColor};
    cursor: ${cursor};
    gap: ${gap}px;
  `}
`;

const toMarginPaddingString = (
  base: number | undefined,
  h: number | undefined,
  v: number | undefined,
  t: number | undefined,
  r: number | undefined,
  b: number | undefined,
  l: number | undefined
) => {
  if (base !== undefined) {
    return `${base}px`;
  }
  return `${toPx(h)} ${toPx(v)} ${toPx(t)} ${toPx(r)} ${toPx(b)} ${toPx(l)}`;
};

const toPx = (value: number | undefined) => {
  return value ? `${value}px` : "";
};
