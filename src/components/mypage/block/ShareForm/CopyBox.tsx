import React, { useRef } from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";

interface CopyBoxPropsType {
  linkFormat: string;
  linkCopy: (e: any) => void;
}

function CopyBox({ linkFormat, linkCopy }: CopyBoxPropsType) {
  const Ref = useRef<any>();
  const clickButton = (e: any) => {
    Ref.current.click();
  };

  return (
    <Wrap>
      <div ref={Ref} onClick={linkCopy} className="email-link">
        {linkFormat}
      </div>
      <button onClick={clickButton} className="copy-button">
        복사
      </button>
    </Wrap>
  );
}

export default CopyBox;

const Wrap = styled.div`
  margin: auto;
  padding: 10px;

  width: 75%;
  height: 40px;
  border: 2px solid ${theme.bg.gray300};
  border-radius: 7px;

  display: flex;
  white-space: nowrap;

  .email-link {
    margin-left: 8px;
    line-height: 40px;
    width: calc(100% - 90px);
    overflow: hidden;
    color: ${theme.text.secondary};
  }
  .copy-button {
    width: 65px;
    height: 40px;
    margin-left: 10px;
    background-color: ${theme.color.primary};

    border-radius: 5px;
    border: none;

    color: white;
    font-size: 15px;
    font-weight: 500;

    cursor: pointer;
  }
`;
