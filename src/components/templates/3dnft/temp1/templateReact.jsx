import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "@fontsource/cormorant";
import "@fontsource/montserrat";

const Navitem = ["explore", "resources", "creators"];
const discover = [
  {
    price: "$278m",
    field: "Trading Volume",
  },
  {
    price: "300k",
    field: "Art Work",
  },
  {
    price: "1.8m",
    field: "Total Users",
  },
];
const dropsection = [
  {
    img: "/assets/nft/dropimg1.png",
    title1: "Knight Sword",
    subtitle: "@santosox",
    eth: "3 ETH",
  },
  {
    img: "/assets/nft/dropimg2.png",
    title1: "Daft Punk",
    subtitle: "@punix",
    eth: "2.34 ETH",
  },
  {
    img: "/assets/nft/dropimg3.png",
    title1: "Skater Girl",
    subtitle: "@inoino",
    eth: "10.5 ETH",
  },
  {
    img: "/assets/nft/dropimg4.png",
    title1: "Grogu",
    subtitle: "@alexio",
    eth: "20.5 ETH",
  },
  {
    img: "/assets/nft/dropimg5.png",
    title1: "Foodies",
    subtitle: "@animola",
    eth: "7 ETH",
  },
  {
    img: "/assets/nft/dropimg6.png",
    title1: "Friends Kawaii",
    subtitle: "@kunai",
    eth: "80 ETH",
  },
];
const sellNft = [
  {
    img: "/assets/nft/paint.png",
    title: "Create Artwork",
    desc: "Create your collection, Add social links, a description, profile & banner images, and set a secondary sales fee",
  },
  {
    img: "/assets/nft/time.png",
    title: "Add your NFTs",
    desc: "Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content.",
  },
  {
    img: "/assets/nft/box.png",
    title: "List them for sale",
    desc: "Choose between auctions and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!",
  },
];
const topcreator = [
  {
    img: "/assets/nft/creator1.png",
    name: "Axio Sun",
    ethe: "80224",
  },
  {
    img: "/assets/nft/creator2.png",
    name: "Gloria Wolff MD",
    ethe: "29369",
  },
  {
    img: "/assets/nft/creator3.png",
    name: "Albert Trantow",
    ethe: "53808",
  },
  {
    img: "/assets/nft/creator4.png",
    name: "Alexis Mante",
    ethe: "20123",
  },
  {
    img: "/assets/nft/creator5.png",
    name: "Cary Goldner",
    ethe: "16548",
  },
];
const topcreator1 = [
  {
    img: "/assets/nft/creator6.png",
    name: "Gregg Prosacco V",
    ethe: "24507",
  },
  {
    img: "/assets/nft/creator7.png",
    name: "Angelina Koss",
    ethe: "91031",
  },
  {
    img: "/assets/nft/creator8.png",
    name: "Axio Sun",
    ethe: "80224",
  },
  {
    img: "/assets/nft/creator2.png",
    name: "Gloria Wolff MD",
    ethe: "29369",
  },
  {
    img: "/assets/nft/creator3.png",
    name: "Albert Trantow",
    ethe: "53808",
  },
];

const Nft = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex text-[#ECDBBA] flex-col items-center w-full overflow-x-hidden ">
      <div className="bg-[#ECDBBA] gap-[43px]  pb-10  flex flex-col items-center justify-center max-h-fit lg:h-[780px] w-full">
        <div className="px-[4%] relative xl:px-0 sm:px-[4%] py-[4%] flex max-w-[1180px] items-center justify-between w-full">
          <div className="cursor-pointer">
            <img src={"/assets/nft/logo.svg"} alt="logo" />
          </div>
          <div className="hidden sm:text-lg text-2xl text-[#2D4263] font-normal md:flex md:flex-row items-center sm:gap-2.5 md:gap-[60px]">
            {Navitem.map((navitem) => {
              return (
                <a href="/">
                  <div>{navitem}</div>
                </a>
              );
            })}
            <a href="/">
              <div className="font-Cormorant px-7 py-3 text-[#ECDBBA] font-bold bg-[#2D4263] rounded-[68px]">
                <button>Connect Wallet</button>
              </div>
            </a>
          </div>
          <div className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
            <img src={"/assets/nft/menu.svg"} alt="menu" />
          </div>
          <div
            className={`
            " transition-all ease-in-out"
              ${
                isNavOpen
                  ? "md:hidden flex flex-col h-screen w-full left-0 top-0 absolute  rounded-lg z-30 bg-[#2D4263]"
                  : "md:hidden flex flex-col h-screen w-full top-0 left-full  absolute  rounded-lg z-30 bg-[#2D4263]"
              } 
           `}
          >
            <div
              className="flex pt-5 items-center justify-end text-xl font-bold px-[10%] w-full"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <img src={"/assets/nft/closed.svg"} alt="Close" className="h-7" />
            </div>
            <div className="flex flex-col w-full items-center justify-center h-screen  gap-[30px] sm:gap-[50px] md:hidden sm:text-lg text-[20px] leading-[29px] font-normal md:flex-row md:gap-[60px]">
              {Navitem.map((navitem) => {
                return (
                  <a href="/">
                    <div>{navitem}</div>
                  </a>
                );
              })}
              <div className="font-Cormorant px-7 py-[7px] text-[#2D4263] bg-[#ECDBBA] rounded-[68px]">
                <button>Connect Wallet</button>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:flex items-center justify-between max-w-[1180px] w-full">
          <div className="text-start flex flex-col gap-2.5 sm:gap-3 md:gap-5 px-[4%] xl:px-0 md:max-w-[430px] lg:max-w-[518px] w-full ">
            <div className="text-[#2D4263] font-Cormorant text-[25px] sm:text-[40px] md:text-[50px] lg:text-[75px] md:leading-[70px] lg:leading-[87px] font-medium tracking-[0.03em]">
              Discover{" "}
              <span className="text-[#C84B31] underline">
                Rare 3D Collections
              </span>{" "}
              in the
              <span className="text-[#C84B31] underline">World</span>
            </div>
            <div className="text-[#2D4263] text-[14px] sm:text-xl md:text-sm font-montserrat">
              The largest 3D NFT marketplace authentic and truly unique digital
              creation. Create yout own NFT dream gallery
            </div>
            <div>
              <div className="w-full justify-between flex gap-2.5 md:gap-[30px] lg:gap-[50px] ">
                {discover.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="max-w-[150px] w-full gap-[6px] text-[#2D4263] flex flex-col text-center"
                    >
                      <div className="text-xl sm:text-3xl md:text-[32px] font-semibold leading-[36px]">
                        {data.price}
                      </div>
                      <div className="text-[10px] sm:text-base md:text-[10px] whitespace-nowrap md:text-base font-normal tracking-[0.03em]">
                        {data.field}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <a
              href="/"
              className=" w-full lg:max-w-[150px] text-center text-[#2D4263] px-7 py-3 border-2 border-[#2D4263] rounded-[68px] hover:text-white duration-1000 hover:bg-[#2D4263]"
            >
              <button>Join Now</button>
            </a>
          </div>
          <div className="px-[4%]">
            <img src={"/assets/nft/bubble.png"} alt="bubble" />
          </div>
        </div>
      </div>
      <div className="bg-[#191919] w-full flex flex-col  gap-[123px] justify-center items-center ">
        <div className="px-[4%]">
          <div className="max-w-[1180px] flex flex-col gap-[50px]  lg:gap-[123px]">
            <div className="mt-[30px] md:mt-[93px] flex flex-col gap-[50px] max-w-[1180px] justify-center w-full">
              <div className=" flex justify-between items-center">
                <div className="font-Cormorant  text-[30px] md:text-[48px] font-bold leading-[58px] tracking-[0.03em]">
                  Hot Drops
                </div>
                <a
                  href="#"
                  className="text-[12px] font-semibold text-center px-[30px] md:max-w-[166px] md:w-full py-3  border-2 border-[#ECDBBA] rounded-[68px] hover:text-white duration-1000 hover:bg-[#2D4263] hover:border-none"
                >
                  <button>View More</button>
                </a>
              </div>
              <div>
                <div className="items-center justify-center flex flex-wrap gap-[30px] md:gap-[50px] lg:gap-[83px] md:px-0 px-[3%] w-full ">
                  {dropsection.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="hover:scale-105 duration-1000 cursor-pointer flex flex-col justify-center items-center md:max-w-[300px]  lg:max-w-[338px]   w-full py-[4%] lg:py-[2%]    max-h-fit xl:h-[410px] border-[4px] border-[#ECDBBA] rounded-[28px]"
                      >
                        <div className=" px-[4%]  w-full flex flex-col gap-[16px]">
                          <img
                            src={data.img}
                            alt="dropmainback"
                            className="rounded-[24px] w-full "
                          />
                          <div className="w-full flex flex-col gap-[16px]">
                            <div className="flex flex-col gap-[16px]">
                              <div className="flex flex-col gap-[3px] items-start justify-start">
                                <div className="font-Cormorant text-[28px] font-bold leading-[34px]">
                                  {data.title1}
                                </div>
                                <div className="font-montserrat text-[14px] font-normal leading-[17px]">
                                  {data.subtitle}
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div className="font-montserrat text-[14px] font-bold leading-[17px]">
                                  3 ETH
                                </div>
                                <div>
                                  <img
                                    src={"/assets/nft/dropicon.svg"}
                                    alt="ethe"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="items-center  flex flex-col gap-[36px]">
              <div className="font-Cormorant text-[25px] sm:text-[48px] font-bold leading-[58px]">
                Create and sell your NFTs
              </div>

              <div className="flex flex-wrap justify-center gap-[40px] xl:gap-[84px] px-[4%] lg:px-0">
                {sellNft.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="px-[17px] hover:border-1 duration-1000 hover:shadow-pupularCard hover:shadow-white w-full lg:max-w-[280px] xl:max-w-[337px] pb-[2%] max-h-fit bg-[#2D4263] border-[4px] border-[#2D4263] rounded-[28px] flex flex-col gap-2.5 items-center justify-center"
                    >
                      <div className="max-w-[200px]">
                        <img src={data.img} alt="" />
                      </div>
                      <div className="whitespace-nowrap font-Cormorant text-[23px] sm:text-[36px] md:text-[26px] lg:text-[36px] font-semibold leading-[44px]">
                        {data.title}
                      </div>
                      <div className="font-montserrat text-[15px] text-center md:text-[22px] lg:text-[16px] md:leading-[25px] font-normal leading-[20px] tracking-[0.03em]">
                        {data.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[70px]">
          <div className="text-[48px] font-Cormorant leading-[58px] font-bol">
            Top Creators
          </div>
          <div className="flex  ">
            <Marquee gradient={false} pauseOnHover>
              {topcreator.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="max-w-fit   flex items-center gap-[22px]"
                  >
                    <div>
                      <img src={data.img} alt="img" />
                    </div>
                    <div className="text-start flex flex-col gap-2.5">
                      <div className="whitespace-nowrap font-Cormorant text-2xl leading-[29px] tracking-[0.03em] font-semibold">
                        {data.name}
                      </div>
                      <div className="flex gap-2.5 items-center font-montserrat text-[14px] leading-[17px] tracking-[0.03em] font-normal">
                        <img src={"/assets/nft/dropicon.svg"} alt="dropicon" />
                        {data.ethe}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Marquee>
          </div>
          <div className="flex  ">
            <Marquee gradient={false} speed={20} direction="right" pauseOnHover>
              {topcreator1.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="max-w-fit   flex items-center gap-[22px]"
                  >
                    <div className="">
                      <img src={data.img} alt="" />
                    </div>
                    <div className="text-start flex flex-col gap-2.5">
                      <div className="whitespace-nowrap font-Cormorant text-2xl leading-[29px] tracking-[0.03em] font-semibold">
                        {data.name}
                      </div>
                      <div className="flex gap-2.5 items-center font-montserrat text-[14px] leading-[17px] tracking-[0.03em] font-normal">
                        <img src={"/assets/nft/dropicon.svg"} alt="dropicon" />
                        {data.ethe}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>

        <div className="px-[4%] w-full">
          <div className="mb-[70px] flex gap-[36px]  flex-col justify-center items-center w-full bg-[#C84B31] max-h-fit py-[3%] rounded-[24px]">
            <div className="flex flex-col text-center items-center gap-[15px]">
              <div className="text-[20px] sm:text-[34px] lg:text-[48px] leading-[58px] font-bold font-Cormorant tracking-[0.03em]">
                Join Our Community
              </div>
              <div className="font-montserrat tracking-[0.03em] px-2 text-[15px] md:text-xl leading-[24px] font-normal">
                Meet the company team, artist and collector for platform
                updates, announcements, and more ...
              </div>
            </div>
            <a
              href="/"
              className="max-w-[252px] text-lg w-full bg-[#2D4263]  py-3 md:py-3 flex gap-2.5 justify-center items-center rounded-[68px]"
            >
              <img src={"/assets/nft/discord.svg"} alt="discord" />
              Launch Discord
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className=" bg-[#191919] w-full flex justify-center pb-[30px] flex-col items-center gap-[50px]">
        <div className=" border-[5px] border-[#ECDBBA] w-full "></div>
        <div className="px-[5%] xl:px-0   flex-col flex gap-[20px]  md:flex-row  md:gap-[20px]  md:flex items-start justify-between max-w-[1180px] w-full">
          <div className="text-start -mt-[25px] max-w-[464px] w-full flex flex-col  gap-[11px] ">
            <a
              href="#"
              className="text-[64px] leading-[78px] font-extrabold font-montserratAlter "
            >
              ED
            </a>
            <div className="text-[16px] leading-[20px] tracking-[0.03em] font-normal font-montserrat ">
              The largest 3D NFT marketplace. Authentic and truly unique digital
              creation. Signed and issued by the creator. made possible by
              blockchain technology
            </div>
          </div>
          <div className=" items-start  flex flex-col gap-2 md:gap-[21px]">
            <div className="font-Cormorant whitespace-nowrap  sm:text-2xl leading-[29px] tracking-[0.03em] font-bold">
              Quick Links
            </div>
            <div className="text-start font-montserrat text-[16px] leading-[20px] tracking-[0.03em] flex flex-col gap-2.5 font-medium">
              <a href="/"> About</a>
              <a href="/"> Blog</a>
              <a href="/"> Press</a>
            </div>
          </div>
          <div className="items-start  flex flex-col gap-2 md:gap-[21px]">
            <div className="font-Cormorant text-2xl leading-[29px] tracking-[0.03em] font-bold">
              Resources
            </div>
            <div className="text-start font-montserrat text-[16px] leading-[20px] tracking-[0.03em] flex flex-col gap-2.5 font-medium">
              <a href="/"> Help Center</a>
              <a href="/"> Community</a>
              <a href="/"> Partners</a>
            </div>
          </div>
          <div className="items-start flex flex-col gap-2 md:gap-[21px]">
            <div className="text-start font-Cormorant text-2xl leading-[29px] tracking-[0.03em] font-bold">
              Subscribe
            </div>
            <div className="font-montserrat text-[16px] leading-[20px] tracking-[0.03em] flex flex-col gap-2.5 font-medium">
              <a
                href="/"
                className="border whitespace-nowrap flex justify-center items-center gap-2.5 px-[24px] border-[#ECDBBA] max-w-[221px] py-[8px] rounded-[68px]"
              >
                Get NFT updates
                <img src={"/assets/nft/rightarrow.svg"} alt="get nft" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
