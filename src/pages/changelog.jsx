import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MonthData from "@/components/common/MonthData";
import { COMPONENT_LIST } from "@/utils/constant";
import { TemplateConstant } from "@/utils/templateconstant";
import React, { useEffect, useState } from "react";
import compareDesc from "date-fns/compareDesc";

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
      <Header />
      <div className="mt-[100px] flex flex-col ">
        {changelog.map((data) => {
          const cardData = changelog.filter(
            (d) =>
              new Date(d.date).getMonth() === new Date(data.date).getMonth()
          );
          return logDates.includes(
            new Date(data.date).getMonth() + 1
          ) ? null : (
            <>
              <MonthData cardData={cardData} />
              {logDates.push(new Date(data.date).getMonth() + 1)}
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default ChangeLog;
