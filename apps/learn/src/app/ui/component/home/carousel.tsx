'use client'


export interface HomeCarouselProps {
  slideHeight?: string;
  slideWidth?: string;
}


import React from "react";
import Slider from "react-slick";
import {kalam} from '@/app/ui/fonts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function HomeCarousel({slideHeight, slideWidth}: HomeCarouselProps) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <CarouselItem 
        title="Featured Product #1"
        text="Showcase a highly persuasive products here."
        slideWidth={slideWidth}
        slideHeight={slideHeight}
      />
      <CarouselItem 
        title="Featured Services #2"
        text="Showcase a high quality services too in here."
        slideWidth={slideWidth}
        slideHeight={slideHeight}
      />
      <CarouselItem 
        title="What's on the news! s#3"
        text="Get a news? Tell 'em."
        slideWidth={slideWidth}
        slideHeight={slideHeight}
      />
      <CarouselItem 
        title="Upcoming event! s#4"
        text="Invite more peoples from here."
        slideWidth={slideWidth}
        slideHeight={slideHeight}
      />
    </Slider>
  );
}

export interface CarouselItemProps {
  title?: string;
  text?: string;
  slideWidth: string | undefined;
  slideHeight: string | undefined;
} 

export function CarouselItem({title, text, slideWidth, slideHeight}: CarouselItemProps ) {

  return (
    <div 
      className={`
        ${slideHeight && `h-[300px]`} 
        ${slideWidth && `w-[${slideWidth}]`} 
        bg-red p-6
        place-content-center
      `}
    >
        <h3 className={`${kalam.className} text-white text-4xl text-center`}>
          {title}
        </h3>
        <p className="text-sm text-center text-white text-lg">
          {text}
        </p>
      </div>
  )
}
