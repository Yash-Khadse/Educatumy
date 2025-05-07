import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://res.cloudinary.com/delaezg4a/image/upload/v1746624261/lord-of-the-mysteries-new-promotional-poster_utsywh.avif",
  "https://res.cloudinary.com/delaezg4a/image/upload/v1746624261/lord-of-the-mysteries-new-promotional-poster_utsywh.avif",
  "https://source.unsplash.com/9z-veIxii6k/900x900",
  "https://source.unsplash.com/AwnggmGaFms/900x900",
  "https://source.unsplash.com/Bi0atWiKP-4/900x900",
  "https://source.unsplash.com/YeOMRwgvPv4/900x900",
  "https://res.cloudinary.com/delaezg4a/image/upload/v1746624261/lord-of-the-mysteries-new-promotional-poster_utsywh.avif",
  "https://source.unsplash.com/mNOaXIjJkok/900x900",
  "https://source.unsplash.com/pz_hAv6ER7c/900x900",
  "https://source.unsplash.com/oqmIM9bkAWQ/900x900",
  "https://source.unsplash.com/Sjk38bu7VXg/900x900",
  "https://source.unsplash.com/9jsV5uKbAEM/900x900",
  "https://source.unsplash.com/CgR5CX2j0mc/900x900",
  "https://source.unsplash.com/aAmYwM9dHUM/900x900",
  "https://source.unsplash.com/yN7prWLW7xg/900x900",
];

const GalleryCarousel: React.FC = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: "linear",
    infinite: true,
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // small tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // mobile phones
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div id="gallery" style={{ margin: "1rem" }}>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img
              src={src}
              alt={`Gallery ${idx}`}
              style={{ margin: "0.2rem", width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GalleryCarousel;
