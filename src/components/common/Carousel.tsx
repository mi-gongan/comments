import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    centerMode: true,
    useCSS: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          centerPadding: "70px",
        },
      },
    ],
  };
  return (
    <Wrap>
      <StyleSlider {...settings}>
        <Image
          alt="commention-card"
          src="/assets/comment-card.svg"
          width="300px"
          height="300px"
        ></Image>
        <Image
          alt="commention-card"
          src="/assets/comment-card.svg"
          width="300px"
          height="300px"
        ></Image>
        <Image
          alt="commention-card"
          src="/assets/comment-card.svg"
          width="300px"
          height="300px"
        ></Image>
        <Image
          alt="commention-card"
          src="/assets/comment-card.svg"
          width="300px"
          height="300px"
        ></Image>
        <Image
          alt="commention-card"
          src="/assets/comment-card.svg"
          width="300px"
          height="300px"
        ></Image>
        <Image
          alt="commention-card"
          src="/assets/comment-card.svg"
          width="300px"
          height="300px"
        ></Image>
      </StyleSlider>
    </Wrap>
  );
}

export default Carousel;
const Wrap = styled.div`
  width: 100%;
`;

const StyleSlider = styled(Slider)`
  margin: auto;
  width: 80%;
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
    font-size: 25px;
    line-height: 1;

    opacity: 0.75;
    color: #c6c6c6;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: -25px;
  }
  [dir="rtl"] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: "←";
  }
  [dir="rtl"] .slick-prev:before {
    content: "→";
  }

  .slick-next {
    right: -25px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: -25px;
  }
  .slick-next:before {
    content: "→";
  }
  [dir="rtl"] .slick-next:before {
    content: "←";
  }

  /* Dots */
  .slick-dots {
    position: absolute;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }

  .slick-dots li {
    position: relative;
    display: inline-block;
    padding: 0;
    cursor: pointer;
  }
  .slick-dots li button {
    width: 24px;
    height: 10px;
    display: block;
    border-radius: 5px;
    background-color: #d9d9d9;

    cursor: pointer;
    border: 0;
    outline: none;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
  }
  .slick-dots li button:before {
    font-size: 0;
    line-height: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    background-color: blue;
    width: 24px;
    height: 10px;
    border-radius: 5px;
    font-size: 0;
    line-height: 0;
  }
`;
