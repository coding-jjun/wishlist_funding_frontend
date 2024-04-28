import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import React, { useState } from "react";
import { Slide } from "@/types/Slide";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import "./custom-swiper.css";

interface Props {
  slides: Slide[];
}

export default function SwiperWithThumbs({ slides }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div>
      {/* 메인 슬라이드 */}
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className={"mainSwiper"}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.key}>{slide.component}</SwiperSlide>
        ))}
      </Swiper>
      {/* 슬라이드 썸네일 */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={"thumbSwiper"}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.key}>{slide.component}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
