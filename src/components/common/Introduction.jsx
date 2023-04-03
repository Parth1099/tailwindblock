import SEO from "../Seo";

const Introduction = () => {
  return (
    <>
      <SEO />
      <div>
        <div className="mt-[80px] mb-[280px] w-full font-nunito flex justify-center items-center bg-home-back bg-no-repeat bg-cover h-[550px]">
          <div className="max-w-[994px] -mt-[100px] text-center flex-col gap-[32px] flex">
            <div className="px-[30px] ">
              <fieldset className="border-dashed rounded-lg border border-black rotate-180 ">
                <legend className="px-[20px] rotate-180 text-[12px] sm:text-[22px] tracking-[0.055em] font-bold text-[#1E7ADF]">
                  By the Infynno Solutions
                </legend>
                <div className="rotate-180 text-[16px] sm:text-[35px] lg:text-[48px] px-0 md:px-[10%] lg:px-[5%]  text-center  sm:leading-[65px] tracking-[0.055em] text-[#4F30B9]">
                  UI elements that are beautifully Made with{" "}
                  <span className="font-bold">Tailwind CSS</span>
                </div>
              </fieldset>
            </div>

            <div className="px-[10px] sm:px-0 text-[12px] sm:text-[16px] lg:text-[22px]  leading-[30px] tracking-[0.055em] text-[#1c1c23cc] font-semibold">
              Examples of beautifully produced, completely responsive, and
              professionally designed components that you can add to your
              Tailwind projects and modify as you like.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Introduction;
