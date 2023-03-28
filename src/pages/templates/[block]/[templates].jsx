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
import Facebookicon from "../../../../public/share/facebook.svg";
import Linkedinicon from "../../../../public/share/linkedin.svg";
import Twittericon from "../../../../public/share/twitter.svg";
import Emailicon from "../../../../public/share/email.svg";
import Whatsappicon from "../../../../public/share/whatsapp.svg";
import { compareName } from "../../../utils/helper";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "next-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "next-share";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { TemplateConstant } from "@/utils/templateconstant";
import Head from "next/head";

const colors = [
  "EBC84B",
  "64BC78",
  "57B3AC",
  "4299E1",
  "667EEA",
  "9F7AEA",
  "ed64a6",
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
  const [color, setColor] = useState("1D4ED8");
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

  const shareUrl = "https://tailwindblock.vercel.app/";

  return (
    <>
      <Head>
        <meta property="og:title" content="component.title" />

        <meta property="og:description" content="component.subTitle" />

        <meta
          property="og:image"
          content="data:image/jpeg;base64,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"
        />

        {/* <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" /> */}
      </Head>
      <Header />
      <div className="bg-component-back w-full bg-cover bg-no-repeat h-[300px] mt-20"></div>
      {TemplateConstant.map(
        (component, index) =>
          component.type === query.block && (
            <>
              {/* <Head>
                <meta property="og:title" content={component.title} />

                <meta property="og:description" content={component.subTitle} />

                <meta property="og:image" content={component.mainImageSrc} />

                <meta property="og:image:width" content="1200" />

                <meta property="og:image:height" content="630" />
              </Head> */}
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
                        <FacebookShareButton url={shareUrl}>
                          <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                        <LineShareButton url={shareUrl}>
                          <LinkedinIcon size={32} round={true} />
                        </LineShareButton>
                        <TwitterShareButton
                          url={shareUrl}
                          title="Free open source Tailwind CSS Landing Page starter template"
                        >
                          <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                        <EmailShareButton url={shareUrl}>
                          <EmailIcon size={32} round={true} />
                        </EmailShareButton>
                        <WhatsappShareButton
                          url={"https://tailwindblock.vercel.app/"}
                          title={
                            "next-share is a social share buttons for your next React apps."
                          }
                          separator=":: "
                        >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        {/* <div className="flex gap-[7px] items-center">
                        <Link
                          href={"https://www.facebook.com/infynnosolutions"}
                        >
                          <AiFillFacebook fill="#445BC5" size={22} />
                        </Link>
                        <Link
                          href={
                            "https://www.linkedin.com/company/infynno-solutions/"
                          }
                        >
                          <AiFillLinkedin fill="#445BC5" size={22} />
                        </Link>
                        <Link href={"https://twitter.com/infynno"}>
                          <AiFillTwitterSquare fill="#445BC5" size={22} />
                        </Link>
                        <Link href={"https://twitter.com/infynno"}>
                          <AiOutlineMail fill="#445BC5" size={22} />
                        </Link>
                        <Link href={"https://twitter.com/infynno"}>
                          <AiOutlineWhatsApp fill="#445BC5" size={22} />
                        </Link>
                      </div> */}
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
                                    className={`relative border h-7 w-7 items-center flex rounded-md  cursor-pointer shadow-md bg-white ${
                                      componentWidth === "425px" &&
                                      "bg-blue-800"
                                    }`}
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
                                    className={`relative border h-7 w-7 rounded-md items-center flex cursor-pointer shadow-md bg-white ${
                                      componentWidth === "768px" &&
                                      "text-white bg-blue-800"
                                    }`}
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
                                    className={`relative border h-7 w-7 rounded-md items-center flex cursor-pointer shadow-md bg-white ${
                                      componentWidth === "100%" &&
                                      "text-white bg-blue-800"
                                    }`}
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
                                <div
                                  onClick={() =>
                                    window.open(
                                      `${process.env.NEXT_PUBLIC_APP_URL}/templates/${component?.type}/${component?.type}-${component?.slug}`,
                                      "_blank"
                                    )
                                  }
                                  className={`relative border h-7 w-7 rounded-md cursor-pointer shadow-md bg-white`}
                                >
                                  <ShareSvg />
                                </div>
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
                                <span
                                  className={`font-bold text-xs md:text-xl whitespace-nowrap cursor-pointer 
                              `}
                                >
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
                                    className={`capitalize flex items-center px-2 py-1 rounded hover:bg-white hover:text-blue-900 font-bold text-xs md:text-xl  cursor-pointer ${
                                      data === selectedCodeBlock && ""
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
                                  className="bg-blue-800 text-white px-2 py-1 rounded overflow-hidden cursor-pointer"
                                >
                                  <CopyIcon />
                                </span>
                                <span class="absolute right-12 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                                  {!copyBlock.clicked ? "Copy" : "Copied"}
                                </span>
                              </div>
                              <div
                                className="bg-blue-800 text-white px-2 py-1 rounded overflow-hidden cursor-pointer"
                                onClick={() => {
                                  zip.file("code.jsx", `${getCode(component)}`);

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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center w-full shadow-componentcard rounded-b-md bg-[#f3f1f6] border-b-[1px]">
                          {!codeblock ? (
                            <iframe
                              title="Preview"
                              width={componentWidth}
                              className="h-screen"
                              src={`${window.location.origin}/templates/${component.type}/${component.type}-${component.slug}`}
                            ></iframe>
                          ) : (
                            <div className="h-96 overflow-y-auto">
                              <CopyBlock
                                text={require(`!!raw-loader!../../../components/templates/${component.type}/${component.slug}/${codeBlockData}`).default.toString()}
                                theme={hybrid}
                                language="html"
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
                  <div className="max-w-[1500px]  md:h-[300px] overflow-x-auto w-full items-center flex flex-col mx-auto md:flex-row md:flex justify-center gap-10  ">
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
                          <div className="w-full group border rounded-xl shadow-subcard overflow-hidden cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16)] hover:scale-[1.02] hover:duration-75">
                            <div>
                              <div className="min-w-[300px] w-full h-[190px] relative">
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
                            <Link
                              key={index}
                              href={`/components/${data.type}/${data.slug}`}
                            >
                              <div className=" w-full  group border rounded-xl shadow-subcard overflow-hidden cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16)] hover:scale-[1.02] hover:duration-75">
                                <div key={index}>
                                  <div className="min-w-[325px] w-full h-[190px] relative">
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
export default CommonLayout;
