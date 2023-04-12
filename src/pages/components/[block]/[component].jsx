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
import Image from "next/image";

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
      <div className="mb-5 bg-hero-pattern w-full bg-cover bg-no-repeat h-[300px] mt-20"></div>
      {COMPONENT_LIST.map(
        (component, index) =>
          component.slug === query.component && (
            <div key={index} className="px-[20px]">
              <div className="container mx-auto -mt-[250px] mb-[50px] md:mb-[90px] rounded-[12px] shadow-componentcard bg-white  overflow-hidden">
                <div className="p-2.5 md:p-[26px]">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">
                    <div className="text-2xl md:text-5xl tracking-[0.055em] font-semibold capitalize text-[#000000CC]">
                      {component?.pageDetails?.title}
                    </div>
                    {/* social share section */}
                    <div className="md:block hidden">
                      <SocialShare component={component} />
                    </div>
                  </div>
                  {/* Desciption portion */}
                  <div className="mt-1 md:mt-[14px] font-normal px-1 text-base md:text-2xl text-gray-500 md:border-b-2 md:border-spacing-5 pb-4 border-borderColor">
                    {component?.hoverText}
                  </div>
                  <div className="block md:hidden">
                    <SocialShare component={component} />
                  </div>
                  <div className="border-borderColor border-b-2 my-4 md:hidden " />
                  {/* tab navigation for similar category */}
                  <div className="mt-2 md:mt-[26px]">
                    <div className="flex items-center gap-3 md:gap-7 w-full overflow-auto">
                      {lableSample?.sort(compareName).map((data, index) => {
                        return (
                          <div
                            key={index}
                            className={` ${
                              data.slug === query.component
                                ? "!text-[#365CCE]"
                                : "text-[#00000099]"
                            }`}
                          >
                            <Link
                              href={`/components/${data.type}/${data.slug}`}
                            >
                              <div className="w-[75px] md:w-[88px] h-[50px] md:h-[65px] relative mx-auto">
                                <Image
                                  src={data.mainImageSrc}
                                  alt="not found"
                                  fill
                                  className={`rounded-[7px] border-2 ${
                                    data.slug === query.component
                                      ? "border-borderColor"
                                      : "border-none"
                                  }`}
                                />
                              </div>
                              <span className="flex justify-center text-sm md:text-lg text-center mt-1">
                                {data.title}
                              </span>
                            </Link>
                          </div>
                        );
                      })}
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
