import {
  DesktopViewLogo,
  MobileViewLogo,
  TabletViewLogo,
} from "../utils/images/responsiveImages";

import { useEffect, useRef, useState } from "react";
import { COMPONENT_REACT } from "../utils/constant";
import Link from "next/link";
import {
  CodeIcon,
  CopyIcon,
  DownIcon,
  DownloadIcon,
  PreviewIcon,
  ShareIcon,
} from "../utils/images/commonImages";
import JSZip from "jszip";
import { CopyBlock, hybrid } from "react-code-blocks";
import { ChromePicker } from "react-color";
import { RotatingLines } from "react-loader-spinner";

const PreviewSecion = ({ component, page, array_map, query_slug }) => {
  const languageRef = useRef(null);
  const pickerRef = useRef(null);
  const [componentWidth, setComponentWidth] = useState("100%");
  const [color, setColor] = useState("1D4ED8");
  const [openPicker, setOpenPicker] = useState(false);
  const [copyBlock, setCopyBlock] = useState({
    clicked: false,
    text: "",
  });
  const [codeblock, setCodeBlock] = useState(false);
  const [selectedCodeBlock, setSelectedCodeBlock] = useState("react");
  const [codeLanguage, setCodeLanguage] = useState(false);
  const [codeBlockData, setCodeBlockData] = useState(COMPONENT_REACT);
  const [windowMounted, setWindowMounted] = useState(false);
  const [loading, IsLoading] = useState(true);
  const zip = new JSZip();

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
    require(`!!raw-loader!../utils/README.md`).default.toString();
  const getCode = (component) => {
    const rawCode =
      component?.pageDetails?.componentReact !== "templateReact"
        ? require(`!!raw-loader!../${page}/${component?.type}/${component?.slug}/${codeBlockData}`).default.toString()
        : require(`!!raw-loader!../components/${page}/${component?.type}/${component?.slug}/${codeBlockData}`).default.toString();
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
      .replaceAll(`style={{ borderColor: #${color} }}`, "")
      .replaceAll(`style={{ textDecorationColor: #${color} }}`, "");

    return finalCode;
  };
  const handleChange = (color) => {
    setColor(color.hex.slice(1));
  };
  useEffect(() => {
    const code = array_map?.filter((data) => data.slug === query_slug)[0]
      ?.pageDetails;
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

  useEffect(() => {
    function handler(event) {
      if (!languageRef.current?.contains(event.target)) {
        setCodeLanguage(false);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    function handler(event) {
      if (!pickerRef.current?.contains(event.target)) {
        setOpenPicker(false);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div className="mt-5 md:mt-10 border-2 border-borderColor rounded-[10px] overflow-hidden">
      <div className="flex gap-5 px-3 lg:px-9 py-4 lg:py-4 bg-[#F1F5FD] overflow-x-auto overflow-y-hidden border-b-2 border-b-borderColor">
        <div className="flex items-center gap-3 md:gap-5 w-full justify-between">
          <div className="flex items-center lg:gap-7 ">
            <div className="flex gap-3 md:gap-5 items-center">
              <div
                className="hidden lg:flex gap-5 items-baseline"
                onClick={() => setCodeBlock(false)}
              >
                <div
                  onClick={() => setComponentWidth("425px")}
                  className="cursor-pointer flex flex-col items-center"
                >
                  <div>
                    <MobileViewLogo
                      stroke={componentWidth === "425px" ? "#365CCE" : "black"}
                    />
                  </div>
                  <span
                    className={`font-normal text-lg  ${
                      componentWidth === "425px"
                        ? "text-[#365CCE]"
                        : "text-[#00000061]"
                    }`}
                  >
                    sm
                  </span>
                </div>
                <div
                  onClick={() => setComponentWidth("768px")}
                  className="cursor-pointer flex flex-col items-center"
                >
                  <div>
                    <TabletViewLogo
                      stroke={componentWidth === "768px" ? "#365CCE" : "black"}
                    />
                  </div>
                  <span
                    className={`font-normal text-lg   ${
                      componentWidth === "768px"
                        ? "text-[#365CCE]"
                        : "text-[#00000061]"
                    }`}
                  >
                    md
                  </span>
                </div>
                <div
                  onClick={() => setComponentWidth("100%")}
                  className="cursor-pointer flex flex-col items-center"
                >
                  <div>
                    <DesktopViewLogo
                      stroke={componentWidth === "100%" ? "#365CCE" : "black"}
                    />
                  </div>
                  <span
                    className={`font-normal text-lg  ${
                      componentWidth === "100%"
                        ? "text-[#365CCE]"
                        : "text-[#00000061]"
                    }`}
                  >
                    xl
                  </span>
                </div>
              </div>
            </div>
            {/* Color picker  */}
            {component?.isCustomizeColor && (
              <>
                <div ref={pickerRef}>
                  <div
                    className="px-3 py-3 text-lg  border-2 rounded-md border-borderColor cursor-pointer items-center flex text-[#00000061] gap-2 "
                    onClick={() => !codeblock && setOpenPicker(!openPicker)}
                  >
                    <span className="text-[#00000099] lg:block hidden">
                      Color:
                    </span>

                    <div
                      style={{ backgroundColor: `#${color}` }}
                      className={`w-4 h-4 bg-[$#{color}]`}
                    ></div>
                    <span className="lg:block hidden">#{color}</span>
                    <div className="pl-2">
                      <DownIcon />
                    </div>
                  </div>
                  {openPicker && (
                    <div className="absolute p-2 border-2 border-borderColor rounded-md mt-2 bg-white">
                      <ChromePicker
                        color={color}
                        onChangeComplete={handleChange}
                      />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="flex items-center justify-end gap-5">
            <div className="hidden lg:flex flex-row">
              <div
                onClick={() => setCodeBlock(false)}
                className={`rounded-l-md flex px-4 py-3 items-center gap-2 border-2 border-r-2 border-r-[#365CCE] cursor-pointer ${
                  !codeblock
                    ? "bg-[#E0E9F9] border-[#365CCE]"
                    : "border-borderColor"
                }`}
              >
                <PreviewIcon />
                <span>Preview</span>
              </div>
              <div
                onClick={() => {
                  setCodeBlock(true);
                  setOpenPicker(false);
                  setCodeLanguage(false);
                }}
                className={`border-2 rounded-r-md px-4 py-3 flex items-center gap-2 cursor-pointer border-l-0 ${
                  codeblock
                    ? "bg-[#E0E9F9] border-[#365CCE]"
                    : "border-borderColor"
                }`}
              >
                <CodeIcon />
                <span>Code</span>
              </div>
            </div>

            {/* Select language droupdown */}
            <div ref={languageRef}>
              <div
                className="px-1.5 lg:px-3 text-lg py-1.5 lg:py-3 border-2 rounded-md border-borderColor cursor-pointer items-center flex text-[#00000061] w-24 justify-between"
                onClick={() => setCodeLanguage(!codeLanguage)}
              >
                <span className="capitalize text-lg">{selectedCodeBlock}</span>
                <div className="pl-2">
                  <DownIcon />
                </div>
              </div>
              {codeLanguage && (
                <div className="absolute z-10 px-2 py-3 w-24 border-2 border-borderColor rounded-md mt-2 bg-white">
                  {component?.codeAvailableLanguages.map((data, index) => (
                    <div
                      onClick={() => {
                        setSelectedCodeBlock(data);
                        setCodeBlock(true);
                        setCodeLanguage(false);
                      }}
                      key={index}
                      className={`capitalize text-[#00000099] text-lg cursor-pointer my-2 ${
                        data === selectedCodeBlock &&
                        "border-2 rounded border-borderColor p-1 bg-[#E0E9F9]"
                      }`}
                    >
                      {data}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* icon for open component in full screen */}
            <div
              onClick={() => setCodeBlock(false)}
              className="lg:hidden block"
            >
              <PreviewIcon />
            </div>
            {windowMounted && (
              <Link
                data-testid={`preview`}
                href={`${window.location.origin}/${page}/${component?.type}/view/${component?.type}-${component?.slug}?color=${color}`}
                target="_blank"
              >
                <div className="cursor-pointer">
                  <ShareIcon />
                </div>
              </Link>
            )}
            {/* icon for copy code */}
            <div className="group flex relative">
              <span
                onClick={() => {
                  copyData(getCode(component));
                }}
                className="cursor-pointer"
              >
                <CopyIcon />
              </span>
              <span className="absolute bottom-7 right-[-5px] scale-0 transition-all rounded bg-gray-800 p-1 text-xs text-white group-hover:scale-100">
                {!copyBlock.clicked ? "Copy" : "Copied"}
              </span>
            </div>
            {/* icon for downlod zip */}
            <div className="group flex relative pr-4 md:pr-0">
              <span
                className="cursor-pointer"
                onClick={() => {
                  zip.file("code.jsx", `${getCode(component)}`);
                  zip.file("README.md", `${readmeCode}`);
                  // const img = zip.folder("public");
                  // img.file("email.svg");
                  zip
                    .generateAsync({ type: "base64" })
                    .then(function (content) {
                      location.href = "data:application/zip;base64," + content;
                    });
                }}
              >
                <DownloadIcon />
              </span>
              <span class="absolute bottom-7 right-[-15px] scale-0 transition-all rounded bg-gray-800 p-1 text-xs text-white group-hover:scale-100">
                Download
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* code and preview section  */}
      <div className="flex justify-center items-center w-full shadow-componentcard rounded-b-md bg-[#f3f1f6] border-b-[1px]">
        {!codeblock ? (
          <>
            <iframe
              onLoad={() => IsLoading(false)}
              title="Preview"
              width={componentWidth}
              className={loading ? "hidden" : "h-[623px]"}
              src={
                windowMounted &&
                `${window.location.origin}/${page}/${component.type}/${component.type}-${component.slug}?color=${color}`
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
          <div className="h-96 overflow-y-auto w-full">
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
  );
};
export default PreviewSecion;
