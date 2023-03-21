import {
  DesktopViewLogo,
  MobileViewLogo,
  ShareSvg,
  TabletViewLogo,
} from "../../../../src/utils/images/responsiveImages";
import { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import { COMPONENT_LIST } from "../../../utils/constant";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Button from "../../../components/common/Button";
import { CopyIcon, DownloadIcon } from "../../../utils/images/commonImages";
import JSZip from "jszip";
import { CopyBlock, hybrid } from "react-code-blocks";
import Footer from "@/components/common/Footer";
import Facebookicon from "../../../../public/share/facebook.svg";
import Linkedinicon from "../../../../public/share/linkedin.svg";
import Twittericon from "../../../../public/share/twitter.svg";
import Emailicon from "../../../../public/share/email.svg";
import Whatsappicon from "../../../../public/share/whatsapp.svg";
import { compareName } from "../../../utils/helper";
import { TemplateConstant } from "@/utils/templateconstant";

const colors = [
  "#EBC84B",
  "#64BC78",
  "#57B3AC",
  "#4299E1",
  "#667EEA",
  "#9F7AEA",
  "#ed64a6",
];
const shareSvg = [
  {
    img: Facebookicon,
    link: "https://www.facebook.com/infynnosolutions",
  },
  {
    img: Linkedinicon,
    link: "https://www.linkedin.com/company/infynno-solutions/",
  },
  {
    link: "https://twitter.com/infynno",
    img: Twittericon,
  },
  {
    link: "https://twitter.com/infynno",
    img: Emailicon,
  },
  {
    link: "https://twitter.com/infynno",
    img: Whatsappicon,
  },

  ,
];
const CommonLayout = () => {
  let targetsLength = 0;

  const [componentWidth, setComponentWidth] = useState("100%");
  const [color, setColor] = useState("#5455BB");
  const [lableSample, setLableSample] = useState();
  const [copyBlock, setCopyBlock] = useState({
    clicked: false,
    text: "",
  });
  const [codeblock, setCodeBlock] = useState(false);
  const [selectedCodeBlock, setSelectedCodeBlock] = useState("react");
  const [codeBlockData, setCodeBlockData] = useState();

  const router = useRouter();
  const { query } = router;
  const zip = new JSZip();
  useEffect(() => {
    const cat = COMPONENT_LIST.filter((item) => item.type === query.block);
    setLableSample(cat);
  }, [query]);

  const copyData = (code) => {
    setCopyBlock({
      clicked: true,
      text: navigator.clipboard.writeText(code),
    });
    const timer = setTimeout(() => {
      setCopyBlock({
        clicked: false,
      });
      clearTimeout(timer);
    }, 3000);
  };
  console.log(query, "CCC");
  // console.log(component, "CCC");

  useEffect(() => {
    const code = TemplateConstant?.filter(
      (data) => data.slug === query.component
    )[0]?.pageDetails;
    switch (selectedCodeBlock) {
      case "HTML": {
        setCodeBlockData(code?.componentHTML);
        break;
      }
      default: {
        setCodeBlockData(code?.componentReact);
        break;
      }
    }
  }, [selectedCodeBlock, codeblock, codeBlockData]);

  return (
    <>
      <Header />

      <div className="bg-details-back  bg-cover bg-no-repeat h-[300px] mt-20"></div>
      {TemplateConstant.map(
        (component, index) =>
          component.type === query.block && (
            <div key={index} className="px-[20px]">
              <div className="container mx-auto -mt-[250px] mb-[50px] md:mb-[100px] rounded-[12px] shadow-componentcard bg-white  overflow-hidden">
                <div className="mb-10">
                  <div className=" p-[10px] md:p-[32px]">
                    <div className="text-[24px] md:text-[48px]  tracking-[0.055em] font-bold capitalize text-[#1C1C23CC]">
                      {component?.pageDetails?.title}
                    </div>
                    <div className="mt-5 flex items-center gap-2 ">
                      <div className="text-[#00000099] text-[18px] font-normal">
                        Share :
                      </div>
                      <div className="flex gap-[7px]">
                        {shareSvg.map((data, index) => (
                          <Link key={index} href={data.link}>
                            <Image
                              src={data.img}
                              alt="not found"
                              width={22}
                              height={22}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="mt-[42px]  ">
                      <span className="flex overflow-x-auto no-scrollbar h-[60px]   text-[22px]  tracking-[0.055em] w-full items-center cursor-pointer text-base font-bold text-gray-500 capitalize">
                        <div className="flex  md:h-[50px] h-[30px]  whitespace-nowrap text-sm md:text-[22px]   items-center">
                          <Link href={"/templatelisting"}>
                            <div>{component.type}</div>
                          </Link>
                          <div> :</div>
                        </div>

                        <div className="flex items-center gap-[10px] md:h-[50px] h-[30px]  px-1 w-full ">
                          {lableSample?.sort(compareName).map((data, index) => {
                            return (
                              <div
                                key={index}
                                className={`max-w-fit px-[15px] text-sm md:text-[22px] w-full   whitespace-nowrap relative  text-center  text-gray-500 capitalize  ${
                                  data.slug === query.component &&
                                  "font-semibold !text-black after:-bottom-[2px]  md:after:-bottom-[20px]   after:left-0 after:absolute after:content-['']  after:h-[4px] after:w-full after:rounded-full after:bg-[#333333]"
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
                    <div className="mt-10">
                      <div className="mt-5 border rounded-t-md shadow-componentcard flex gap-5 p-3 bg-blue-200  ">
                        <div className="flex  items-center gap-5">
                          {!codeblock ? (
                            <>
                              <span
                                className={`font-bold text-xs md:text-xl whitespace-nowrap cursor-pointer 
                              ${"bg-blue-800 border px-2 py-1 rounded text-white"}`}
                              >
                                Preview :
                              </span>
                              <div className="flex align-middle gap-2 items-center">
                                <div
                                  onClick={() => setComponentWidth("425px")}
                                  className={`relative border h-7 w-7 items-center flex rounded-md  cursor-pointer shadow-md bg-white ${
                                    componentWidth === "425px" && "bg-blue-800"
                                  }`}
                                >
                                  <MobileViewLogo
                                    stroke={
                                      componentWidth === "425px"
                                        ? "blue"
                                        : "black"
                                    }
                                  />
                                </div>
                                <div
                                  onClick={() => setComponentWidth("768px")}
                                  className={`relative border h-7 w-7 rounded-md items-center flex cursor-pointer shadow-md bg-white ${
                                    componentWidth === "768px" &&
                                    "text-white bg-blue-800"
                                  }`}
                                >
                                  <TabletViewLogo
                                    stroke={
                                      componentWidth === "768px"
                                        ? "blue"
                                        : "black"
                                    }
                                  />
                                </div>
                                <div
                                  onClick={() => setComponentWidth("100%")}
                                  className={`relative border h-7 w-7 rounded-md items-center flex cursor-pointer shadow-md bg-white ${
                                    componentWidth === "100%" &&
                                    "text-white bg-blue-800"
                                  }`}
                                >
                                  <DesktopViewLogo
                                    stroke={
                                      componentWidth === "100%"
                                        ? "blue"
                                        : "black"
                                    }
                                  />
                                </div>

                                <div
                                  onClick={() =>
                                    window.open(
                                      `${process.env.NEXT_PUBLIC_APP_URL}/components/pricing/pricing-sample-1`,
                                      "_blank"
                                    )
                                  }
                                  className={`border h-7 w-7 rounded-md  cursor-pointer shadow-md bg-white`}
                                >
                                  <ShareSvg />
                                </div>
                              </div>
                            </>
                          ) : (
                            <div
                              onClick={() => setCodeBlock(false)}
                              className={`font-bold text-xs md:text-xl whitespace-nowrap cursor-pointer
                              `}
                            >
                              Preview
                            </div>
                          )}
                          {codeblock ? (
                            <>
                              <div onClick={() => setCodeBlock(true)}>
                                <span
                                  className={`font-bold text-xs md:text-xl whitespace-nowrap cursor-pointer 
                                  ${"bg-blue-800 border px-2 py-1 rounded text-white"}`}
                                >
                                  Code :
                                </span>
                              </div>
                              {component.codeAvailableLanguages.map(
                                (data, index) => (
                                  <div
                                    onClick={() => setSelectedCodeBlock(data)}
                                    key={index}
                                    className={`capitalize px-2 py-1 rounded hover:bg-white hover:text-blue-900 font-bold cursor-pointer ${
                                      data === selectedCodeBlock && "bg-white"
                                    }`}
                                  >
                                    {data}
                                  </div>
                                )
                              )}
                            </>
                          ) : (
                            <div
                              onClick={() => setCodeBlock(true)}
                              className={`font-bold text-xs md:text-xl whitespace-nowrap cursor-pointer`}
                            >
                              Code
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-full shadow-componentcard rounded-b-md bg-blue-300 border-b-[1px]">
                        {!codeblock ? (
                          <iframe
                            title="Preview"
                            width={componentWidth}
                            className="h-screen"
                            // src={`${process.env.NEXT_PUBLIC_APP_URL}/components/pricing/pricing-sample-2`}
                            src={`${window.location.origin}/templates/${component.type}/${component.type}-${component.slug}`}
                          ></iframe>
                        ) : (
                          <div className="h-96 overflow-y-auto">
                            <CopyBlock
                              // text={require(`!!raw-loader!../../../components/templates/${component.type}/${component.slug}/${codeBlockData}`).default.toString()}
                              theme={hybrid}
                              language="html"
                              CodeBlock
                            />
                          </div>
                        )}
                      </div>
                      <div className="mt-10 border-b-2 pb-5">
                        <span className="font-bold sm:text-2xl lg:text-[22px] text-blue-900 ">
                          Code
                        </span>
                      </div>
                      <div className="text-[16px] lg:text-xl tracking-[0.055em]   mt-5 text-[#1c1c2399] font-normal">
                        The starting component&apos;s code, which you can place
                        into an already-existing project.
                      </div>
                      <div>
                        <div className="flex  my-10 flex-row gap-1 sm:gap-5 ">
                          <Button
                            color={"bg-blue-900"}
                            onClick={() => {
                              copyData();
                              // require(`!!raw-loader!../../../components/${component.type}/${component.slug}/${component.pageDetails.component}`).default.toString()
                            }}
                            label={
                              !copyBlock.clicked
                                ? "Copy to Clipboard"
                                : "Copied"
                            }
                            icon={<CopyIcon />}
                            size="max-w-[200px]  lg:max-w-[208px] w-full"
                            font="font-semibold text-white text-[14px] sm:text-base lg:text-[17px]"
                            className="rounded-md whitespace-nowrap py-[10px] lg:py-[15px] "
                          />
                          <Button
                            color={"bg-blue-900"}
                            onClick={() => {
                              zip.file(
                                "code.jsx"
                                // `${require(`!!raw-loader!../../../components/${component.type}/${component.slug}/${codeBlockData}`).default.toString()}`
                              );

                              zip
                                .generateAsync({ type: "base64" })
                                .then(function (content) {
                                  location.href =
                                    "data:application/zip;base64," + content;
                                });
                            }}
                            label={"Download"}
                            icon={<DownloadIcon />}
                            size="max-w-[200px] lg:max-w-[208px] w-full"
                            font="font-semibold text-white text-[14px] sm:text-base lg:text-[17px]"
                            className="rounded-md whitespace-nowrap py-[10px] lg:py-[15px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full text-center flex flex-col items-center  justify-center  gap-10 capitalize text-xl  font-semibold tracking-[0.05em]">
                <div className="text-[38px] tracking-[0.055em]">
                  For More Components
                </div>
                <div className="max-w-[1400px]  md:h-[300px] overflow-x-auto w-full  flex flex-col mx-auto md:flex-row md:flex justify-center gap-10  ">
                  {COMPONENT_LIST?.map((data, index) => {
                    targetsLength =
                      data.slug !== query.component && data.type === query.block
                        ? targetsLength + 1
                        : targetsLength;
                    return data.slug !== query.component &&
                      data.type === query.block ? (
                      <Link key={index} href={"/"}>
                        <div className="   group border rounded-xl shadow-subcard overflow-hidden cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16)] hover:scale-[1.02] hover:duration-75">
                          <div>
                            <div className="min-w-[288px] w-full h-[190px] relative">
                              <Image
                                src={data.mainImageSrc}
                                alt="not found"
                                fill
                                sizes="300px"
                              />
                            </div>
                            <span className="group-hover: bg-blue-900 absolute top-0 group-hover:visible invisible group-hover:text-white  left-0 w-full text-center p-2 font-bold text-sm">
                              {data.hoverText}
                            </span>
                            <div className="mt-3 font-bold text-center text-blue-900 text-2xl">
                              {data.title}
                            </div>
                            <div className="mb-3 font-bold text-center text-gray-900">
                              {data.subTitle}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ) : null;
                  })}
                  {targetsLength < 4 &&
                    COMPONENT_LIST.slice(0, 4 - targetsLength).map(
                      (data, index) => {
                        return (
                          <Link key={index} href={"/"}>
                            <div className="   group border rounded-xl shadow-subcard overflow-hidden cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16)] hover:scale-[1.02] hover:duration-75">
                              <div key={index}>
                                <div className="min-w-[288px] w-full h-[190px] relative">
                                  <Image
                                    src={data.imgsrc}
                                    alt="not found"
                                    fill
                                  />
                                </div>
                                <span className="group-hover: bg-blue-900 absolute top-0 group-hover:visible invisible group-hover:text-white  left-0 w-full text-center p-2 font-bold text-sm">
                                  {data.hoverText}
                                </span>
                                <div className="mt-3 font-bold text-center text-blue-900 text-2xl">
                                  {data.title}
                                </div>
                                <div className="mb-3 font-bold text-center text-gray-900">
                                  {data.subTitle}
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      }
                    )}
                </div>
              </div>
            </div>
          )
      )}
      <Footer />
    </>
  );
};
export default CommonLayout;
