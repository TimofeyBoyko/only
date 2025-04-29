import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { useDeviceContext } from "../../../context/deviceContext";

import NavigationButton from "../navigation-button";

import { TEventProps } from "./Events.types";
import { EventsContainer, EventTitle, EventContainer, EventDescription } from "./Events.styled";

const Events = ({ items }: TEventProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { isMobile } = useDeviceContext();

  useEffect(() => {
    setIsBeginning(true);
    setIsEnd(items.length <= 3);
  }, [items]);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <EventsContainer>
      {isBeginning || isMobile ? null : (
        <NavigationButton
          direction="prev"
          onClick={handlePrevClick}
          disabled={isBeginning}
          ariaLabel="Previous slide"
          isSwiper
        />
      )}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={isMobile ? 25 : 80}
        slidesPerView={isMobile ? 1.5 : 3}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "fraction",
        }}
        parallax
        style={{ width: "100%" }}
      >
        {items.map((event) => (
          <SwiperSlide key={event.id}>
            <EventContainer>
              <EventTitle>{event.year}</EventTitle>
              <EventDescription>{event.description}</EventDescription>
            </EventContainer>
          </SwiperSlide>
        ))}
      </Swiper>
      {isEnd || isMobile ? null : (
        <NavigationButton
          direction="next"
          onClick={handleNextClick}
          disabled={isEnd}
          ariaLabel="Next slide"
          isSwiper
        />
      )}
    </EventsContainer>
  );
};

export default Events;
