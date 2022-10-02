import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  deleteRecieveComment,
  fetchUserData,
  setCommentView,
} from "../../firebase/firebase";
import { commentCountAtom } from "../../recoil/comment";
import { emailAtom } from "../../recoil/user";
import CardIcon from "./block/CardIcon";
import CardText from "./block/CardText";
import Introduce from "./block/Introduce";

interface CardPropsType {
  _from: string;
  name: string;
  text: string;
  id: number;
  view: boolean;
  canEdit?: boolean;
}

function Card({ _from, name, text, id, view, canEdit }: CardPropsType) {
  const [commentCount, setCommentCount] = useRecoilState(commentCountAtom);
  const email = useRecoilValue(emailAtom);
  const [show, setShow] = useState(false);
  const [erase, setErase] = useState("");
  const [iconShow, setIconShow] = useState({ mypage: "show", notion: "" });

  useEffect(() => {
    name && setShow(view);
  }, [name]);

  useEffect(() => {
    if (email) {
      fetchUserData(email).then((res: any) => {
        res.notion && setIconShow({ ...iconShow, notion: res.notion });
      });
    }
  }, [email]);

  const handleHideComment = () => {
    if (show === true) {
      setCommentView(id, email, false);
      setShow(false);
    } else {
      setCommentView(id, email, true);
      setShow(true);
    }
  };
  const deleteComment = () => {
    deleteRecieveComment(id, email).then(() => {
      setErase("ok");
      setCommentCount(commentCount - 1);
    });
  };

  return (
    <Wrap>
      {!erase && (
        <CardBox className="card" id={show ? "" : "true"}>
          <CardText>{text}</CardText>
          <Introduce from={_from} name={name} />
          <CardIcon
            canEdit={canEdit}
            show={show}
            handleHideComment={handleHideComment}
          />
        </CardBox>
      )}
    </Wrap>
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
  }
`;

const CardBox = styled.div`
  height: 200px;
  box-shadow: 0px 0px 7.60246px rgba(0, 0, 0, 0.11);
  border-radius: 19.3559px;
  padding: 30px;
  margin: 23px;
  position: relative;
  background-color: white;
`;
