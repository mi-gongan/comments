import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { deleteRecieveComment, setCommentView } from "../../firebase/firebase";
import { commentCountAtom } from "../../recoil/comment";
import { emailAtom } from "../../recoil/user";

interface CardPropsType {
  name: string;
  text: string;
  id: number;
  view: boolean;
}

function Card({ name, text, id, view }: CardPropsType) {
  const [commentCount, setCommentCount] = useRecoilState(commentCountAtom);
  const email = useRecoilValue(emailAtom);
  const [show, setShow] = useState(false);
  const [erase, setErase] = useState("");
  const [canEdit, setCanEdit] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.split("/")[1] === "mypage") {
      setCanEdit("show");
    }
  }, [router]);

  useEffect(() => {
    name && setShow(view);
  }, [name]);

  const showComment = () => {
    setCommentView(id, email, true);
    setShow(true);
  };

  const hideComment = () => {
    setCommentView(id, email, false);
    setShow(false);
  };

  const deleteComment = () => {
    deleteRecieveComment(id, email).then(() => {
      setErase("ok");
      setCommentCount(commentCount - 1);
    });
  };
  return (
    <>
      {!erase && (
        <Wrap>
          <div className="card" id={show ? "" : "true"}>
            <div className="text">{text}</div>
            <div className="introduce">
              <div className="name">{name}</div>
            </div>
            {canEdit && (
              <>
                {show ? (
                  <div className="hide" onClick={hideComment}>
                    숨기기
                  </div>
                ) : (
                  <div onClick={showComment} className="show">
                    보이기
                  </div>
                )}
                <div className="delete" onClick={deleteComment}>
                  지우기
                </div>
              </>
            )}
          </div>
        </Wrap>
      )}
    </>
  );
}

export default Card;

const Wrap = styled.div`
  max-width: 420px;
  height: 270px;
  margin: 0 auto;
  #true {
    opacity: 0.2;
  }
  .card {
    height: 200px;
    box-shadow: 0px 0px 7.60246px rgba(0, 0, 0, 0.11);
    border-radius: 19.3559px;
    padding: 30px;
    margin: 10px;
    position: relative;
    .text {
      height: 180px;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      overflow: scroll;
    }
    .introduce {
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;
      .name {
        font-size: 18px;
        font-weight: 600;
      }
    }
    .hide {
      position: absolute;
      top: 20px;
      right: 30px;
    }
    .show {
      position: absolute;
      top: 20px;
      right: 30px;
    }
    .delete {
      position: absolute;
      top: 50px;
      right: 30px;
    }
  }
  .card ::-webkit-scrollbar {
    display: none;
  }
`;
