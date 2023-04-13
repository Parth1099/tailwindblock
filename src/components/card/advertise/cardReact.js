import { Banner } from "@/utils/images/bannerImage";

const AdvertiseCard = ({ color }) => {
  const primaryColor = color?.length > 0 ? `#${color}` : "#1D4ED8";
  return (
    <div className="flex justify-center items-center h-screen bg-[#F1F5FD]">
      <div
        style={{ borderColor: primaryColor, color: primaryColor }}
        className="border-2 border-[${primaryColor}] rounded-[5px] mx-4 md:mx-0 bg-gradient-to-r from-indigo-100 to-sky-100"
      >
        <div className="p-3 md:p-7 max-w-[690px]">
          <div className=" flex items-center justify-center rounded-md h-[150px] px-3 md:px-10 ">
            <Banner fill={primaryColor} />
          </div>
          <div className="mt-4">
            <span
              style={{ color: primaryColor }}
              className=" font-bold text-2xl md:text-3xl text-[$#{primaryColor}]"
            >
              Taliwind Components and Templates
            </span>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-gray-800/50 text-sm md:text-lg">
              <span
                style={{ backgroundColor: primaryColor }}
                className="box-decoration-slice bg-[${primaryColor}] text-white px-1"
              >
                Free
              </span>
              &nbsp;responsive components and template ,&nbsp;
              <span
                style={{ textDecorationColor: primaryColor }}
                className="cursor-pointer underline underline-offset-4 decoration-4 decoration-[${primaryColor}] decoration-dotted"
              >
                Preview
              </span>
              &nbsp;it and&nbsp;
              <span
                style={{ textDecorationColor: primaryColor }}
                className="cursor-pointer underline underline-offset-4 decoration-4 decoration-[${primaryColor}] decoration-dotted"
              >
                Download
              </span>
              &nbsp; source code in one click.
            </p>
          </div>
          <div className="mt-4">
            <a href="/components" target="_blank">
              <button
                style={{ backgroundColor: primaryColor }}
                className="bg-[${primaryColor}] h-9 rounded-md px-6 text-white font-bold text-sm uppercase"
              >
                Let&apos;s start
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdvertiseCard;
