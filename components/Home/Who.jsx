import Image from "next/image";
import React from "react";

const Who = () => {
  return (
    <section id="who-are-we" className="bg-[#1E1E1E] text-white px-[32px] lg:px-[8rem] py-[4.2rem] lg:py-[5.5rem] font-poppins">
      <h2 className="text-[32px] md:text-[48px] font-semibold text-center">Who We Are</h2>
      <div className="flex gap-10 lg:gap-6 flex-col lg:flex-row justify-between items-center mt-8 lg:mt-12 w-full">
        <div className="text-[20px] leading-[30px] lg:w-[65%]">
          <p>
            <b>A RAI BHARDWAJ & CO.</b>, a Chartered Accountancy firm was formed
            in the year 2021.
          </p>
          <p className="mt-4 md:mt-6">
            We have assisted clients in establishing new business ventures, and
            guided them on various initial compliances and entity formation
            procedures. At <b>A RAI BHARDWAJ & CO.</b>, clients are provided
            with excellent services with a complete dedication and transparent
            approach.
          </p>
          <p className="mt-4 md:mt-6">
            Major areas of services include{" "}
            <b>
              start-up advisory, devising strategy for business restructuring,
              regulatory approvals, periodic compliance under income tax law,GST
              law,company law,EPF & ESIC law, drafting and registration of
              agreements with various statutory authorities, due diligence and
              representation before authorities.
            </b>
          </p>
        </div>
        <div className="">
          <Image src={"/Images/h1.jpeg"} width={400} height={400} className="object-cover rounded-2xl"/>
        </div>
      </div>
    </section>
  );
};

export default Who;
