import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/common/nav-logo.svg";
import { useState } from "react";
import { useRouter } from "next/router";
import { NavbarList } from "../../../src/utils/navbarlist";
import classNames from "classnames";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const toggleClass = () => {
    setIsNavOpen(!isNavOpen);
    const closeAfterClick = document.querySelector("#nav-icon4");
    closeAfterClick?.classList?.toggle("open");
  };

  const router = useRouter();

  return (
    <>
      <div className="z-50 lg:px-[60px] xl:px-[110px] bg-[#E0E9F9] top-0 transition-all duration-700 fixed right-0 left-0">
        <div className="flex justify-between px-[3%] md:justify-between w-full max-w-[1920px] mx-auto items-center font-semibold h-[80px] md:px-5 lg:px-0 ">
          <Link href={"/"}>
            <div className="max-w-[200px] sm:max-w-[300px] w-full flex items-center gap-3 md:gap-[15px] mr-5">
              <div>
                <Image src={Logo} alt="Main logo" />
              </div>
            </div>
          </Link>

          <div className={`flex items-center sm:gap-3 md:gap-8`}>
            {NavbarList.map((data, index) => (
              <div className="group" key={index}>
                <span
                  className={` font-nunito text-lg text-center font-semibold text-black opacity-80 cursor-pointer md:flex md:items-center hidden h-8`}
                >
                  <Link href={data.link}>{data.name}</Link>
                </span>
                <div
                  className={classNames(
                    router.pathname
                      .split("/")
                      .includes(data.link.replace("/", ""))
                      ? "w-full h-[2px] bg-black opacity-80"
                      : "h-[2px] w-full group-hover:bg-black group-hover:opacity-80"
                  )}
                ></div>
              </div>
            ))}
            <button
              className="w-12 h-12 relative focus:outline-none md:hidden"
              onClick={() => {
                toggleClass();
                setToggle(!toggle);
              }}
            >
              <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <span
                  className={classNames(
                    "block absolute h-0.5 w-7 text-black bg-current transform transition duration-300 ease-in-out",
                    toggle ? "rotate-45" : "-translate-y-1.5"
                  )}
                ></span>
                <span
                  className={classNames(
                    "block absolute h-0.5 w-7 text-black bg-current transform  transition duration-300 ease-in-out",
                    toggle && "opacity-0"
                  )}
                ></span>
                <span
                  className={classNames(
                    "block absolute h-0.5 w-7 text-black bg-current transform  transition duration-300 ease-in-out",
                    toggle ? "-rotate-45" : "translate-y-1.5"
                  )}
                ></span>
              </div>
            </button>
          </div>

          <div
            className={`md:invisible w-full h-full flex flex-wrap flex-col justify-center fixed left-0 top-[45px] ${
              toggle ? "visible ms:visible sm:visible z-[3]" : "invisible -z-10"
            }`}
          >
            <div
              className={`w-full h-full bg-[#F1F5FD] flex flex-wrap absolute left-0 transition-all duration-300 ease-in-out top-[35px] ${
                toggle ? "ssm:w-3/5" : "ssm:w-0 -z-10"
              }`}
            ></div>
            <div
              data-tilt
              data-tilt-perspective="2000"
              className="relative z-[3] text-center pt-[96px] transform perspective-2000 rotate-x-0 rotate-y-0 will-change-transform w-full ssm:w-3/5"
            >
              <div
                className={`block min-h-[130px] w-fit mx-auto transform transition ${
                  toggle
                    ? "opacity-100 -translate-y-1/3 delay-[0.45s]"
                    : "opacity-0 -translate-y-0  delay-[0s]"
                }`}
              >
                <ul
                  className={`transition w-fit flex flex-col gap-5 my-5 items-center justify-between ${
                    toggle ? "delay-[0.45s]" : "delay-[0s]"
                  }`}
                >
                  {NavbarList.map((data, index) => (
                    <span
                      className={`font-semibold text-black text-center cursor-pointer px-2 flex md:hidden `}
                      key={index}
                    >
                      <Link
                        href={data.link}
                        target={data.target}
                        rel="noreferrer"
                        className={`font-semibold text-lg opacity-80`}
                      >
                        {data.name}
                      </Link>
                    </span>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
