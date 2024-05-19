import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { commentCountAtom } from "@store/comment";
import { emailAtom } from "@store/user";
import CardIcon from "./atoms/CardIcon";
import CardText from "./atoms/CardText";
import Introduce from "./atoms/Introduce";
import { Firebase } from "@libs/firebase";

interface CardPropsType {
  _from: string;
  name: string;
  text: string;
  id: number;
  view: boolean;
  canEdit?: boolean;
  star: boolean;
}

function Card({ _from, name, text, id, view, star, canEdit }: CardPropsType) {
  const [commentCount, setCommentCount] = useRecoilState(commentCountAtom);
  const email = useRecoilValue(emailAtom);
  const [cardState, setCardState] = useState({ show: false, star: false });
  const [erase, setErase] = useState("");
  const [iconShow, setIconShow] = useState({ mypage: "show", notion: "" });
  const router = useRouter();

  useEffect(() => {
    name && setCardState({ ...cardState, show: view, star });
  }, [name]);

  useEffect(() => {
    if (email) {
      Firebase.fetchUserData(email).then((res: any) => {
        res.notion && setIconShow({ ...iconShow, notion: res.notion });
      });
    }
  }, [email]);

  const handleHideComment = () => {
    if (cardState.show === true) {
      Firebase.setCommentView(id, email, false);
      setCardState({ ...cardState, show: false });
    } else {
      Firebase.setCommentView(id, email, true);
      setCardState({ ...cardState, show: true });
    }
  };

  const handleStarComment = () => {
    if (cardState.star === true) {
      Firebase.setCommentStar(id, email, false);
      setCardState({ ...cardState, star: false });
    } else {
      Firebase.setCommentStar(id, email, true);
      setCardState({ ...cardState, star: true });
    }
  };

  // const deleteComment = () => {
  //   deleteRecieveComment(id, email).then(() => {
  //     setErase("ok");
  //     setCommentCount(commentCount - 1);
  //   });
  // };

  const goDetailPage = () => {
    if (!canEdit && !router.pathname.includes("form")) {
      router.push(`/detail/${email}?id=${id}`);
    }
  };

  return (
    <Wrap>
      {!erase && (
        <CardBox
          className="card"
          id={cardState.show ? "" : "true"}
          onClick={goDetailPage}
        >
          <CardText>{text}</CardText>
          <Introduce from={_from} name={name} />
          <CardIcon
            canEdit={canEdit}
            show={cardState.show}
            handleHideComment={handleHideComment}
            star={cardState.star}
            handleStarComment={handleStarComment}
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
