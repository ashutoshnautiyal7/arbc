"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialList from "./TestimonialList";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "They were highly professional in their work. The ITR filing process was smooth. Highly recommend ARBC for quality accounting.",
    name: "Atul Bhatt",
  },
  {
    id: 2,
    text: "Best professional services in town. A person can feel relaxed after engaging the firm for all his professional matters.",
    name: "Manik Gupta",
  },
  {
    id: 2,
    text: "Best place for All Financial & Tax related Services in Powayan region.... Best quality services provided by CA Aryan Rai Bhardwaj sir.",
    name: "Himkar Pandey",
  },
];

const Testimonial = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    afterChange: (current) => setCurrentSlide(current),
  };

  useEffect(() => {
    if (sliderRef.current) {
      setTotalSlides(sliderRef.current.innerSlider.props.children.length - 1);
    }
  }, [sliderRef]);

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section
      id="testimonials"
      className="px-[32px] lg:px-[8rem] py-[3.8rem] lg:py-[5.5rem] flex flex-col font-poppins"
    >
      <h2 className="text-[32px] md:text-[48px] text-center font-semibold text-[#023E62]">
        Client Testimonials
      </h2>
      <div className="mx-auto mt-8">
        <Image
          src={"/Images/arrow.png"}
          width={100}
          height={100}
          className="md:w-[100px] md:h-[100px] w-[70px] h-[70px]"
          alt="##"
        />
      </div>
      <div className="flex items-center mt-4">
        <button onClick={prevSlide} className="" disabled={currentSlide === 0}>
          <MdArrowBackIos
            className={`w-[2.5rem] md:w-[6rem] h-[2.5rem] md:h-[8rem] ${
              currentSlide === 0 ? "text-gray-400" : "text-[#2B7B67]"
            }`}
          />
        </button>
        <div className="w-[75%] sm:w-[80%] md:w-[70%] lg:w-[80%] mx-auto">
          <Slider {...settings} ref={sliderRef} className="">
            {testimonials.map((testimonial) => (
              <TestimonialList key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
        <button
          onClick={nextSlide}
          className=""
          disabled={currentSlide === totalSlides}
        >
          <MdArrowForwardIos
            className={`w-[2.5rem] md:w-[6rem] h-[2.5rem] md:h-[8rem]  ${
              currentSlide === totalSlides ? "text-gray-400" : "text-[#2B7B67]"
            }`}
          />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
