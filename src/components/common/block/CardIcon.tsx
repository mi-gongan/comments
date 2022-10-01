import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface CardIconPropsType {
  canEdit?: boolean;
  show: boolean;
  handleHideComment: () => void;
}

function CardIcon({ canEdit, handleHideComment, show }: CardIconPropsType) {
  return (
    <Wrap>
      {canEdit && (
        <>
          <div className="hide-icon" onClick={handleHideComment}>
            <Image
              alt="search"
              src={`/assets/hide-${show ? "off" : "on"}.svg`}
              width="30"
              height="30"
            />
          </div>
          {/* <div className="hide-icon" onClick={handleHideComment}>
            <Image
              alt="search"
              src={`/assets/hide-${show ? "off" : "on"}.svg`}
              width="30"
              height="30"
            />
          </div> */}
        </>
      )}
    </Wrap>
  );
}

export default CardIcon;

const Wrap = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
