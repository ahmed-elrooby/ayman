"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { graphicProjects } from "./projectData";

const ProjectsPage = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* ===== Header ===== */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <span className="inline-block mb-4 text-[--main-color] text-sm font-semibold uppercase px-4 py-2 rounded-full bg-[--main-color]/10">
          Creative Portfolio
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[--main-color] to-purple-600 bg-clip-text text-transparent">
          Graphic Projects
        </h1>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          A collection of graphic designs showcasing creativity and visual
          identity.
        </p>
      </div>

      {/* ===== Slider Wrapper ===== */}
      <div className="max-w-7xl mx-auto relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          centeredSlides
          grabCursor
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 20,
            depth: 140,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Autoplay, EffectCoverflow]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {graphicProjects.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.05}>
                <div
                  className={`relative overflow-hidden rounded-2xl transition-all duration-500
                    ${
                      activeIndex === index
                        ? "ring-4 ring-[--main-color] scale-105"
                        : "ring-2 ring-gray-300 dark:ring-gray-700 opacity-80"
                    }
                  `}
                >
                  <div className="relative h-[450px] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title || "Graphic Project"}
                      fill
                      className="object-cover transition-transform duration-700"
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Active Indicator */}
                  {activeIndex === index && (
                    <span className="absolute top-4 right-4 w-3 h-3 bg-[--main-color] rounded-full animate-pulse"></span>
                  )}
                </div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {graphicProjects.map((_, index) => (
            <span
              key={index}
              className={`transition-all duration-300 rounded-full
                ${
                  activeIndex === index
                    ? "w-8 h-2 bg-[--main-color]"
                    : "w-2 h-2 bg-gray-300"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="mt-12 text-center text-gray-600 dark:text-gray-300">
        <span className="text-2xl font-bold text-[--main-color]">
          {activeIndex + 1}
        </span>
        <span className="mx-2">/</span>
        <span>{graphicProjects.length}</span>
        <span className="ml-2">Projects</span>
      </div>
    </div>
  );
};

export default ProjectsPage;
