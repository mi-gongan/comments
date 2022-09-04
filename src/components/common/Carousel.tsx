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
const Wrap = styled.div``;

const StyleSlider = styled(Slider)`
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
