import { InfynnoLogo } from "@/utils/images/InfynnoLogo";

//to conver hex to rgb , for Decrease opacity of parent background color
function hexToRgbA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",0.2)"
    );
  }
  throw new Error("Bad Hex");
}

const AdvertiseCard = ({ color }) => {
  const primaryColor = color?.length > 0 ? `#${color}` : "#1D4ED8";
  return (
    <div className="flex justify-center items-center h-screen bg-[#F1F5FD]">
      <div
        style={{ borderColor: primaryColor, color: primaryColor }}
        className="border-2 border-[${primaryColor}] rounded-[5px] mx-4 md:mx-0 bg-gradient-to-r from-indigo-100 to-pink-200 shadow-[0px_20px_20px_10px_[${primaryColor}]]"
      >
        <div className="p-3 md:p-7 max-w-[690px]">
          <div
            style={{ backgroundColor: hexToRgbA(primaryColor) }}
            className="bg-[${primaryColor}] flex items-center justify-center rounded-md h-[150px] px-3 md:px-10 "
          >
            {/* <img
              src="/assets/logo.svg"
              alt="not found"
              className="w-[528px] object-contain h-[150px] md:h-[220px] px-3 md:px-10"
            /> */}
            <InfynnoLogo
              fill={primaryColor}
              className="w-[528px] object-contain"
            />
          </div>
          <div className="mt-4">
            <span
              style={{ color: primaryColor }}
              className=" font-bold text-2xl md:text-3xl text-[${primaryColor}]"
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
                className="underline underline-offset-4 decoration-4 decoration-[${primaryColor}] decoration-dotted"
              >
                Preview
              </span>
              &nbsp;it and&nbsp;
              <span
                style={{ textDecorationColor: primaryColor }}
                className="underline underline-offset-4 decoration-4 decoration-[${primaryColor}] decoration-dotted"
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
                className="bg-[${primaryColor}] h-9 rounded-md px-6 text-white font-bold text-sm uppercase opacity-75"
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
