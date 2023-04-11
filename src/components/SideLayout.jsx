import { COMPONENT_LIST } from "@/utils/constant";
import { compareName } from "@/utils/helper";
import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import Card from "./Card";

const people = [{ name: "Recent Added" }, { name: "A - Z" }, { name: "Z - A" }];
const category = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "Pricing",
    type: "pricing",
  },
  {
    name: "Creditcard",
    type: "creditcard",
  },
  {
    name: "Carousal",
    type: "carousal",
  },
  {
    name: "Card",
    type: "card",
  },
  {
    name: "Animation",
    type: "animation",
  },
  {
    name: "Button",
    type: "button",
  },
  {
    name: "Input",
    type: "input",
  },
  {
    name: "Radio Button",
    type: "radiobutton",
  },
  {
    name: "Check Box",
    type: "checkbox",
  },
  {
    name: "Timer",
    type: "timer",
  },
];

const SideLayout = () => {
  const [selected, setSelected] = useState(people[0]);
  const [data, setData] = useState(null);

  const [components, setComponents] = useState({
    count: COMPONENT_LIST.length,
    type: "all",
    visible: COMPONENT_LIST,
  });

  useEffect(() => {
    filterdata(selected);
  }, [components]);

  const filterdata = (val) => {
    setSelected(val);
    switch (val.name) {
      case "Recent Added":
        setData({
          ...components,
          visible: components.visible.sort(
            (next, prev) => new Date(prev?.date) - new Date(next?.date)
          ),
        });
        break;
      case "A - Z":
        setData({
          ...components,
          visible: components.visible.sort(compareName),
        });
        break;
      case "Z - A":
        setData({
          ...components,
          visible: components.visible.sort(compareName).reverse(),
        });
        break;
      default:
        setData({
          ...components,
          visible: Constant.ComponentList,
        });
    }
  };

  return (
    <div className="w-full mt-20">
      <div className="w-full h-11 sm:h-16 bg-[#F1F5FD] items-center grid grid-cols-[35%_65%] ssm:grid-cols-[30%_70%] sm:grid-cols-[20%_80%]">
        <div className="border-r border-b px-4 border-[#75A0E5] h-full flex items-center w-full">
          <input
            type="text"
            className="font-normal w-full text-base md:text-lg leading-tight text-black text-opacity-60 bg-[#F1F5FD] outline-none"
            placeholder="Filter..."
          />
        </div>
        <div className="flex justify-between items-center w-full h-full px-4 sm:px-8 border-b border-[#75A0E5]">
          <h2 className="font-normal text-xs sm:text-sm md:text-lg leading-tight text-black text-opacity-60">
            BLocks
          </h2>
          <Listbox value={selected} onChange={(val) => filterdata(val)}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-pointer min-w-[100px] md:min-w-[150px] rounded-lg bg-[#F1F5FD] text-black text-opacity-60 flex gap-3 px-2 py-2 sm:px-4 sm:py-3 border border-[#75A0E5] focus:outline-none text-xs sm:text-sm">
                <div className="flex mx-auto justify-between items-center gap-2 w-full">
                  <div className="block truncate">{selected.name}</div>
                  <div className="pointer-events-none ">
                    <HiChevronUpDown
                      className="h-3 w-3 sm:h-5 sm:w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full text-start overflow-auto rounded-md bg-[#F1F5FD] py-1 text-sm md:text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none p-2 `
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={` cursor-pointer p-1 block truncate ${
                              selected ? "font-medium " : "font-normal"
                            }
                            ${
                              active
                                ? "bg-[#E0E9F9] text-black text-opacity-60 border rounded border-[#75A0E5]"
                                : "text-black text-opacity-60"
                            }`}
                          >
                            {person.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <div className="grid grid-cols-[35%_65%] ssm:grid-cols-[30%_70%] sm:grid-cols-[20%_80%] w-full">
        <div className="h-full flex flex-col border-r border-[#75A0E5] items-center">
          <div className="w-full h-full max-h-[312px] sm:max-h-[448px] overflow-y-scroll scrollbar-thumb-[#75A0E5] scrollbar-thin">
            {category.map((ctype, index) => (
              <div
                key={index}
                className={`border-[#75A0E5] border-b whitespace-nowrap w-full group px-2 py-2 sm:py-3 sm:px-4 items-center sm:leading-[2.50em] flex sm:justify-between gap-1 text-[14px] cursor-pointer text-xs sm:text-sm md:text-lg font-bold hover:bg-[#E0E9F9] 
                    ${
                      components.type === ctype.type
                        ? "text-[#365CCE]"
                        : "text-black text-opacity-60"
                    }
                  `}
                onClick={() => {
                  ctype.type === "all"
                    ? setComponents({
                        count: COMPONENT_LIST.length,
                        type: ctype.type,
                        visible: COMPONENT_LIST,
                      })
                    : setComponents({
                        count: COMPONENT_LIST.filter(
                          (item) => item.type === ctype.type
                        ).length,
                        type: ctype.type,
                        visible: COMPONENT_LIST.filter(
                          (item) => item.type === ctype.type
                        ),
                      });
                }}
              >
                <span className="w-full max-w-[100px] block truncate">
                  {ctype.name}
                </span>
                <span className="py-0.5 sm:px-2.5 leading-[1.50em] text group-hover:text-black hover:text-opacity-60 ">
                  (
                  {ctype.type === "all"
                    ? COMPONENT_LIST.length
                    : COMPONENT_LIST.filter((item) => item.type === ctype.type)
                        .length}
                  )
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#E0E9F9] min-h-[700px] p-3 md:p-8 h-full w-full">
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
            {data?.visible.map((data, index) => (
              <div key={index}>
                <Card data={data} type="components" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideLayout;
