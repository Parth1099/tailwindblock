import React from "react";
import Accordion from "./Accordion";
import FaqBg from "../../public/assets/common/Faq_bg.svg";
import Image from "next/image";

const Faq = () => {
  const accData = [
    {
      title: "Can i Modify Components?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Can i download components code?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Can i Modify Components?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Can i Modify Components?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <div className="w-full">
      <div className="relative w-full h-full mx-auto flex flex-col items-center">
        <div className="relative w-full max-w-[1900px] h-auto">
          <Image src={FaqBg} width={3000} height={305} alt="faq" priority />
        </div>
        <div className="flex flex-col md:gap-2 absolute top-1/3">
          <h2 className="font-semibold  text-xl sm:text-3xl md:text-4xl xl:text-5xl leadin-[59px] leading-tight text-black opacity-80">
            FAQ
          </h2>
          <div className="w-2 md:w-5 border md:border-2 border-[#365CCE] rounded-lg"></div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-9 items-center justify-center sm:px-8 md:px-10">
        {accData.map((acc, index) => {
          return (
            <div className="w-full" key={index}>
              <Accordion title={acc.title} content={acc.content} />
              <div className="w-full h-0 border border-[#A1C1EF]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
