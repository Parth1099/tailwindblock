import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  return (
    <div
      className="shadow-sm cursor-pointer bg-transparent w-full"
      onClick={toggleExpanded}
    >
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
        <h5 className="flex-1 font-normal text-sm sm:text-lg md:text-2xl leading-tight text-black text-opacity-60">
          {title}
        </h5>
        <div className="bg-[#C7D9F6] w-6 h-6 rounded-full flex justify-center items-center">
          {expanded ? "-" : "+"}
        </div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-left font-normal text-xs sm:text-sm md:text-lg text-black opacity-60">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
