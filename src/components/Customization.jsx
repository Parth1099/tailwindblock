import { COMPONENT_LIST } from "@/utils/constant";
import React from "react";
import PreviewSecion from "./PreviewSection";

const Customization = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-12 items-center justify-center px-5 sm:px-8 md:px-10">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-xl sm:text-3xl md:text-4xl xl:text-5xl leadin-[59px] text-black opacity-80">
          Customization based on your needs
        </h2>
        <div className="border md:border-2 rounded-xl border-[#365CCE] w-16 md:w-40 h-0"></div>
        <p className="font-normal text-sm sm:text-lg md:text-xl xl:text-2xl text-black opacity-60">
          Examples of beautifully produced, completely responsive, and
          professionally designed components that you can add to your Tailwind
          projects and modify as you like.
        </p>
      </div>
      <div className="relative w-full h-full">
        <PreviewSecion
          component={COMPONENT_LIST[18]}
          page="components"
          array_map={COMPONENT_LIST}
          query_slug="advertise"
        />
      </div>
    </div>
  );
};

export default Customization;
