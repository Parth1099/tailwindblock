import { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import { COMPONENT_LIST } from "../../../utils/constant";
import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import { compareName } from "../../../utils/helper";
import SEO from "@/components/Seo";
import PreviewSecion from "@/components/PreviewSection";
import SocialShare from "@/components/SocialShare";
import MoreComponent from "@/components/MoreComponent";

const CommonLayout = ({ check }) => {
  const [lableSample, setLableSample] = useState();
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const cat = COMPONENT_LIST.filter((item) => item.type === query.block);
    setLableSample(cat);
  }, [query]);

  return (
    <>
      <Header />
      {/* dynamic SEO for Selected page by server side props */}
      <SEO
        title={check?.pageDetails?.title}
        description={check?.hoverText}
        image={`https://tailwindblock.vercel.app/${check?.mainImageSrc}`}
      />
      <div className="bg-component-back w-full bg-cover bg-no-repeat h-[300px] mt-20"></div>
      {COMPONENT_LIST.map(
        (component, index) =>
          component.slug === query.component && (
            <div key={index} className="px-[20px]">
              <div className="container mx-auto -mt-[250px] mb-[50px] md:mb-[100px] rounded-[12px] shadow-componentcard bg-white  overflow-hidden">
                <div className="mb-10">
                  <div className=" p-[10px] md:p-[32px]">
                    <div className="text-[24px] md:text-[48px]  tracking-[0.055em] font-bold capitalize text-[#1C1C23CC]">
                      {component?.pageDetails?.title}
                    </div>
                    {/* social share section */}
                    <SocialShare component={component} />
                    {/* tab navigation for similar category */}
                    <div className="mt-2 md:mt-[42px]">
                      <span className="flex overflow-x-auto no-scrollbar h-[60px] text-[22px] tracking-[0.055em] w-full items-center  text-base font-bold text-gray-500 capitalize">
                        <div className="flex  md:h-[50px] h-[30px]  whitespace-nowrap text-sm md:text-[22px]   items-center">
                          <Link href={"/components"}>
                            <div>{component.type}</div>
                          </Link>
                          <div> :</div>
                        </div>

                        <div className="flex items-center gap-[10px] md:h-[50px] h-[30px]  px-1 w-full">
                          {lableSample?.sort(compareName).map((data, index) => {
                            return (
                              <div
                                key={index}
                                className={`max-w-fit px-[15px] text-sm md:text-[22px] w-full whitespace-nowrap relative text-center  text-gray-500 capitalize  ${
                                  data.slug === query.component &&
                                  "font-semibold !text-black after:-bottom-[20px]  md:after:-bottom-[20px] after:left-0 after:absolute after:content-['']  after:h-[4px] after:w-full after:rounded-full after:bg-[#333333]"
                                }`}
                              >
                                <Link
                                  href={`/components/${data.type}/${data.slug}`}
                                  className="relative"
                                >
                                  <p>{data.title}</p>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </span>
                    </div>
                    <div className="w-full border mb-[20px]"></div>
                    <div className="font-normal tracking-[0.055em] px-1 text-xs md:text-xl text-gray-500">
                      The code for the starter component which you can drop into
                      your existing project.
                    </div>
                    {/* Preview and code section */}
                    <PreviewSecion
                      component={component}
                      page="components"
                      array_map={COMPONENT_LIST}
                      query_slug={query.component}
                    />
                  </div>
                </div>
              </div>

              {/* Simiar component section */}
              <MoreComponent
                LIST_ARRAY_1={COMPONENT_LIST}
                LIST_ARRAY_2={COMPONENT_LIST}
                queryComponent={query.component}
                queryBlock={query.block}
                page="components"
              />
            </div>
          )
      )}
      <Footer />
    </>
  );
};

// used for get SEO before page load
export async function getServerSideProps(context) {
  return {
    props: {
      check: COMPONENT_LIST.find(
        (data) => data.slug === context.query.component
      ),
    },
  };
}
export default CommonLayout;
