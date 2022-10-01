import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

interface IntroducePropsType {
  from: string;
  name: string;
}

function Introduce({ from, name }: IntroducePropsType) {
  const router = useRouter();

  const goPeerPage = () => {
    if (router.pathname.includes("/mycomment")) {
      window.open(
        `${process.env.NEXT_PUBLIC_BASEURL}/peercomment/${encodeURIComponent(
          from
        )}`
      );
    } else {
      router.push(
        `${process.env.NEXT_PUBLIC_BASEURL}/peercomment/${encodeURIComponent(
          from
        )}`
      );
    }
  };
  const goNotionPage = () => {
    // if (router.pathname === "/mycomment") {
    //   window.open(
    //     `${process.env.NEXT_PUBLIC_BASEURL}/peercomment/${encodeURIComponent(
    //       from
    //     )}`
    //   );
    // } else {
    //   router.push(
    //     `${process.env.NEXT_PUBLIC_BASEURL}/peercomment/${encodeURIComponent(
    //       from
    //     )}`
    //   );
    // }
  };
  return (
    <Wrap>
      <div className="logo">
        <div className="mypage-logo" onClick={goPeerPage}>
          <Image alt="search" src="/assets/mypage.svg" width="25" height="25" />
        </div>
        {/* {iconShow.notion && (
      <div className="notion-logo" onClick={goNotionPage}>
        <Image
          alt="search"
          src="/assets/notinon.svg"
          width="25"
          height="25"
        />
      </div>
    )} */}
      </div>
      <div className="name">{name}</div>
    </Wrap>
  );
}

export default Introduce;

const Wrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
`;
