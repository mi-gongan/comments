import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { fetchUserData } from "../../firebase/firebase";
import { useRecoilValue } from "recoil";
import { emailAtom } from "../../recoil/user";

function DescriptionBox() {
  const [profile, setProfile] = useState({ name: "", img: "" });
  const email = useRecoilValue(emailAtom);

  useEffect(() => {
    if (email) {
      fetchUserData(email).then((res) =>
        //@ts-ignore
        setProfile({ name: res.name, img: res.img })
      );
    }
  }, [email]);

  return (
    <Wrap>
      <div className="description">
        <div className="text">다른 사람들이 써준</div>
        <div className="commention">
          <span>{profile.name}</span>의 코멘션
        </div>
      </div>
      <div className="img">
        <Image alt="profile-img" src={profile.img} width="72" height="72" />
      </div>
    </Wrap>
  );
}

export default DescriptionBox;

const Wrap = styled.div`
  display: flex;
  padding: 10px 10%;
  justify-content: space-between;
  .description {
    margin-top: 8px;
  }
  .text {
    font-weight: 600;
    font-size: 14px;
  }
  .commention {
    font-weight: 600;
    font-size: 22.5px;
    line-height: 35.66px;
    span {
      color: var(--primary-color);
    }
  }
  .img {
    margin-right: 10px;
    width: 72px;
    height: 72px;
    border-radius: 100%;
    border: 3px solid var(--primary-color);
  }
  Img {
    border-radius: 100%;
  }
`;
