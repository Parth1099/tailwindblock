import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/common/logo.svg";
import { useState } from "react";
import { useRouter } from "next/router";
import { NavbarList } from "../../../src/utils/navbarlist";

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
      <div className="z-10  lg:px-[60px] xl:px-[110px]  bg-gradient-to-r from-[#5455BB] to-[#2077DE]  w-full top-0  transition-all duration-700 fixed right-0 left-0">
        <div className="flex justify-between px-[3%]  md:justify-between  items-center font-semibold h-[80px] md:px-5 lg:px-0 ">
          <Link href={"/"}>
            <div className="max-w-[200px] sm:max-w-[300px]  w-full flex items-center gap-3 md:gap-[15px] mr-5">
              <div>
                <Image src={Logo} alt="Main logo" />
              </div>
            </div>
          </Link>

          <div className={` flex items-center sm:gap-3 md:gap-4`}>
            {NavbarList.map((data, index) => (
              <span
                className={`font-nunito font-semibold text-white cursor-pointer hover:border-b-2 hover:pb-1 px-2  md:flex hidden h-8 ${
                  router.pathname
                    .split("/")
                    .includes(data.link.replace("/", "")) && "border-b-2"
                }`}
                key={index}
              >
                <Link href={data.link}>{data.name}</Link>
              </span>
            ))}

            <div className="flex md:hidden justify-end w-full h-full">
              <div
                id="nav-icon4"
                onClick={() => {
                  toggleClass();
                  setToggle(!toggle);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div
            className={`md:invisible w-full h-full flex flex-wrap flex-col justify-center items-center fixed left-0 top-[45px] ${
              toggle
                ? "visible ms:visible sm:visible  z-[3]"
                : "invisible -z-10"
            }`}
          >
            <div
              className={`md:invisible w-full h-full flex flex-wrap absolute left-0 top-0 ${
                toggle
                  ? "visible ms:visible sm:visible z-[3]"
                  : "invisible -z-10"
              }`}
            >
              <span
                className={`${
                  toggle
                    ? "left-0 w-full  delay-[0s]"
                    : "left-1/4 w-0  delay-[0.3s] skew-x-0"
                } absolute top-5 bg-white h-full transition -z-10`}
              ></span>
            </div>
            <div
              data-tilt
              data-tilt-perspective="2000"
              className="navbar_menu will-change-transform"
            >
              <div
                className={`block min-h-[130px] transform transition ${
                  toggle
                    ? "opacity-100 -translate-y-1/3 delay-[0.45s]"
                    : "opacity-0 -translate-y-0  delay-[0s]"
                }`}
              >
                <ul
                  className={`transition flex flex-col items-center  gap-5 my-5  justify-between ${
                    toggle ? "delay-[0.45s]" : "delay-[0s]"
                  }`}
                >
                  {NavbarList.map((data, index) => (
                    <span
                      className={`font-semibold text-black text-center cursor-pointer hover:border-b-2 hover:pb-1 px-2 flex md:hidden `}
                      key={index}
                    >
                      <Link
                        href={data.link}
                        target={data.target}
                        rel="noreferrer"
                        className={`font-semibold`}
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
