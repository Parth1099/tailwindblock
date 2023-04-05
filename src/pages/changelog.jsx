import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MonthData from "@/components/common/MonthData";
import { COMPONENT_LIST } from "@/utils/constant";
import { TemplateConstant } from "@/utils/templateconstant";
import React, { useEffect, useState } from "react";

const ChangeLog = () => {
  const [changelog, setChangeLog] = useState([]);

  useEffect(() => {
    setChangeLog([...COMPONENT_LIST, ...TemplateConstant]);
  }, []);

  return (
    <>
      <Header />

      <div className="mt-[100px] flex flex-col gap-6">
        {changelog.map((data) => {
          //   console.log(
          //     changelog.filter(
          //       (d) =>
          //         new Date(d.date).getMonth() === new Date(data.date).getMonth()
          //     ),
          //     "Month Data"
          //   );
          const cardData = changelog.filter(
            (d) =>
              new Date(d.date).getMonth() === new Date(data.date).getMonth()
          );
          return <MonthData cardData={cardData} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default ChangeLog;
