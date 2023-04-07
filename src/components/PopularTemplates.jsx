import { TemplateConstant } from "@/utils/templateconstant";
import React from "react";
import CustomSlider from "./CustomSlider";

const PopularTemplates = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-12 items-center justify-center px-5 sm:px-8 md:px-10">
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold  text-xl sm:text-3xl md:text-4xl xl:text-5xl leadin-[59px] leading-tight text-black opacity-80">
          Popular Templates
        </h2>
        <div className="w-9 md:w-24 border md:border-2 border-[#365CCE] rounded-lg"></div>
      </div>
      <div>
        <CustomSlider type="templates" sliderData={TemplateConstant} />
      </div>
    </div>
  );
};

export default PopularTemplates;
