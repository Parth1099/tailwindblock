import Image from "next/image";
import Link from "next/link";

const MoreComponent = ({
  LIST_ARRAY_1,
  LIST_ARRAY_2,
  queryComponent,
  queryBlock,
  page,
}) => {
  let targetsLength = 0;
  return (
    <div className="w-full text-center flex flex-col items-center justify-center gap-5 md:gap-10 capitalize text-xl  font-semibold tracking-[0.05em]">
      <div className="xl:text-[38px] text-[24px] tracking-[0.055em]">
        For More {page}
      </div>
      <div className="container grid lg:grid-cols-4 grid-cols-1 gap-7">
        {LIST_ARRAY_1?.map((data, index) => {
          targetsLength =
            data.slug !== queryComponent && data.type === queryBlock
              ? targetsLength + 1
              : targetsLength;
          return data.slug !== queryComponent && data.type === queryBlock ? (
            <Link key={index} href={`/${page}/${data.type}/${data.slug}`}>
              <div className="group border rounded-xl shadow-subcard  cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16)] hover:scale-[1.02] hover:duration-75 overflow-hidden">
                <div>
                  <div className="h-[190px] relative">
                    <Image src={data.mainImageSrc} alt="not found" fill />
                  </div>
                  <span className="group-hover: bg-themeColor absolute top-0 group-hover:visible invisible group-hover:text-white  left-0 w-full text-center p-2 font-bold text-sm">
                    {data.hoverText}
                  </span>
                  <div className="mt-3 font-bold text-center text-themeColor text-2xl truncate px-5 capitalize">
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
          LIST_ARRAY_2?.slice(0, 4 - targetsLength).map((data, index) => {
            return (
              <Link key={index} href={`/components/${data.type}/${data.slug}`}>
                <div className=" group border rounded-xl shadow-subcard overflow-hidden cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16)] hover:scale-[1.02] hover:duration-75">
                  <div key={index}>
                    <div className="h-[190px] relative">
                      <Image src={data.mainImageSrc} alt="not found" fill />
                    </div>
                    <span className="group-hover: bg-themeColor absolute top-0 group-hover:visible invisible group-hover:text-white  left-0 w-full text-center p-2 font-bold text-sm">
                      {data.hoverText}
                    </span>
                    <div className="mt-3 font-bold text-center text-themeColor text-2xl truncate px-5 capitalize">
                      {data.title}
                    </div>
                    <div className="mb-3 font-bold text-center text-gray-900">
                      {data.subTitle}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default MoreComponent;
