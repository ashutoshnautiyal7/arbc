import Image from "next/image";
import React from "react";

const TestimonialList = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center font-poppins text-center">
      
      <p className="text-[20px] leading-[30px]">{testimonial.text}</p>
      <h4 className="text-[24px] text-[#2B7B67] mt-6 font-bold">
        {testimonial.name}
      </h4>
    </div>
  );
};

export default TestimonialList;
