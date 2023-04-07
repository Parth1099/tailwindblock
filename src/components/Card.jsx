import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ data, type }) => {
  return (
    <div>
      <Link
        href={{
          pathname: `${type}/${data.type}/${data.slug}`,
        }}
      >
        <div className="border-[#75A0E5] w-full mx-auto group border rounded-xl shadow-subcard overflow-hidden cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16)] hover:scale-[1] hover:duration-75">
          <div>
            <div
              className={classNames(
                type === "templates" &&
                  "flex overflow-hidden justify-center items-center w-full h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[505px] bg-gradient-to-r from-[#55C8F4] via-purple-500 to-pink-500"
              )}
            >
              <div
                className={classNames(
                  "relative rounded-lg group-hover:scale-105 group-hover:duration-75",
                  type === "components"
                    ? "h-[190px] w-full"
                    : "h-full w-10/12 top-10 xl:top-20"
                  // : ""
                )}
              >
                <Image
                  src={data.mainImageSrc}
                  className="rounded-lg"
                  alt="not found"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            </div>
            <span
              className={classNames(
                "group-hover: bg-[#32439B99] bg-opacity-60 absolute top-0 group-hover:visible invisible group-hover:text-white left-0 w-full text-center p-2 font-bold text-base group",
                type === "templates" &&
                  "group-hover:h-20 group-hover:flex group-hover:items-center group-hover:justify-center group-hover:rounded-t-lg"
              )}
            >
              {data.hoverText}
            </span>
            <div className="mt-3 font-bold text-center text-black text-opacity-80 text-2xl truncate px-5 capitalize">
              {data.title}
            </div>

            <div className="mb-3 font-bold text-center text-gray-900">
              {data.subTitle}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
