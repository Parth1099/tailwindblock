import { COMPONENT_LIST } from "@/utils/constant";
import React from "react";
import PreviewSecion from "./PreviewSection";
import { TemplateConstant } from "@/utils/templateconstant";
import Link from "next/link";

const Customization = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-12 items-center justify-center px-5 sm:px-8 md:px-10">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-xl sm:text-3xl md:text-4xl xl:text-5xl leadin-[59px] text-black opacity-80">
          Customization based on your needs
        </h2>
        <div className="border md:border-2 rounded-xl border-[#365CCE] w-16 md:w-40 h-0"></div>
        <p className="font-normal text-sm sm:text-lg md:text-xl xl:text-2xl text-black opacity-60">
          You may put over well-made {COMPONENT_LIST.length}&nbsp;+
          <Link href="/components">&nbsp;Components&nbsp;</Link>
          and {TemplateConstant.length}&nbsp;+&nbsp;
          <Link href="templates">Templates</Link> page into your Tailwind
          projects and modify them as you like. They are all professionally
          designed and fully responsive.
        </p>
      </div>
      <div className="relative w-full h-full">
        <PreviewSecion
          component={
            COMPONENT_LIST.filter((data) => data.slug == "advertise")[0]
          }
          page="components"
          array_map={COMPONENT_LIST}
          query_slug="advertise"
        />
      </div>
    </div>
  );
};

export default Customization;
