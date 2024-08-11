"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (sections) {
        sections.forEach((section) => observer.unobserve(section));
      }
    };
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const offset = 60;
    const element = document.querySelector(targetId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveLink(targetId);
    }
  };

  return (
    <div className="flex justify-between items-center px-[32px] py-[12px] border-b-[#2B7B67] border-b-2 sticky top-0 bg-white shadow-md z-50 font-poppins">
      <Link href="/">
        <Image src={"/Images/logo.png"} width={120} height={120} alt="Logo" />
      </Link>
      <div className="hidden lg:flex gap-8">
        <Link
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className={`font-medium cursor-pointer ${
            activeLink === "#home" ? "text-[#2B7B67]" : "text-black"
          }`}
        >
          Home
        </Link>
        <Link
          href="#who-are-we"
          onClick={(e) => handleScroll(e, "#who-are-we")}
          className={`font-medium cursor-pointer ${
            activeLink === "#who-are-we" ? "text-[#2B7B67]" : "text-black"
          }`}
        >
          Who Are We
        </Link>
        <Link
          href="#services"
          onClick={(e) => handleScroll(e, "#services")}
          className={`font-medium cursor-pointer ${
            activeLink === "#services" ? "text-[#2B7B67]" : "text-black"
          }`}
        >
          Services
        </Link>
        <Link
          href="#why-us"
          onClick={(e) => handleScroll(e, "#why-us")}
          className={`font-medium cursor-pointer ${
            activeLink === "#why-us" ? "text-[#2B7B67]" : "text-black"
          }`}
        >
          Why Us
        </Link>
        <Link
          href="#testimonials"
          onClick={(e) => handleScroll(e, "#testimonials")}
          className={`font-medium cursor-pointer ${
            activeLink === "#testimonials" ? "text-[#2B7B67]" : "text-black"
          }`}
        >
          Testimonials
        </Link>
        <Link
          href="#contact-us"
          onClick={(e) => handleScroll(e, "#contact-us")}
          className={`font-medium cursor-pointer ${
            activeLink === "#contact-us" ? "text-[#2B7B67]" : "text-black"
          }`}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
