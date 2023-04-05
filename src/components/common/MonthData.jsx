import { data } from "autoprefixer";
import React from "react";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import Header from "./Header";

const MonthData = ({ cardData }) => {
  console.table(cardData, "Data");
  const month = new Date(cardData[0]?.date).getMonth() + 1;
  const year = new Date(cardData[0]?.date).getFullYear();

  return (
    <>
      <div className="text-white flex-col gap-3  flex  justify-satrt items-start ml-24 ">
        <div className="max-w-[800px] flex flex-col  justify-center w-full rounded-lg py-5 bg-blue-900">
          <div className="flex  flex-col">
            <div className="flex items-center w-full justify-between px-6">
              <div className="font-bold">
                {cardData.length} new components in the Tailwind Blocks
              </div>
              <div>
                <button className="bg-white text-blue-900 min-w-[190px] text-[13px] px-3 font-bold  py-3 rounded-3xl">
                  {month.toString().length > 1 ? "" : "0"}
                  {month}-{year}
                </button>
              </div>
            </div>
            {cardData.map((data) => {
              return (
                <div className="px-6 flex flex-col mt-3 ">
                  <div className="flex gap-3 items-center">
                    <HiOutlineArrowRightCircle /> {data.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthData;
