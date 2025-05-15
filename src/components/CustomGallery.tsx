import React from "react";
import { motion, useAnimationFrame } from "framer-motion";

const images = [
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1746626882/edu06_bhkpgw.jpg",
    description: [
      "A formal meeting with dignitaries and students discussing collaborative initiatives and innovative ideas.An engaging session fostering knowledge exchange and professional insights.",
    ],
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1746626882/edu05_vrlgsb.jpg",
    description: ["Felicitating a distinguished guest"],
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1747327887/edu18_c9qdyb.jpg",
    description: ["Seminar On Data Science"],
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1747327887/edu14_voaemo.jpg",
    description: ["Interactive session with the students"],
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1747327887/edu17_z9wnrt.jpg",
    description: ["Showcasing the certifications"],
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1747327887/edu23_lrabqa.jpg",
    description: ["Inauguration of STRATUM24 Hackathon"],
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1747327888/edu13_o8ll31.jpg",
    description: ["Birthday Celebrations with the students"],
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1747327888/edu19_m6ll4b.jpg",
    description: ["Seminar On Artificial Intelligence"],
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1747327888/edu20_gend1k.jpg",
    description: ["Inaugurating the event by igniting the lamp"],
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1747327889/edu16_jr03wm.jpg",
    description: ["Standing along with the NCC Cadets"],
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1747327889/edu09_elet59.jpg",
    description: ["DST meetup at IIT-Delhi"],
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1747327889/edu10_v0uxkf.jpg",
    description: [
      "CSE-Data Science Freshers at Malla Reddy Deemed to be University",
    ],
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1747327889/edu11_kfnhuw.jpg",
    description: ["Problem Solving Session with the students"],
  },
];

const CustomGallery: React.FC = () => {
  // Animation for continuous right-to-left motion
  const [x, setX] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const GRID_WIDTH = 900; // width of one grid
  const NUM_PAIRS = Math.ceil(images.length / 2);

  useAnimationFrame(() => {
    if (!paused) {
      setX((prev) =>
        prev <= -GRID_WIDTH * NUM_PAIRS ? 0 : prev - 0.5
      );
    }
  });

  // Helper to get image/desc index for each grid
  const getIdx = (base: number) => base % images.length;

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-neutral-900 overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onTouchCancel={() => setPaused(false)}
    >
      {/* Continuous horizontal purple line */}
      <div
        className="absolute left-0 right-0 z-20"
        style={{
          top: "50%",
          height: "4px",
          background: "#a855f7", // Tailwind's purple-500
          transform: "translateY(-50%)",
        }}
      />
      <motion.div className="flex" style={{ x }}>
        {[...Array(NUM_PAIRS + 1)].map((_, gridIdx) => {
          // For the last grid, repeat the first pair for seamless looping
          const leftIdx = getIdx(gridIdx * 2);
          const rightIdx = getIdx(gridIdx * 2 + 1);
          return (
            <div
              key={gridIdx}
              className="relative w-[900px] h-[600px] grid grid-cols-2 grid-rows-2 gap-12 mx-4"
            >
              {/* Vertical line to top-left image */}
              <div
                className="absolute z-10 bg-purple-500 w-1"
                style={{
                  left: "calc(25% - 0.125rem)",
                  top: "calc(50% - 50px)",
                  height: "50px",
                }}
              />
              {/* Vertical line to bottom-right image */}
              <div
                className="absolute z-10 bg-purple-500 w-1"
                style={{
                  left: "calc(75% - 0.125rem)",
                  top: "50%",
                  height: "50px",
                }}
              />
              {/* Top-left image */}
              <div className="flex items-center justify-center row-start-1 col-start-1">
                <img
                  src={images[leftIdx].src}
                  alt={`Gallery ${leftIdx}`}
                  className="w-[350px] h-[200px] object-cover"
                />
              </div>
              {/* Top-right description (shows description for bottom-right image) */}
              <div className="flex flex-col items-center justify-end row-start-1 col-start-2 px-8 py-4">
                {images[rightIdx].description.map(
                  (line, idx) => (
                    <div key={idx} className="h-8 flex items-center text-white">
                      {line}
                    </div>
                  )
                )}
              </div>
              {/* Bottom-left description (shows description for top-left image) */}
              <div className="flex flex-col items-center justify-start row-start-2 col-start-1 px-8 py-4">
                {images[leftIdx].description.map((line, idx) => (
                  <div key={idx} className="h-8 flex items-center text-white">
                    {line}
                  </div>
                ))}
              </div>
              {/* Bottom-right image */}
              <div className="flex items-center justify-center row-start-2 col-start-2">
                <img
                  src={images[rightIdx].src}
                  alt={`Gallery ${rightIdx}`}
                  className="w-[350px] h-[200px] object-cover"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CustomGallery;
