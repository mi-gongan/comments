import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Card from "../src/components/common/Card";
import ReceiveForm from "../src/components/mypage/ReceiveForm";
import {
  commentType,
  fetchReceiveCommentsData,
} from "../src/firebase/firebase";
import { formAtom } from "../src/recoil/form";

function peercomment() {
  const router = useRouter();
  const form = useRecoilValue(formAtom);
  const [render, setRender] = useState("");
  const peerName = form._to.split("@")[0];
  const [comments, setComments] = useState<Array<commentType>>([]);

  useEffect(() => {
    setRender("ok");
    if (!form._to) {
      router.push("/");
    }
    fetchReceiveCommentsData(form._to).then((res) => {
      setComments(res);
    });
  }, []);

  const goMypage = () => {
    router.push("/mypage");
  };
  return (
    <>
      {render && (
        <Wrap>
          <MyCommention>
            <div className="send-image">
              <Image
                alt="send-image"
                src="/assets/send-img.svg"
                width="48"
                height="48"
              />
            </div>
            <div className="send-text">
              <span>{peerName}</span>에게 발송을 완료했어요
            </div>
            <Card
              name={form.name}
              view={true}
              text={form.text}
              id={form.id}
            ></Card>
          </MyCommention>
          <PeerCommention>
            <div className="peer-text">
              <div>다른 사람들이 써준</div>
              <div>
                <span>{peerName}</span>의 코멘션
              </div>
            </div>
          </PeerCommention>
          {comments.map((comment) => {
            if (!comment.view) return;
            return (
              <Card
                key={comment.id}
                id={comment.id}
                text={comment.text}
                name={comment.name}
                view={comment.view}
              ></Card>
            );
          })}
          <Button onClick={goMypage}>나도 코멘션 받기</Button>
        </Wrap>
      )}
    </>
  );
}

export default peercomment;

const Wrap = styled.div``;

const MyCommention = styled.div`
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  .send-image {
    text-align: center;
    margin-top: 31px;
  }
  .send-text {
    margin-top: 12px;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 22px;
    line-height: 26.95px;
    text-align: center;
    span {
      font-weight: 600;
      color: var(--primary-color);
    }
  }
`;

const PeerCommention = styled.div`
  .peer-text {
    margin-top: 18px;
    margin-left: 10%;
    div:nth-child(1) {
      font-size: 14.62px;
      font-weight: 600;
      line-height: 23.18px;
      color: #464646;
    }
    div:nth-child(2) {
      font-size: 22.5px;
      font-weight: 600;
      line-height: 33.5px;
      span {
        color: var(--primary-color);
      }
    }
  }
`;

const Button = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
  height: 35px;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.25);
  text-align: center;
  line-height: 35px;
  width: 200px;
  padding: 10px 20px;
  border-radius: 45px;
  color: white;
`;
