import { useState } from "react";

const staticValue = [
  " Edit up to 1,000 hours of podcast audio files.",
  "Set your own landing page",
  "24/7 support",
  "Advanced analytics",
];
export default function Pricing() {
  const [icon, setIcon] = useState("");

  return (
    <div className="relative">
      <img
        src={"/assets/pricing/sample2/banner.jpg"}
        alt="not found"
        className="h-screen w-full opacity-50 hidden lg:inline-block"
      />

      <container className="bg-gray-300 lg:bg-transparent flex flex-col top-0 w-full absolute lg:flex-row justify-center items-center lg:h-screen gap-6 px-5 xl:px-0 py-8 lg:py-0">
        <div
          className="max-w-[360px] md:w-[384px] h-[572px] p-6 bg-white  group rounded-[20px] lg:hover:-translate-y-6 ease-in duration-300 hover:bg-[#0B0641] hover:text-white border xl:border-none border-[#0B0641]"
          onMouseOver={() => setIcon("1")}
          onMouseOut={() => setIcon("")}
        >
          <div className="flex flex-row gap-5 items-center">
            <img
              src={
                icon === "1"
                  ? "/assets/pricing/sample2/left-white.svg"
                  : "/assets/pricing/sample2/left.svg"
              }
              alt="not found"
            />
            <span className="text-3xl font-bold">Guardian</span>
          </div>
          <span className="flex mt-4 text-[#A9A9AA] text-[22px]">
            What You&apos;ll Get
          </span>
          {staticValue.map((data, index) => (
            <div
              key={index}
              className="flex flex-row gap-2.5 items-start mt-6 text-left text-lg"
            >
              <div className="pt-1 shrink-0">
                <img
                  src={
                    icon === "1"
                      ? "/assets/pricing/sample2/right-white.svg"
                      : "/assets/pricing/sample2/right-black.svg"
                  }
                  alt="not found"
                  className="w-5 h-5 "
                />
              </div>
              <span>{data}</span>
            </div>
          ))}
          <div className="border border-dashed border-[#A9A9AA] tracking-widest my-4" />
          <div className="relative  h-[150px]">
            <div className="bottom-0  left-0 w-full absolute">
              <div className="flex justify-start items-baseline">
                <span className="text-[32px] font-bold ">Free Forever</span>
              </div>
              <button className="w-full px-4 py-3 bg-[#FFF5FA] text-[#FF1D89] group-hover:text-white group-hover:bg-[#FF1D89] rounded-xl mt-6 font-semibold text-[22px]">
                Choose
              </button>
            </div>
          </div>
        </div>
        <div
          className={`
              "max-w-[360px] md:w-[384px] h-[572px] p-6 bg-white group rounded-[20px] ease-in duration-300 border-[#0B0641] border xl:border-none "
              ${
                icon === "2" &&
                "text-white hover:bg-[#0B0641] lg:-translate-y-6 "
              }
          `}
          onMouseOver={() => setIcon("2")}
          onMouseOut={() => setIcon("")}
        >
          <div className="flex flex-row gap-5 items-center">
            <img
              src={
                icon === "2"
                  ? "/assets/pricing/sample2/white.svg"
                  : "/assets/pricing/sample2/black-middle.svg"
              }
              alt="not found"
            />
            <span className="text-3xl font-bold">Mage</span>
          </div>
          <span className="flex mt-4 text-[#A9A9AA] text-[22px]">
            What You&apos;ll Get
          </span>
          {staticValue.map((data, index) => (
            <div
              key={index}
              className="flex flex-row gap-[10px] items-start mt-6 text-left text-lg"
            >
              <div className="pt-1 shrink-0">
                <img
                  src={
                    icon === "2"
                      ? "/assets/pricing/sample2/right-white.svg"
                      : "/assets/pricing/sample2/right-black.svg"
                  }
                  alt="not found"
                  className="w-5 h-5"
                />
              </div>
              <span>{data}</span>
            </div>
          ))}
          <div className="border border-dashed border-[#A9A9AA] tracking-widest my-[18px]" />
          <div className="relative h-[150px]">
            <div className="bottom-0  left-0 w-full absolute">
              <div className="flex justify-start items-baseline">
                <span className="text-[32px] font-bold ">$450</span>
                <span>/month</span>
              </div>
              <button
                className={`"px-4 py-3 rounded-xl mt-6 " ${
                  icon === "2"
                    ? "text-[#ffffff] bg-[#FF1D89]"
                    : "bg-[#FFF5FA] text-[#FF1D89]"
                } w-full font-semibold text-[22px]`}
              >
                Choose
              </button>
            </div>
          </div>
        </div>
        <div
          className="max-w-[360px] md:w-[384px] h-[572px] p-6 bg-white  group rounded-[20px] lg:hover:-translate-y-6 ease-in duration-300 hover:bg-[#0B0641] hover:text-white border xl:border-none border-[#0B0641]"
          onMouseOver={() => setIcon("3")}
          onMouseOut={() => setIcon("")}
        >
          <div className="flex flex-row gap-5 items-center">
            <img
              src={
                icon === "3"
                  ? "/assets/pricing/sample2/right-white-icon.svg"
                  : "/assets/pricing/sample2/right.svg"
              }
              alt="not found"
            />
            <span className="text-3xl font-bold">Phantom</span>
          </div>
          <span className="flex mt-4 text-[#A9A9AA] text-[22px]">
            What You&apos;ll Get
          </span>
          {staticValue.map((data, index) => (
            <div
              key={index}
              className="flex flex-row gap-[10px] items-start  mt-6 text-left text-lg"
            >
              <div className="pt-1 shrink-0">
                <img
                  src={
                    icon === "3"
                      ? "/assets/pricing/sample2/right-white.svg"
                      : "/assets/pricing/sample2/right-black.svg"
                  }
                  alt="not found"
                  className="w-5 h-5 "
                />
              </div>
              <span>{data}</span>
            </div>
          ))}
          <div className="border border-dashed border-[#A9A9AA] tracking-widest my-[18px]" />
          <div className="relative h-[150px]">
            <div className="bottom-0  left-0 w-full absolute">
              <div className="flex justify-start items-baseline">
                <span className="text-[32px] font-bold">$600</span>
                <span>/month</span>
              </div>
              <button className="w-full px-4 py-3 bg-[#FFF5FA] text-[#FF1D89] group-hover:text-white group-hover:bg-[#FF1D89] rounded-xl mt-6 font-semibold text-[22px]">
                Choose
              </button>
            </div>
          </div>
        </div>
      </container>
    </div>
  );
}
