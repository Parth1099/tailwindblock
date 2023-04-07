import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MonthData = ({ cardData }) => {
  const [CatData, setCatData] = useState();
  const month = new Date(cardData[0]?.date).getMonth() + 1;
  const year = new Date(cardData[0]?.date).getFullYear();
  //   console.log(
  //     [
  //       { type: "one", name: "test1" },
  //       { type: "two", name: "test2" },
  //       { type: "one", name: "test3" },
  //       { type: "one", name: "test4" },
  //       { type: "three", name: "test5" },
  //     ].reduce((a, b) => {
  //       return a.hasOwnProperty(b.type)
  //         ? { ...a, [b.type]: [...a[b.type], b] }
  //         : { ...a, [b.type]: [b] };
  //     })
  //   );

  useEffect(() => {
    setCatData(
      cardData.reduce((a, b) => {
        return a.hasOwnProperty(b.type)
          ? { ...a, [b.type]: [...a[b.type], b] }
          : { ...a, [b.type]: [b] };
      }, {})
    );
  }, [cardData]);

  //   console.log(
  //     cardData.reduce((a, b) => {
  //       return a.hasOwnProperty(b.type)
  //         ? { ...a, [b.type]: [...a[b.type], b] }
  //         : { ...a, [b.type]: [b] };
  //     }, {})
  //   );
  return (
    <>
      <div className="flex flex-col  justify-center items-center">
        <div className="flex flex-col  justify-start items-center">
          <div className="flex text-[20px] font-bold ">
            {month.toString().length > 1 ? "" : "0"}
            {month}-{year}
          </div>
          <div className="h-28 w-[2px] bg-blue-700 "></div>
        </div>

        <div className="text-white capitalize text-xl flex-col gap-3  flex  justify-satrt  w-full items-center px-5 ">
          {CatData &&
            Object.keys(CatData).map((data) => (
              <div
                className={`max-w-[800px] w-full flex flex-col justify-center rounded-lg py-5  bg-blue-900 `}
              >
                <div className="flex  flex-col w-full">
                  <div className="flex items-center w-full justify-between px-6">
                    <div className="flex items-end justify-end w-full">
                      <button
                        className={`min-w-[100px] sm:min-w-[150px] text-blue-900 font-bold  py-1 text-[12px] md:text-[15px] capitalize rounded-full ${
                          CatData[data][0].section === "component"
                            ? "bg-white"
                            : "bg-amber-500 "
                        }`}
                      >
                        {CatData[data][0].section}
                      </button>
                    </div>
                  </div>
                  {CatData[data].map((categoryItem) => {
                    return (
                      <div className="px-6 flex flex-col mt-3 ">
                        <Link
                          href={`/${
                            categoryItem.section === "component"
                              ? "components"
                              : "templates"
                          }/${categoryItem.type}/${categoryItem.slug}`}
                          target="_blank"
                        >
                          <div className="flex flex-col gap-3 justify-center">
                            <div className="flex flex-col">
                              <div className=" items-center flex md:justify-around w-full h-[100px]  rounded-3xl">
                                <div className="max-w-[150px] sm:max-w-[200px] w-full flex items-center justify-start ">
                                  <Image
                                    src={categoryItem.mainImageSrc}
                                    alt="image"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                                <div className="flex  flex-col justify-start items-start max-w-[200px]  sm:max-w-[500px] w-full">
                                  <div className="text-[14px]  md:text-[22px] flex items-center md:gap-3">
                                    <span className="whitespace-nowrap max-w-[150px] sm:max-w-full  overflow-hidden text-ellipsis ">
                                      {categoryItem.title}
                                    </span>
                                    <span className="text-[12px] hidden  font-bold sm:flex flex-col items-baseline  text-gray-300 ">
                                      ({categoryItem.subTitle})
                                    </span>
                                  </div>
                                  <div className="md:text-[16px] leading-5 text-[12px]   ">
                                    {categoryItem.hoverText}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MonthData;
