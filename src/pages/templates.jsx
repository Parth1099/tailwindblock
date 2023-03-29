import { useState, Fragment, useEffect } from "react";
import Header from "../components/common/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/common/Footer";
import { compareName } from "../utils/helper";

import { Listbox, Transition } from "@headlessui/react";
import { HiChevronUpDown, HiCheckCircle } from "react-icons/hi2";
import { TemplateConstant } from "@/utils/templateconstant";

const category = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "3DNFT",
    type: "3dnft",
  },
  {
    name: "Crypto",
    type: "crypto",
  },
  {
    name: "Advocate",
    type: "advocate",
  },
  {
    name: "TBDesign",
    type: "tbdesign",
  },
];
const people = [{ name: "Recent Added" }, { name: "A - Z" }, { name: "Z - A" }];

const Templates = () => {
  const [selected, setSelected] = useState(people[0]);
  const [data, setData] = useState(null);

  const [components, setComponents] = useState({
    count: TemplateConstant.length,
    type: "all",
    visible: TemplateConstant,
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
          visible: TemplateConstant,
        });
    }
  };

  return (
    <>
      <Header />

      <div className="relative h-[261px]  top-20 bg-hero-pattern w-full">
        <div className="absolute top-2.5 text-center lg:px-0 xl:px-28 px-6 h-full w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8 md:w-1/2 h-full ">
            <div className="w-full flex justify-center ">
              <div className="max-w-[400px] w-full p-2 rounded text-3xl  capitalize bg-themeColor text-white">
                Templates
              </div>
            </div>

            <div className="leading-6 text-base font-nunito">
              <p>
                Here is a list of all free Template made with tailwind css and
                reactjs. Users can preview all views on a tablet, mobile, or
                desktop, and users can copy the code and paste it into their
                compiler. user can customize the code as well.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 sm:flex-row gap-10 container mx-auto pt-28">
        <aside className="border h-fit  md:h-[400px] w-full sm:bg-white text-black no-scrollbar  overflow-x-auto rounded sm:w-72 px-4 py-2 sm:p-4 sm:sticky top-24">
          <div className="sm:flex-col flex flex-row gap-3">
            {category.map((ctype, index) => (
              <div
                key={index}
                className={` whitespace-nowrap  group py-0.5 px-2.5 items-center sm:leading-[2.50em] flex justify-between gap-1 sm:border text-[14px] rounded cursor-pointer sm:text-lg font-bold hover:bg-themeColor hover:text-white 
                    ${
                      components.type === ctype.type &&
                      "bg-themeColor text-white"
                    }
                  `}
                onClick={() => {
                  ctype.type === "all"
                    ? setComponents({
                        count: TemplateConstant.length,
                        type: ctype.type,
                        visible: TemplateConstant,
                      })
                    : setComponents({
                        count: TemplateConstant.filter(
                          (item) => item.type === ctype.type
                        ).length,
                        type: ctype.type,
                        visible: TemplateConstant.filter(
                          (item) => item.type === ctype.type
                        ),
                      });
                }}
              >
                <span>{ctype.name}</span>
                <span className="py-0.5 px-2.5 leading-[1.50em] text group-hover:text-white rounded">
                  (
                  {ctype.type === "all"
                    ? TemplateConstant.length
                    : TemplateConstant.filter(
                        (item) => item.type === ctype.type
                      ).length}
                  )
                </span>
              </div>
            ))}
          </div>
        </aside>
        <main className="flex-1">
          <div className="flex  items-end mb-5 text-center justify-end cursor-pointer ">
            <Listbox value={selected} onChange={(val) => filterdata(val)}>
              <div className=" relative mt-1 min-w-[160px]">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white px-8 py-2  shadow-subcard focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <HiChevronUpDown
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full text-start overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-themeColor text-white"
                              : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`cursor-pointer block truncate ${
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
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  gap-5">
            {data?.visible.map((data, index) => (
              <div key={index}>
                <Link
                  href={{
                    pathname: `/templates/${data.type}/${data.slug}`,
                  }}
                >
                  <div
                    className="w-72 mx-auto  group border rounded-xl shadow-subcard overflow-hidden cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16)] hover:scale-[1.02] hover:duration-75"
                    key={index}
                  >
                    <div>
                      <div className="w-[288px] h-[190px] relative">
                        <Image src={data.mainImageSrc} alt="not found" fill />
                      </div>
                      <span className="group-hover: bg-themeColor absolute top-0 group-hover:visible invisible group-hover:text-white  left-0 w-full text-center p-2 font-bold text-base">
                        {data.hoverText}
                      </span>
                      <div className="mt-3 font-bold text-center text-themeColor text-2xl">
                        {data.title}
                      </div>
                      <div className="mb-3 font-bold text-center text-gray-900">
                        {data.subTitle}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};
export default Templates;
