import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="px-[32px] lg:px-[40px] py-4 md:py-16 xl:py-6 flex gap-5 justify-between items-center font-poppins"
    >
      <div className="py-8 md:py-0 md:px-14 lg:py-16 max-w-[750px]">
        <h1 className="font-bold text-[#1E1E1E] leading-[38px] md:leading-[49px] max-w-[451px] text-[32px] md:text-[40px]">
          Accounting, Tax and Certifications
        </h1>
        <div className="w-[97px] h-[7px] bg-[#1E1E1E] mt-4"></div>
        <h2 className="text-[#2B7B67] text-[32px] font-medium mt-10 md:mt-7 leading-[46px] md:leading-[38px]">
          For Your Business and Personal Needs
        </h2>
        <p className="font-medium leading-[24px] mt-5 md:mt-3">
          We believe numbers without meaning are useless. Our mission is to
          become your trusted business advisor. Our certified accountants are
          passionate about your success
        </p>
        <Link
          href="https://wa.me/918381892139"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-4 py-2 text-white bg-[#2B7B67] rounded-3xl mt-7">
            Enquire Now
          </button>
        </Link>
      </div>
      <div className="md:px-14 py-16">
        <Image
          src={"/Images/b1.png"}
          width={400}
          height={400}
          className="hidden lg:flex"
        />
      </div>
    </section>
  );
};

export default Hero;
