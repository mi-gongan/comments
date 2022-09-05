import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import axios from "axios";
import { dataType } from "../../../pages/api/commention";
import Card from "./Card";

function Carousel() {
  const [render, setRender] = useState("");
  const [comments, setComments] = useState<dataType["comments"]>([]);
  const [firstComment, setFirstComment] = useState({ name: "", text: "" });

  const commentFetch = async () => {
    const data = await axios.post("/api/commention");
    // @ts-ignore
    setComments(data.data.comments);
    if (data.data.comments.length > 0) setFirstComment(data.data.comments[0]);
  };

  useEffect(() => {
    setRender("ok");
    commentFetch();
  }, []);

  return (
    <>
      {render && (
        <Wrap>
          <StyleSlider {...settings}>
            <Card name={firstComment.name} text={firstComment.text}></Card>
            {comments.map((comment, idx) => {
              if (idx === 0) return;
              return (
                <Card key={idx} name={comment.name} text={comment.text}></Card>
              );
            })}
          </StyleSlider>
        </Wrap>
      )}
    </>
  );
}

export default Carousel;

const Wrap = styled.div`
  width: 100%;
  padding-top: 40px;
`;

const settings = {
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  useCSS: true,
  appendDots: (dots: any) => (
    <div
      style={{
        width: "100%",
        position: "absolute",
        bottom: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul> {dots} </ul>
    </div>
  ),
  dotsClass: "dots_custom",
  responsive: [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
};

const StyleSlider = styled(Slider)`
  margin: auto;
  width: 90%;
  position: relative;
  bottom: 20px;
  /* Arrows */
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 30px;
    height: 30px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 30px;
    line-height: 1;

    opacity: 0.75;
    color: #c6c6c6;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: -30px;
  }
  [dir="rtl"] .slick-prev {
    right: -30px;
    left: auto;
  }
  .slick-prev:before {
    content: "←";
  }
  [dir="rtl"] .slick-prev:before {
    content: "→";
  }

  .slick-next {
    right: -30px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: -30px;
  }
  .slick-next:before {
    content: "→";
  }
  [dir="rtl"] .slick-next:before {
    content: "←";
  }

  /* Dots */

  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    justify-content: center;
    margin: auto;
    padding: 0;
  }

  .dots_custom ul {
    padding-inline-start: 0px;
  }
  .dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 6px;
    padding: 0;
  }

  .dots_custom li button {
    border: none;
    background: #d1d1d1;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 6px;
    width: 24px;
    border-radius: 5px;
    padding: 0;
  }

  .dots_custom li.slick-active button {
    background-color: blue;
  }
`;
