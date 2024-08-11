import React from "react";
import Image from "next/image";

const Why = () => {
  return (
    <section id="why-us" className="bg-[#1E1E1E] text-white px-[32px] lg:px-[8rem] py-[4.2rem] lg:py-[5.5rem] font-poppins">
      <h2 className="text-[32px] md:text-[48px] font-semibold text-center">
        Why Us?
      </h2>
      <div className="flex gap-10 lg:gap-6 flex-col lg:flex-row justify-between items-center mt-8 lg:mt-12 w-full">
        <div className="text-[20px] leading-[30px] lg:w-[65%]">
          <p>
            Our expertise goes beyond the traditional areas of service, wherein
            we provide our clients with integrated, objective advice to help
            them control costs, increase efficiency, evaluate opportunities, and
            improve transaction outcomes. The firm has a diverse client base
            spread across multiple industry verticals.
          </p>
          <p className="mt-4 md:mt-6">
            We strive towards building long term relationships through
            commitment, truthfulness, integrity and personalized attention. We
            take pride in our ability to provide quality services – whether they
            are an owner- managed business or a large multinational corporation.
          </p>
        </div>
        <div className="">
          <Image
            src={"/Images/h2.jpeg"}
            width={400}
            height={400}
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Why;
