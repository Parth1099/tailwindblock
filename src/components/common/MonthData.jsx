import { PRODUCT_TYPES } from "@/utils/constant";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";

const MonthData = ({ cardData }) => {
  const [CatData, setCatData] = useState();
  const month = new Date(cardData[0]?.date).getMonth() + 1;
  const year = new Date(cardData[0]?.date).getFullYear();
  const [componentData, setComponentData] = useState();
  const [TemplateData, setTemplateData] = useState();

  const cardDataSection = cardData.map((data) => data["section"]);

  const section = [...new Set(cardDataSection)];

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", { month: "long" });
  }

  useEffect(() => {
    cardData && setCatData(cardData);
    setComponentData(
      cardData.filter((cdata) => cdata.section === PRODUCT_TYPES[0])
    );
    setTemplateData(
      cardData.filter((cdata) => cdata.section === PRODUCT_TYPES[1])
    );
  }, [cardData]);

  return (
    <>
      <div className="flex flex-col  justify-center items-center">
        <div className="h-11 w-[1px] bg-blue-700 "></div>

        <div className="flex flex-col  justify-start items-center">
          <div className="flex text-[20px] text-[#00000099] font-bold ">
            <div className="min-w-[90px] flex justify-end">
              {getMonthName(month)}
            </div>
            <div className="min-w-[20px] flex justify-center ">-</div>{" "}
            <div className="min-w-[90px]">{year}</div>
            {/* &nbsp;-&nbsp; */}
          </div>
          <div className="h-11 w-[1px] bg-blue-700 "></div>
        </div>

        <div className="flex-col gap-3 flex justify-satrt w-full items-center px-5">
          <div
            className={`max-w-[950px] w-full flex flex-col justify-center  py-5  bg-[#F1F5FD] border border-[#75A0E5] rounded-[10px]`}
          >
            <div className="flex gap-[17px] px-5 sm:px-[30px]  flex-col w-full">
              <h1 className="text-xl md:text-[28px] font-semibold leading-[35px] text-[#00000099]">
                {componentData?.length
                  ? componentData.length > 1
                    ? componentData.length + " Components"
                    : componentData.length + " Component"
                  : null}
                {componentData?.length && TemplateData?.length ? " & " : ""}
                {TemplateData?.length
                  ? TemplateData.length > 1
                    ? TemplateData.length + " Templates"
                    : TemplateData.length + " Template"
                  : null}
                &nbsp;added
              </h1>
              <div className=" flex justify-start gap-4  md:gap-[30px] md:flex-wrap overflow-x-auto overflow-hidden ">
                {cardData &&
                  cardData.map((data, index) => (
                    <>
                      <div key={index} className="flex items-stretch">
                        <div className=" flex items-center">
                          <Link
                            href={`/${
                              data.section === "component"
                                ? "components"
                                : "templates"
                            }/${data.type}/${data.slug}`}
                            target="_blank"
                          >
                            <div className="group relative w-[84px] h-[65px] flex-row flex items-center justify-start border border-[#365CCE] rounded-[7px] drop-shadow-xl  ">
                              <Image
                                className="rounded-[7px] bg-cover"
                                src={data.mainImageSrc}
                                fill
                                alt="image"
                              />
                              <span className="group-hover: bg-[#32439B99] group-hover:rounded-[7px] group-hover:h-full bg-opacity-60 absolute top-0 group-hover:visible invisible group-hover:text-white left-0 w-full text-center p-2 font-bold text-xs group group-hover:flex group-hover:items-center group-hover:justify-center">
                                {data.title}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
              <div
                className={classNames(
                  "flex flex-col  ",
                  section.length > 1 ? "gap-4" : "gap-2"
                )}
              >
                {cardData &&
                  PRODUCT_TYPES.map((producType, index) => (
                    <>
                      {cardData.filter((t) => t.section === producType).length >
                        0 && (
                        <div
                          className={classNames(
                            "font-semibold text-lg capitalize",
                            section.length > 1 && index === 1 && "mt-2 md:mt-5"
                          )}
                        >
                          {producType}
                        </div>
                      )}
                      <div className="flex gap-2 md:gap-4 flex-col">
                        {cardData
                          .filter((t) => t.section === producType)
                          .map((data, index) => (
                            <div
                              key={index}
                              className={classNames("flex  items-center")}
                            >
                              <Link
                                href={`/${
                                  data.section === "component"
                                    ? "components"
                                    : "templates"
                                }/${data.type}/${data.slug}`}
                                target="_blank"
                              >
                                <div className="gap-[13px] text-lg font-normal text-[#00000099] flex items-center justify-start ">
                                  <FaCircle size={11} fill="#365CCE" />
                                  <h2 className=" whitespace-nowrap">
                                    {data.title}
                                  </h2>
                                  <div className="hidden sm:flex  truncate  sm:max-w-[300px] md:max-w-[450px] lg:max-w-[700px] whitespace-nowrap text-[14px] leading-7  items-center">
                                    - {data.hoverText}
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthData;
