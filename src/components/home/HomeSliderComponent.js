"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Images = [
  { id: 1, src: "/images/HomeSliders/slider-1.png" },
  { id: 2, src: "/images/HomeSliders/slider-2.png" },
  { id: 3, src: "/images/HomeSliders/slider-3.png" },
  { id: 3, src: "/images/HomeSliders/slider-4.png" },
  { id: 3, src: "/images/HomeSliders/slider-5.png" },
];

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        position: "absolute",
        left: "5%",
        top: "50%",
        transform: 'translateY(-50%) scale(2.5)',
        zIndex: 1,
        opacity: 1
      }}
      onClick={onClick}
    ></Box>
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        position: "absolute",
        right: "5%",
        top: "50%",
        transform: "scale(2.5)",
        zIndex: 1,
        opacity: 1
      }}
      onClick={onClick}
    >
    </Box>
  );
}

export default function HomeSliderComponent() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Box>
      <Slider {...sliderSettings}>
        {Images.map((item) => (
          <Box key={item.id}>
            <img
              src={item.src}
              alt="slider-img"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
