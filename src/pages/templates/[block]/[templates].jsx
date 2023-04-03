import {
  DesktopViewLogo,
  MobileViewLogo,
  ShareSvg,
  TabletViewLogo,
} from "../../../utils/images/responsiveImages";
import { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import { COMPONENT_LIST } from "../../../utils/constant";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { CopyIcon, DownloadIcon } from "../../../utils/images/commonImages";
import JSZip from "jszip";
import { CopyBlock, hybrid } from "react-code-blocks";
import Footer from "@/components/common/Footer";
import { compareName } from "../../../utils/helper";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "next-share";

import { TemplateConstant, TEMPLATE_REACT } from "@/utils/templateconstant";
import SEO from "@/components/Seo";
import { RotatingLines } from "react-loader-spinner";

const colors = [
  "EBC84B",
  "64BC78",
  "57B3AC",
  "4299E1",
  "667EEA",
  "9F7AEA",
  "ed64a6",
];
const CommonLayout = ({ check }) => {
  let targetsLength = 0;

  const [componentWidth, setComponentWidth] = useState("100%");
  const [color, setColor] = useState("1D4ED8");
  const [lableSample, setLableSample] = useState();
  const [copyBlock, setCopyBlock] = useState({
    clicked: false,
    text: "",
  });
  const [codeblock, setCodeBlock] = useState(false);
  const [selectedCodeBlock, setSelectedCodeBlock] = useState("react");
  const [loading, IsLoading] = useState(true);

  const [codeBlockData, setCodeBlockData] = useState(TEMPLATE_REACT);
  const [windowMounted, setWindowMounted] = useState(false);

  const router = useRouter();
  const { query } = router;
  const zip = new JSZip();
  useEffect(() => {
    const cat = TemplateConstant.filter((item) => item.type === query.block);
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
  const readmeCode =
    require(`!!raw-loader!../../../utils/README.md`).default.toString();
  const getCode = (component) => {
    const rawCode =
      require(`!!raw-loader!../../../components/templates/${component?.type}/${component?.slug}/${codeBlockData}`).default.toString();
    const finalCode = rawCode
      .replace(
        'const primaryColor = color?.length > 0 ? `#${color}` : "#1D4ED8";',
        ""
      )
      .replaceAll("{ color }", "")
      .replaceAll("${primaryColor}", `#${color}`)
      .replaceAll("primaryColor", `#${color}`)
      .replaceAll(`style={{ backgroundColor: #${color} }}`, "")
      .replaceAll(`style={{ color: #${color} }}`, "")
      .replaceAll(`style={{ borderColor: #${color}, color: #${color} }}`, "")
      .replaceAll(`style={{ borderColor: #${color} }}`, "");
    return finalCode;
  };

  useEffect(() => {
    const code = TemplateConstant?.filter(
      (data) => data.slug === query.templates
    )[0]?.pageDetails;
    switch (selectedCodeBlock) {
      case "HTML": {
        setCodeBlockData(code?.componentHTML);
        break;
      }
      case "React": {
        setCodeBlockData(code?.componentReact);
        break;
      }
      default: {
        setCodeBlockData(code?.componentReact);
      }
    }
  }, [selectedCodeBlock]);

  useEffect(() => {
    setWindowMounted(true);
  }, []);
  return (
    <>
      <Header />
      <SEO
        title={check?.pageDetails?.title}
        description={check?.hoverText}
        image={`https://tailwindblock.vercel.app/${check?.mainImageSrc}`}
      />
      <div className="bg-component-back w-full bg-cover bg-no-repeat h-[300px] mt-20"></div>
      {TemplateConstant.filter((data) => data.slug === query.templates).map(
        (component, index) =>
          true && (
            <>
              <div key={index} className="px-[20px]">
                <div className="container mx-auto -mt-[250px] mb-[50px] md:mb-[100px] rounded-[12px] shadow-componentcard bg-white  overflow-hidden">
                  <div className="mb-10">
                    <div className=" p-[10px] md:p-[32px]">
                      <div className="text-[24px] md:text-[48px]  tracking-[0.055em] font-bold capitalize text-[#1C1C23CC]">
                        {component?.pageDetails?.title}
                      </div>
                      <div className="mt-3 md:mt-5 flex items-center gap-2 ">
                        <div className="text-[#00000099] text-[18px] font-normal">
                          Share :
                        </div>
                        <FacebookShareButton
                          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
                        >
                          <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                        <LinkedinShareButton
                          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
                        >
                          <LinkedinIcon size={32} round={true} />
                        </LinkedinShareButton>
                        <TwitterShareButton
                          url={`https://tailwindblock.vercel.app/templates/${component.type}/${component.slug}`}
                        >
                          <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                        <EmailShareButton
                          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
                        >
                          <EmailIcon size={32} round={true} />
                        </EmailShareButton>
                        <WhatsappShareButton
                          url={`https://tailwindblock.vercel.app/templates/${component.type}/${component.slug}`}
                        >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                      </div>
                      <div className=" mt-2 md:mt-[42px]  ">
                        <span className="flex overflow-x-auto no-scrollbar h-[60px]   text-[22px]  tracking-[0.055em] w-full items-center cursor-pointer text-base font-bold text-gray-500 capitalize">
                          <div className="flex  md:h-[50px] h-[30px]  whitespace-nowrap text-sm md:text-[22px]   items-center">
                            <Link href={"/templates"}>
                              <div>{component.type}</div>
                            </Link>
                            <div> :</div>
                          </div>

                          <div className="flex items-center gap-[10px] md:h-[50px] h-[30px]  px-1 w-full ">
                            {lableSample
                              ?.sort(compareName)
                              .map((data, index) => {
                                return (
                                  <div
                                    onClick={() =>
                                      setSelectedCodeBlock("react")
                                    }
                                    key={index}
                                    className={`max-w-fit px-[15px] text-sm md:text-[22px] w-full   whitespace-nowrap relative  text-center  text-gray-500 capitalize  ${
                                      data.slug === query.component &&
                                      "font-semibold !text-black after:-bottom-[20px]  md:after:-bottom-[20px] after:left-0 after:absolute after:content-['']  after:h-[4px] after:w-full after:rounded-full after:bg-[#333333]"
                                    }`}
                                  >
                                    <Link
                                      href={`/templates/${data.type}/${data.slug}`}
                                      className="relative"
                                    >
                                      <p>{data.slug}</p>
                                    </Link>
                                  </div>
                                );
                              })}
                          </div>
                        </span>
                      </div>
                      <div className="w-full border mb-[20px]"></div>

                      <div className="font-normal tracking-[0.055em] px-1 text-xs md:text-xl text-gray-500">
                        The code for the starter component which you can drop
                        into your existing project.
                      </div>
                      <div className="mt-5 md:mt-10">
                        <div className="mt-5 border rounded-t-md shadow-componentcard flex gap-5 p-3 bg-blue-200 overflow-x-auto overflow-y-hidden">
                          <div className="flex items-center gap-3 md:gap-5 w-full justify-between">
                            <div className="flex items-center gap-5">
                              <div
                                onClick={() => setCodeBlock(false)}
                                className="flex gap-3 md:gap-5 items-center"
                              >
                                <span
                                  className={`font-bold text-xs md:text-xl whitespace-nowrap cursor-pointer 
                              `}
                                >
                                  Preview :
                                </span>
                                <div className=" hidden lg:flex align-middle gap-2 items-center">
                                  <div
                                    onClick={() => setComponentWidth("425px")}
                                    className="relative border h-7 w-7 items-center flex rounded-md cursor-pointer shadow-md bg-white"
                                  >
                                    <MobileViewLogo
                                      fill={
                                        componentWidth === "425px"
                                          ? "blue"
                                          : "black"
                                      }
                                    />
                                  </div>
                                  <div
                                    onClick={() => setComponentWidth("768px")}
                                    className="relative border h-7 w-7 rounded-md items-center flex cursor-pointer shadow-md bg-white"
                                  >
                                    <TabletViewLogo
                                      fill={
                                        componentWidth === "768px"
                                          ? "blue"
                                          : "black"
                                      }
                                    />
                                  </div>
                                  <div
                                    onClick={() => setComponentWidth("100%")}
                                    className="relative border h-7 w-7 rounded-md items-center flex cursor-pointer shadow-md bg-white"
                                  >
                                    <DesktopViewLogo
                                      fill={
                                        componentWidth === "100%"
                                          ? "blue"
                                          : "black"
                                      }
                                    />
                                  </div>
                                </div>
                                {windowMounted && (
                                  <Link
                                    data-testid={`preview`}
                                    href={`${window.location.origin}/templates/${component?.type}/view/${component?.type}-${component?.slug}`}
                                    target="_blank"
                                  >
                                    <div className="relative border h-7 w-7 rounded-md cursor-pointer shadow-md bg-white">
                                      <ShareSvg />
                                    </div>
                                  </Link>
                                )}
                              </div>
                              {component?.isCustomizeColor && (
                                <div className="flex justify-center gap-2 cursor-pointer">
                                  {colors.map((data, index) => {
                                    return (
                                      <div
                                        key={index}
                                        style={{ backgroundColor: `#${data}` }}
                                        className={`w-[20px] h-[20px] rounded-[2px] bg-[#${data}]`}
                                        onClick={(e) => {
                                          setColor(data);
                                        }}
                                      ></div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                            <div className="flex items-center justify-end gap-3 md:gap-5">
                              <div onClick={() => setCodeBlock(true)}>
                                <span className="font-bold text-xs md:text-xl whitespace-nowrap cursor-pointer">
                                  Code :
                                </span>
                              </div>
                              {component?.codeAvailableLanguages.map(
                                (data, index) => (
                                  <div
                                    onClick={() => {
                                      setSelectedCodeBlock(data);
                                      setCodeBlock(true);
                                    }}
                                    key={index}
                                    className={`capitalize flex items-center px-2 py-1 rounded hover:bg-white hover:text-themeColor font-bold text-xs md:text-xl  cursor-pointer ${
                                      data === selectedCodeBlock && "bg-white"
                                    }`}
                                  >
                                    {data}
                                  </div>
                                )
                              )}
                              <div className="group flex relative">
                                <span
                                  onClick={() => {
                                    copyData(getCode(component));
                                  }}
                                  key={index}
                                  className="bg-themeColor text-white px-2 py-1 rounded overflow-hidden cursor-pointer"
                                >
                                  <CopyIcon />
                                </span>
                                <span className="absolute right-12 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                                  {!copyBlock.clicked ? "Copy" : "Copied"}
                                </span>
                              </div>
                              <div className="group flex relative">
                                <span
                                  className="bg-themeColor text-white px-2 py-1 rounded overflow-hidden cursor-pointer"
                                  onClick={() => {
                                    zip.file(
                                      "code.jsx",
                                      `${getCode(component)}`
                                    );
                                    zip.file("README.md", `${readmeCode}`);

                                    zip
                                      .generateAsync({ type: "base64" })
                                      .then(function (content) {
                                        location.href =
                                          "data:application/zip;base64," +
                                          content;
                                      });
                                  }}
                                >
                                  <DownloadIcon />
                                </span>
                                <span className="absolute right-12 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                                  Download
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center w-full shadow-componentcard rounded-b-md bg-[#f3f1f6] border-b-[1px]">
                          {!codeblock ? (
                            <>
                              <iframe
                                title="Preview"
                                onLoad={() => IsLoading(false)}
                                width={componentWidth}
                                className={loading ? "hidden" : "h-screen"}
                                src={
                                  windowMounted &&
                                  `${window.location.origin}/templates/${component.type}/${component.type}-${component.slug}`
                                }
                              ></iframe>
                              {loading && (
                                <div className="h-screen flex items-start pt-10">
                                  <RotatingLines
                                    strokeColor="#1E3B8A"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="96"
                                    visible={true}
                                  />
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="h-96 overflow-y-auto">
                              <CopyBlock
                                text={getCode(component)}
                                theme={hybrid}
                                language="jsx"
                                CodeBlock
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full text-center flex flex-col items-center  justify-center  gap-5 md:gap-10 capitalize text-xl  font-semibold tracking-[0.05em]">
                  <div className="xl:text-[38px] text-[24px] tracking-[0.055em]">
                    For More Components
                  </div>
                  <div className="container grid lg:grid-cols-4 grid-cols-1 gap-7">
                    {TemplateConstant?.map((data, index) => {
                      targetsLength =
                        data.slug !== query.templates
                          ? targetsLength + 1
                          : targetsLength;
                      return data.slug !== query.templates ? (
                        <Link
                          key={index}
                          href={`/templates/${data.type}/${data.slug}`}
                        >
                          <div className="group border rounded-xl shadow-subcard  cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16)] hover:scale-[1.02] hover:duration-75 overflow-hidden">
                            <div>
                              <div className="h-[190px] relative">
                                <Image
                                  src={data.mainImageSrc}
                                  alt="not found"
                                  fill
                                />
                              </div>
                              <span className="group-hover: bg-themeColor absolute top-0 group-hover:visible invisible group-hover:text-white  left-0 w-full text-center p-2 font-bold text-sm">
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
                      ) : null;
                    })}
                    {targetsLength < 4 &&
                      COMPONENT_LIST.slice(0, 4 - targetsLength).map(
                        (data, index) => {
                          return (
                            <Link
                              key={index}
                              href={`/components/${data.type}/${data.slug}`}
                            >
                              <div className="group border rounded-xl shadow-subcard overflow-hidden cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16)] hover:scale-[1.02] hover:duration-75">
                                <div key={index}>
                                  <div className="h-[190px] relative">
                                    <Image
                                      src={data.mainImageSrc}
                                      alt="not found"
                                      fill
                                      sizes="300px"
                                    />
                                  </div>
                                  <span className="group-hover: bg-themeColor absolute top-0 group-hover:visible invisible group-hover:text-white  left-0 w-full text-center p-2 font-bold text-sm">
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
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
            </>
          )
      )}
      <Footer />
    </>
  );
};
export async function getServerSideProps(context) {
  return {
    props: {
      check: TemplateConstant.find(
        (data) => data.slug === context.query.templates
      ),
    },
  };
}
export default CommonLayout;
