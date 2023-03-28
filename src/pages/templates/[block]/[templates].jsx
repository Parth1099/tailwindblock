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
          content="component.data:image/jpeg;base64,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"
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
