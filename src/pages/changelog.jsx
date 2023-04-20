import MonthData from "@/components/common/MonthData";
import { COMPONENT_LIST } from "@/utils/constant";
import { TemplateConstant } from "@/utils/templateconstant";
import React, { useEffect, useState } from "react";
import compareDesc from "date-fns/compareDesc";
import Gradient from "../../public/assets/common/Line_Gradient.svg";
import Image from "next/image";
import Layout from "@/components/HomeLayout";
import SEO from "@/components/Seo";

const ChangeLog = () => {
  const [changelog, setChangeLog] = useState([]);
  const logDates = [];
  useEffect(() => {
    setChangeLog(
      [...COMPONENT_LIST, ...TemplateConstant].sort((d, d2) =>
        compareDesc(new Date(d.date), new Date(d2.date))
      )
    );
  }, []);

  return (
    <>
      <SEO title="Changelog" />
      <Layout>
        <div className="mt-20   mb-8 flex flex-col  w-full">
          <div>
            <Image
              src={Gradient}
              alt="gradient"
              fill
              style={{ objectFit: "cover", backgroundPosition: "left" }}
            />
          </div>
          <div className="py-6 md:py-24 lg:py-30 flex items-center justify-center w-full bg-blue-100">
            <div className="flex flex-col gap-6 items-center justify-center">
              <div className="text-2xl md:text-[56px] font-semibold">
                Changelog
              </div>
              <div className="text-[#00000099] text-base md:text-[24px] font-normal leading-[33px] px-5 md:px-0  md:max-w-[592px] text-center">
                Weekly update log of free & premium tailwind CSS components and
                templates.
              </div>
            </div>
          </div>

          {changelog?.map((data, index) => {
            const cardData = changelog.filter(
              (d) =>
                new Date(d.date).getMonth() === new Date(data.date).getMonth()
            );

            if (logDates.includes(new Date(data.date).getMonth() + 1)) {
              return null;
            } else {
              logDates.push(new Date(data.date).getMonth() + 1);
            }

            return (
              <div key={index}>
                <MonthData cardData={cardData} />
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default ChangeLog;
