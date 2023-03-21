import {
  DesktopViewLogo,
  MobileViewLogo,
  ShareSvg,
  TabletViewLogo,
} from "../../utils/images/responsiveImages";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import { useState } from "react";

const shareSvg = [
  "/share/facebook.svg",
  "/share/linkedin.svg",
  "/share/twitter.svg",
  "/share/email.svg",
  "/share/whatsapp.svg",
];
const ComponentDetailsLayout = ({ children }) => {
  const [componentWidth, setComponentWidth] = useState("100%");
  console.log(children);
  return (
    <>
      <Header />
      {/* <div className="bg-details-back bg-cover bg-no-repeat h-[300px] mt-10"></div> */}

      <div className="px-[20px] ">
        <div className=" -mt-[250px] mb-[50px] md:mb-[100px] rounded-[12px] shadow-componentcard bg-white  overflow-hidden">
          <div className="mb-10">
            <div className="border p-[10px] md:p-[32px]">
              {/* <div className="text-[24px] md:text-[48px]  tracking-[0.055em] font-bold capitalize text-[#1C1C23CC]">
                Demo Test one
              </div> */}
              {/* <div className="mt-5 flex items-center gap-2 ">
                <div className="text-[#00000099] text-[18px] font-normal">
                  Share :
                </div>
                <div className="flex gap-[7px]">
                  {shareSvg.map((img, index) => (
                    <Link href={img} key={index}>
                      <Image src={img} alt="not found" width={22} height={22} />
                    </Link>
                  ))}
                </div>
              </div> */}
              {/* <div className="w-full border  mb-[20px] mt-2"></div> */}

              {/* <div className="font-normal tracking-[0.055em] px-1 text-xs md:text-xl text-gray-500">
                The code for the starter component which you can drop into your
                existing project.
              </div> */}
              <div className="mt-5 border rounded-t-md shadow-componentcard flex gap-5 p-3 bg-blue-200  ">
                <div className="flex  items-center gap-5">
                  <span className="font-bold text-xs md:text-xl">
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
                        stroke={componentWidth === "425px" ? "blue" : "black"}
                      />
                    </div>
                    <div
                      onClick={() => setComponentWidth("768px")}
                      className={`relative border h-7 w-7 rounded-md items-center flex cursor-pointer shadow-md bg-white ${
                        componentWidth === "768px" && "text-white bg-blue-800"
                      }`}
                    >
                      <TabletViewLogo
                        stroke={componentWidth === "768px" ? "blue" : "black"}
                      />
                    </div>
                    <div
                      onClick={() => setComponentWidth("100%")}
                      className={`relative border h-7 w-7 rounded-md items-center flex cursor-pointer shadow-md bg-white ${
                        componentWidth === "100%" && "text-white bg-blue-800"
                      }`}
                    >
                      <DesktopViewLogo
                        stroke={componentWidth === "100%" ? "blue" : "black"}
                      />
                    </div>

                    <div
                      onClick={() =>
                        window.open(
                          // `${process.env.NEXT_PUBLIC_APP_URL}/components/${component.type}/${component.pageDetails.codeBlockPage}`,
                          "_blank"
                        )
                      }
                      className={`border h-7 w-7 rounded-md  cursor-pointer shadow-md bg-white`}
                    >
                      <ShareSvg />
                    </div>
                  </div>
                </div>
              </div>
              {/* Code Preview Block */}

              <div className="flex justify-center items-center w-full shadow-componentcard rounded-b-md bg-blue-300 border-b-[1px]">
                <iframe
                  title="Preview"
                  width={componentWidth}
                  className="bg-white h-[100vh]"
                  src={`${process.env.NEXT_PUBLIC_APP_URL}/components/pricing/pricing-sample-1`}
                ></iframe>
              </div>
              {/* {children} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentDetailsLayout;
