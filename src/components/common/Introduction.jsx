import HtmlLogo from "@/utils/images/HtmlLogo";
import ReactLogo from "@/utils/images/ReactLogo";
import TailwindLogo from "@/utils/images/TailwindLogo";
import VueLogo from "@/utils/images/VueLogo";
import Link from "next/link";
import SEO from "../Seo";

const Introduction = () => {
  return (
    <div>
      <SEO />
      <div className="mt-[80px] w-full font-nunito flex justify-center items-center bg-home-back bg-no-repeat bg-cover h-auto py-8 md:py-12">
        <div className="max-w-[994px] text-center flex-col gap-5 md:gap-9 flex">
          <div className="px-[30px] flex flex-col gap-4 text-[#F1F5FD]">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl leading-normal md:leading-snug lg:leading-snug xl:text-[58px] xl:leading-[89px] text-center tracking-wide">
              UI elements that are beautifully Made with Tailwind CSS
            </h1>
            <Link
              href={"https://infynno.com/"}
              target="_blank"
              className="cursor-pointer hover:underline"
            >
              <p className="font-semibold text-base sm:text-xl md:text-2xl text-center">
                By the Infynno Solutions
              </p>
            </Link>
          </div>

          <div className=" flex gap-8 md:gap-20 w-full px-5 sm:px-0 max-w-xs sm:max-w-sm md:max-w-lg xl:max-w-xl mx-auto">
            {/* <div className="cursor-pointer group relative hover:scale-125 ">
              <span className="absolute -bottom-7 right-[-5px] scale-0 transition-all rounded bg-[#F1F5FD] p-1 text-xs text-blue-900 font-bold group-hover:scale-100">
                {"Tailwind CSS"}
              </span> */}
            <TailwindLogo />
            {/* </div> */}
            {/* <div className="cursor-pointer group relative hover:scale-110">
              <span className="absolute -bottom-7 right-5 scale-0 transition-all rounded bg-[#F1F5FD] p-1 text-xs text-blue-900 font-bold group-hover:scale-100">
                {"HMTL"}
              </span> */}
            <HtmlLogo />
            {/* </div> */}
            {/* <div className="cursor-pointer group relative hover:scale-110">
              <span className="absolute -bottom-7 right-5 scale-0 transition-all rounded bg-[#F1F5FD] p-1 text-xs text-blue-900 font-bold group-hover:scale-100">
                {"ReactJs"}
              </span> */}
            <ReactLogo />
            {/* </div> */}
            {/* <div className="cursor-pointer group relative hover:scale-110  ">
              <span className="absolute -bottom-7 right-5 scale-0 transition-all rounded bg-[#F1F5FD] p-1 text-xs text-blue-900 font-bold group-hover:scale-100">
                {"VueJS"}
              </span> */}
            <VueLogo />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
