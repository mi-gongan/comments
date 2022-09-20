import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Card from "../../src/components/common/Card";
import {
  commentType,
  fetchReceiveCommentsData,
  fetchRecentCommentsData,
} from "../../src/firebase/firebase";
import { emailAtom } from "../../src/recoil/user";

function peercomment() {
  const router = useRouter();
  const { user }: any = router.query;
  const email = useRecoilValue(emailAtom);
  const [render, setRender] = useState("");
  const name = user && user.split("@")[0];
  const [comments, setComments] = useState<Array<commentType>>([]);
  const [recentComment, setRecentComment] = useState<Array<commentType>>([]);

  useEffect(() => {
    setRender("ok");
  }, []);
  useEffect(() => {
    if (user) {
      fetchReceiveCommentsData(user).then((res) => {
        setComments(res);
      });
      fetchRecentCommentsData(email, user).then((res) => {
        setRecentComment(res);
      });
    }
  }, [user]);

  const goMypage = () => {
    router.push("/mypage");
  };
  return (
    <>
      {render && (
        <Wrap>
          {recentComment[0] && (
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
                <span>{name}</span>에게 발송을 완료했어요
              </div>
              <Card
                _from={recentComment[0]._from}
                name={recentComment[0]?.name}
                view={true}
                text={recentComment[0]?.text}
                id={recentComment[0]?.id}
              ></Card>
            </MyCommention>
          )}
          <PeerCommention>
            <div className="peer-text">
              <div>다른 사람들이 써준</div>
              <div>
                <span>{name}</span>의 코멘션
              </div>
            </div>
          </PeerCommention>
          {comments.map((comment) => {
            if (!comment.view) return;
            return (
              <Card
                _from={comment._from}
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
  padding-bottom: 10px;
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
  padding-top: 10px;
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
