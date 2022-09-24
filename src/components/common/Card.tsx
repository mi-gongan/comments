import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { deleteRecieveComment, setCommentView } from "../../firebase/firebase";
import { commentCountAtom } from "../../recoil/comment";
import { emailAtom } from "../../recoil/user";

interface CardPropsType {
  _from: string;
  name: string;
  text: string;
  id: number;
  view: boolean;
}

function Card({ _from, name, text, id, view }: CardPropsType) {
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
  const goPeerPage = () => {
    router.push(`/peercomment/${encodeURIComponent(_from)}`);
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
            <div>
              {canEdit && (
                <>
                  {show ? (
                    <div className="show" onClick={hideComment}>
                      <Image
                        alt="search"
                        src="/assets/hide.svg"
                        width="30"
                        height="30"
                      />
                    </div>
                  ) : (
                    <div onClick={showComment} className="hide">
                      <Image
                        alt="search"
                        src="/assets/hide.svg"
                        width="30"
                        height="30"
                      />
                    </div>
                  )}
                  {/* <div className="delete" onClick={deleteComment}>
                    지우기
                  </div> */}
                </>
              )}
            </div>
            <div className="mypage-logo" onClick={goPeerPage}>
              <Image
                alt="search"
                src="/assets/mypage.svg"
                width="25"
                height="25"
              />
            </div>
          </div>
        </Wrap>
      )}
    </>
  );
}

export default Card;

const Wrap = styled.div`
  max-width: 450px;
  height: 270px;
  margin: 0 auto;
  #true {
    background-color: white;
    opacity: 0.2;
    .hide {
      opacity: 0.2;
    }
    .mypage-logo {
      opacity: 0.2;
    }
  }
  .card {
    height: 200px;
    box-shadow: 0px 0px 7.60246px rgba(0, 0, 0, 0.11);
    border-radius: 19.3559px;
    padding: 30px;
    margin: 23px;
    position: relative;
    background-color: white;
    .text {
      height: 170px;
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
      right: 20px;
    }
    .show {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    .delete {
      position: absolute;
      top: 50px;
      right: 20px;
    }
    .mypage-logo {
      position: absolute;
      bottom: 24px;
      left: 24px;
      opacity: 0.7;
    }
  }
  .card ::-webkit-scrollbar {
    display: none;
  }
`;
