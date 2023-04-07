import { COMPONENT_LIST } from "@/utils/constant";
import { compareName } from "@/utils/helper";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { HiCheckCircle, HiChevronUpDown } from "react-icons/hi2";
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
      <div className="w-full h-14 bg-[#F1F5FD] items-center flex">
        <div className="border-r border-b  px-4 border-[#75A0E5] h-full flex items-center w-full max-w-[289px]">
          <input
            type="text"
            className="font-normal text-lg leading-tight text-black text-opacity-60 bg-[#F1F5FD] outline-none"
            placeholder="Filter..."
          />
        </div>
        <div className="flex justify-between items-center w-full h-full px-8 border-b border-[#75A0E5]">
          <h2 className="font-normal text-lg leading-tight text-black text-opacity-60">
            BLocks
          </h2>
          <Listbox value={selected} onChange={(val) => filterdata(val)}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-[#F1F5FD] text-black text-opacity-60 flex gap-3 px-4 py-3 border border-[#75A0E5] focus:outline-none sm:text-sm">
                <div className="block truncate">{selected.name}</div>
                <div className="pointer-events-none ">
                  <HiChevronUpDown
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full text-start overflow-auto rounded-md bg-[#F1F5FD] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-[#E0E9F9] text-black text-opacity-60"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={` cursor-pointer block truncate ${
                              selected ? "font-medium " : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                              <HiCheckCircle
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
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
      <div className="flex w-full">
        <div className="h-full flex flex-col items-center min-w-[288px]">
          {category.map((ctype, index) => (
            <div
              key={index}
              className={`border-[#75A0E5] border-b whitespace-nowrap w-full group py-3 px-4 items-center sm:leading-[2.50em] flex justify-between gap-1 text-[14px] cursor-pointer sm:text-lg font-bold hover:bg-[#E0E9F9] hover:text-black hover:text-opacity-60 
                    ${components.type === ctype.type && "text-[#365CCE]"}
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
              <span>{ctype.name}</span>
              <span className="py-0.5 px-2.5 leading-[1.50em] text group-hover:text-black hover:text-opacity-60 ">
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
        <div className="bg-[#E0E9F9] min-h-[770px] p-8 border-l border-[#75A0E5] h-full w-full">
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  gap-5">
            {data?.visible.map((data, index) => (
              <div key={index}>
                <Card data={data} type="components" />
              </div>
              //   <div key={index} data-testid={`card-${index}`}>
              //     <Link
              //       href={{
              //         pathname: `components/${data.type}/${data.slug}`,
              //       }}
              //     >
              //       <div
              //         className="max-w-[350px] w-full mx-auto  group border rounded-xl shadow-subcard overflow-hidden cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16)] hover:scale-[1.02] hover:duration-75"
              //         key={index}
              //       >
              //         <div>
              //           <div className="w-full h-[190px] relative">
              //             <Image src={data.mainImageSrc} alt="not found" fill />
              //           </div>
              //           <span className="group-hover: bg-themeColor absolute top-0 group-hover:visible invisible group-hover:text-white  left-0 w-full text-center p-2 font-bold text-base group">
              //             {data.hoverText}
              //           </span>
              //           <div className="mt-3 font-bold text-center text-themeColor text-2xl truncate px-5 capitalize">
              //             {data.title}
              //           </div>

              //           <div className="mb-3 font-bold text-center text-gray-900">
              //             {data.subTitle}
              //           </div>
              //         </div>
              //       </div>
              //     </Link>
              //   </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideLayout;
