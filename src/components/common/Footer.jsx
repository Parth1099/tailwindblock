import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/common/logo.svg";
import Facebook from "../../../public/assets/footer/facebookicon.svg";
import Twitter from "../../../public/assets/footer/twittericon.svg";
import Linkedin from "../../../public/assets/footer/linkedinicon.svg";
import Instagram from "../../../public/assets/footer/instagramicon.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const socialmedia = [
  {
    link: "https://www.facebook.com/infynnosolutions",
    img: Facebook,
  },
  {
    link: "https://twitter.com/infynno",
    img: Twitter,
  },
  {
    link: "https://www.linkedin.com/company/infynno-solutions/",
    img: Linkedin,
  },
  {
    link: "https://www.instagram.com/infynno_solutions/",
    img: Instagram,
  },
];
const HeaderData = [
  {
    name: "Components",
    link: "/components",
  },
  {
    name: "Templates",
    link: "/template",
  },
  {
    name: "Documentations",
    link: "https://github.com/infynno-solutions/tailwind-ui",
  },
];

const Footer = () => {
  const router = useRouter();
  return (
    <div className="static bottom-0 w-full flex justify-center items-center mt-7 ">
      <div className="text-white pt-[30px] md:pt-[30px]  flex flex-col items-center justify-center gap-11 w-full max-h-[500px] md:h-[435px] bg-[#02719B]">
        <div className="flex flex-col gap-[15px]   lg:gap-[30px] lg:px-[161px] w-full">
          <div
            className={` flex  items-center  md:flex-row  justify-center gap-3 sm:gap-[40px] md:gap-[50px] font-bold text-sm sm:text-[16px] md:text-[18px] leading-6 tracking-[0.055em]`}
          >
            {HeaderData.map((data, index) => (
              <span
                className={` font-semibold text-white hover:border-b-[3px] hover:pb-[2px]  cursor-pointer  px-2 h-8 flex`}
                key={index}
              >
                <Link href={data.link} rel="noreferrer">
                  {data.name}
                </Link>
              </span>
            ))}
          </div>
          <div className="border-[0.5px] border-[#F6F8FF] "></div>
        </div>

        <div className="flex flex-col justify-center gap-[20px] text-center">
          <Link href={"/"}>
            <div className="flex justify-center gap-[15px]">
              <div className="flex items-center">
                <Image src={Logo} alt="logo" />
              </div>
            </div>
          </Link>
          <div
            className={` px-[2%] font-medium md:px-0 max-w-[600px]  lg:max-w-[811px] text-[16px] sm:text-[17px] md:text-[18px] leading-6 tracking-[0.055em]`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </div>
          <div className="flex gap-[18px] justify-center mt-5">
            {socialmedia.map((data, index) => {
              return (
                <Link key={index} href={data.link} target="_blank">
                  <Image src={data.img} alt="socialicon" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center py-[21px]  bg-[#317FA5] w-full justify-center text-[16px] sm:text-[17px] md:text-[18px] leading-[25px] tracking-[0.055em] font-normal gap-2">
          <div>Copyrights © Infynno {new Date().getFullYear()}.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
