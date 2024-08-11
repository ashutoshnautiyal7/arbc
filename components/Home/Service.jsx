import React from "react";
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    id: 1,
    imageSrc: "/Images/s1.png",
    title: "Direct Tax",
    services: [
      "Computing income tax liability and tax return filings",
      "Tax planning",
      "Income Tax Assessment",
      "Advance tax filings and tax refunds",
      "Handling tax matters before appellate authorities & Tribunal",
      "Litigation strategies",
      "Domestic Statutory Compliance",
    ],
  },
  {
    id: 2,
    imageSrc: "/Images/s2.png",
    title: "Indirect Tax",
    services: ["GST Advisory", "GST Litigation support", "GST Compliance"],
  },
  {
    id: 3,
    imageSrc: "/Images/s3.png",
    title: "Accounting Services",
    services: [
      " Accounting policy manual",
      "Statutory Bookkeeping",
      "Accounting Reconciliation",
      "Consolidated financial reporting",
      "Periodical MIS preparation and reporting",
      "Implementation of new accounting compliances & standards",
    ],
  },
  {
    id: 4,
    imageSrc: "/Images/s4.png",
    title: "Audit & Assurance",
    services: [
      "Statutory Audit to ensure true and fair view of the accounts",
      "Tax Audit carried out by a multi-disciplinary team which has experts from both the audit side as well as the tax side",
      "Internal Audit to help clients improve performance and operating efficiency",
    ],
  },
  {
    id: 5,
    imageSrc: "/Images/s5.png",
    title: "Startup Advisory",
    services: [
      "Advising on overall business strategy",
      "Market Research helping startups make informed decisions",
      "Assisting in developing a viable business model",
      "Providing Guidance on Funding & Investments",
    ],
  },
];

const Service = () => {
  return (
    <section id="services" className="px-[32px] lg:px-[8rem] py-[4.2rem] lg:py-[5.5rem] font-poppins">
      <h2 className="text-[32px] md:text-[48px] text-center font-semibold">
        Our Services
      </h2>
      <div className="mt-10 md:mt-12 flex flex-col items-center gap-7 md:gap-10">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            imageSrc={service.imageSrc}
            title={service.title}
            buttonText={service.buttonText}
            services={service.services}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
