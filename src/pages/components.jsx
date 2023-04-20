import { COMPONENT_LIST } from "../utils/constant";
import { useState, useEffect, useCallback } from "react";
import { compareName } from "../utils/helper";
import SEO from "@/components/Seo";
import SideLayout from "@/components/SideLayout";
import Layout from "@/components/HomeLayout";

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
const people = [{ name: "Recent Added" }, { name: "A - Z" }, { name: "Z - A" }];

const Components = () => {
  const [selected, setSelected] = useState(people[0]);
  const [data, setData] = useState(null);

  const [components, setComponents] = useState({
    count: COMPONENT_LIST.length,
    type: "all",
    visible: COMPONENT_LIST,
  });

  const filterdata = useCallback(
    (val) => {
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
    },
    [components]
  );
  useEffect(() => {
    filterdata(selected);
  }, [filterdata, selected]);

  return (
    <>
      <SEO
        title="Components"
        image={`${process.env.NEXT_PUBLIC_APP_URL}/seo/components.png`}
      />
      <Layout>
        <div className="relative h-[200px] sm:h-72 top-20 bg-hero-pattern bg-cover bg-no-repeat w-full">
          <div className="absolute top-2.5 text-center lg:px-0 xl:px-28 px-3 md:px-7 h-full w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center lg:w-1/2 gap-4 sm:gap-8 h-full ">
              <div className="w-full flex justify-center ">
                <h1 className="font-semibold text-xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight text-[#F1F5FD]">
                  Tailwind CSS
                </h1>
              </div>
              <p className="font-normal text-base sm:text-xl md:text-2xl leading-tight text-white">
                Examples of beautifully produced, completely responsive, and
                professionally designed components that you can add to your
                Tailwind projects and modify as you like.
              </p>
            </div>
          </div>
        </div>

        <SideLayout listData={COMPONENT_LIST} category={category} />
      </Layout>
    </>
  );
};
export default Components;
