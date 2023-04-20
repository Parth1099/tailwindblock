import "@fontsource/work-sans";
import classNames from "classnames";
import { useState } from "react";

const discover = [
  {
    digit: "240k+",
    field: "Total Sale",
  },
  {
    digit: "100k+",
    field: "Auctions",
  },
  {
    digit: "240k+",
    field: "Artists",
  },
];

const trending = [
  {
    img1: "/assets/crypto/animal1.png",
    img2: "/assets/crypto/animal2.png",
    img3: "/assets/crypto/animal3.png",
    img4: "/assets/crypto/animal4.png",
    title1: "DSGN Animals",
    title2: "MrFox",
  },
  {
    img1: "/assets/crypto/mushroom1.png",
    img2: "/assets/crypto/mushroom2.png",
    img3: "/assets/crypto/mushroom3.png",
    img4: "/assets/crypto/mushroom4.png",
    title1: "Magic Mushrooms",
    title2: "Shroomie",
  },
  {
    img1: "/assets/crypto/machine1.png",
    img2: "/assets/crypto/machine2.png",
    img3: "/assets/crypto/machine3.png",
    img4: "/assets/crypto/machine4.png",
    title1: "Disco Machines",
    title2: "BeKind2Robots",
  },
];

const creator = [
  {
    id: 1,
    img: "/assets/crypto/creator1.png",
    name: "Keepitreal",
    sale: "34.53 ETH",
  },
  {
    id: 1,
    img: "/assets/crypto/creator2.png",
    name: "DigiLab",
    sale: "34.53 ETH",
  },
  {
    id: 1,
    img: "/assets/crypto/creator3.png",
    name: "GravityOne",
    sale: "34.53 ETH",
  },
  {
    id: 1,
    img: "/assets/crypto/creator4.png",
    name: "Juanie",
    sale: "34.53 ETH",
  },
  {
    id: 1,
    img: "/assets/crypto/creator5.png",
    name: "BlueWhale",
    sale: "34.53 ETH",
  },
  {
    id: 1,
    img: "/assets/crypto/creator6.png",
    name: "mr fox",
    sale: "34.53 ETH",
  },
  {
    id: 1,
    img: "/assets/crypto/creator7.png",
    name: "Shroomie",
    sale: "34.53 ETH",
  },
  {
    id: 1,
    img: "/assets/crypto/creator8.png",
    name: "robotica",
    sale: "34.53 ETH",
  },
  {
    id: 1,
    img: "/assets/crypto/creator9.png",
    name: "RustyRobot",
    sale: "34.53 ETH",
  },
  {
    id: 1,
    img: "/assets/crypto/creator10.png",
    name: "animakid",
    sale: "34.53 ETH",
  },
  {
    id: 1,
    img: "/assets/crypto/creator11.png",
    name: "Dotgu",
    sale: "34.53 ETH",
  },
  {
    id: 1,
    img: "/assets/crypto/creator12.png",
    name: "Ghiblier",
    sale: "34.53 ETH",
  },
];

const nftdata = [
  {
    img: "/assets/crypto/nft1.png",
    img1: "/assets/crypto/NftAvatar1.png",
    title1: "Distant Galaxy",
    title2: "MoonDancer",
    price: "1.63 ETH",
    bid: "0.33 wETH",
  },
  {
    img: "/assets/crypto/nft2.png",
    img1: "/assets/crypto/NftAvatar2.png",
    title1: "Life On Edena",
    title2: "NebulaKid",
    price: "1.63 ETH",
    bid: "0.33 wETH",
  },
  {
    img: "/assets/crypto/nft3.png",
    img1: "/assets/crypto/NftAvatar3.png",
    title1: "AstroFiction",
    title2: "Spaceone",
    price: "1.63 ETH",
    bid: "0.33 wETH",
  },
];

const browse = [
  {
    img: "/assets/crypto/browse1.png",
    title: "Art",
    icon: "/assets/crypto/brush.svg",
  },
  {
    img: "/assets/crypto/browse2.png",
    title: "Collectibles",
    icon: "/assets/crypto/swatches.svg",
  },
  {
    img: "/assets/crypto/browse3.png",
    title: "Music",
    icon: "/assets/crypto/music.svg",
  },
  {
    img: "/assets/crypto/browse4.png",
    title: "Photography",
    icon: "/assets/crypto/photography.svg",
  },
  {
    img: "/assets/crypto/browse5.png",
    title: "Video",
    icon: "/assets/crypto/video.svg",
  },
  {
    img: "/assets/crypto/browse6.png",
    title: "Utility",
    icon: "/assets/crypto/utility.svg",
  },
  {
    img: "/assets/crypto/browse7.png",
    title: "Sport",
    icon: "/assets/crypto/sport.svg",
  },
  {
    img: "/assets/crypto/browse8.png",
    title: "Virtual Worlds",
    icon: "/assets/crypto/world.svg",
  },
];

const howwoks = [
  {
    img: "/assets/crypto/workicon1.png",
    title: "Setup Your wallet",
    desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    img: "/assets/crypto/workicon2.png",
    title: "Create Collection",
    desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    img: "/assets/crypto/workicon3.png",
    title: "Start Earning",
    desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];

const Navitem = ["Marketplace", "Rankings", "Connect a wallet"];

const Button = ({
  size,
  className,
  color,
  font,
  icon,
  type,
  onClick,
  label,
  endIcon,
  startIcon,
  endIconClassName,
  startIconClassName,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(
        className,
        "flex justify-center items-center",
        size ? size : "",
        color ? color : "bg-blue",
        font ? font : "font-[500] tracking-tight text-white"
      )}
      {...props}
    >
      {startIcon && (
        <div className={classNames(startIconClassName || "")}>{startIcon}</div>
      )}
      <div className="relative">
        <div className="flex justify-center items-center gap-3">
          <div className="label">{label}</div>
          {icon && <div>{icon}</div>}
        </div>
      </div>
      {endIcon && (
        <div className={classNames(endIconClassName || "")}>{endIcon}</div>
      )}
    </button>
  );
};

const Crypto = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-10 lg:gap-20 font-worksans bg-[#2B2B2B]">
      <div className=" w-full flex items-center justify-between gap-5 px-3 lg:px-5 xl:px-12 py-[15px] md:py-5">
        <a href="#_" className="max-w-[200px] lg:max-w-[250px] ">
          <img src={"/assets/crypto/logo.svg"} alt="logo" />
        </a>
        <div className="hidden capitalize md:flex whitespace-nowrap text-white items-center gap-5 lg:gap-[50px] text-base font-semibold leading-[22px]">
          {Navitem.map((navitem, index) => {
            return (
              <a key={index} href="#_">
                {navitem}
              </a>
            );
          })}
          <Button
            startIcon={<img src={"/assets/crypto/user.svg"} alt="user" />}
            className="lg:px-[30px] px-[20px] whitespace-nowrap py-[6px] text-center lg:py-3 rounded-[20px] flex justify-center gap-[10px]"
            color="bg-[#A259FF]"
            label="Sing Up"
          />
        </div>
        <div
          className="relative md:hidden cursor-pointer"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <img src={"/assets/crypto/navmenu.svg"} alt="menu" />
        </div>
        <div
          className={`absolute ${
            isNavOpen
              ? "md:hidden text-white flex flex-col items-center justify-center  right-0 top-0 h-40 w-fit absolute rounded-lg z-30 bg-[#201f1f]"
              : "hidden"
          }   `}
        >
          <div
            className={`pr-4 pt-3 items-end flex-col justify-end w-full ${
              isNavOpen ? "flex" : "hidden"
            }`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <h1 className="text-white">X</h1>
          </div>

          <div className="flex flex-col w-full items-center justify-center px-6 h-screen text-sm gap-[10px] md:hidden  font-normal ">
            {Navitem.map((navitem, index) => {
              return (
                <a key={index} href="#_">
                  {navitem}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:max-w-[690px] px-[15px] md:px-0 capitalize sm:max-w-[590px] xl:max-w-[1050px] lg:max-w-[900px] flex flex-col items-center gap-10 md:gap-[80px] lg:gap-[100px]">
        <div className=" w-full flex flex-col sm:flex-row justify-between gap-[30px]">
          <div className="flex flex-col  gap-5 md:gap-[30px] md:max-w-[330px]  lg:max-w-[510px] text-white text-start">
            <div className=" capitalize text-[28px] font-semibold leading-[39px] md:text-[38px] lg:text-[67px] md:leading-[45px] lg:leading-[73px] text-start">
              Discover<br></br> digital art & Collect NFTs
            </div>
            <div className="text-start  -mt-[10px] text-base md:text-base   leading-[22px] md:leading-[22px]  font-normal">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </div>
            <div className="hidden sm:flex sm:flex-col gap-[30px]">
              <Button
                startIcon={
                  <img src={"/assets/crypto/rocket.svg"} alt="rocket" />
                }
                className="max-w-[224px]  whitespace-nowrap py-[15px] lg:py-[19px] rounded-[20px] flex justify-center items-center gap-[15px]"
                font="font-semibold text-base leading-[22px]"
                color="bg-[#A259FF]"
                label="Get Started"
              />
              <div className="flex justify-between gap-[30px]  w-full">
                {discover.map((data, index) => {
                  return (
                    <div key={index} className="max-w-[150px] w-full">
                      <div className="!font-spacemono text-[22px] md:text-[22px]  font-bold md:leading-[35px] lg:leading-[39px]">
                        {data.digit}
                      </div>
                      <div className="text-base md:text-base lg:text-[24px] font-normal leading-[38px]">
                        {data.field}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="md:max-w-[330px] lg:max-w-[510px]  w-full rounded-[20px] max-h-[540px] text-white">
            <img
              src={"/assets/crypto/space.png"}
              alt="space"
              className="w-full"
            />
            <div className="h-[109px] gap-[10px] px-5 py-[22px] flex flex-col justify-start bg-[#3B3B3B] rounded-b-[20px] ">
              <div className="flex text-[22px] font-semibold leading-[30px]">
                Space Walking
              </div>
              <div className="flex gap-[12px] items-center">
                <img src={"/assets/crypto/man.svg"} alt="ani" />
                <div className="text-base font-normal leading-[22px]">
                  Animakid
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] flex flex-col text-white gap-[30px] sm:hidden max-w-full">
            <a
              href="#_"
              className=" max-w-full whitespace-nowrap  py-[15px] lg:py-[19px] bg-[#A259FF] rounded-[20px] flex justify-center items-center gap-[15px]"
            >
              <img src={"/assets/crypto/rocket.svg"} alt="rocket" />
              <button className=" font-semibold text-base leading-[22px]">
                Get Started
              </button>
            </a>
            <div className="flex justify-between xs:px-[5%]">
              {discover.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="text-[22px] md:text-[22px]  font-bold md:leading-[35px] lg:leading-[39px]">
                      {data.digit}
                    </div>
                    <div className="text-base md:text-base lg:text-[24px] font-normal leading-[38px]">
                      {data.field}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className=" md:px-0 text-white flex flex-col gap-10  lg:gap-[60px] w-full ">
          <div className="flex flex-col items-start gap-[10px] justify-start text-start">
            <div className="text-[28px] lg:text-[38px] leading-[39px] lg:leading-[45px] font-semibold">
              Trending Collection
            </div>
            <div className="flex justify-between">
              <div className="text-base md:text-[22px] md:leading-[22px] lg:leading-[35px] font-normal">
                Checkout our weekly updated trending collection.
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-[30px]">
            {trending.map((data, i) => {
              return (
                <div
                  key={i}
                  className={` px-[7%] sm:px-0 md:max-w-[330px] w-full  flex flex-col gap-[15px] ${
                    i === 1 && "hidden sm:flex"
                  } ${i === 2 && "hidden md:flex"} `}
                >
                  <div>
                    <img src={data.img1} alt="img1" className="w-full" />
                  </div>
                  <div className="w-full justify-between sm:flex-row flex gap-[15px]">
                    <div>
                      <img src={data.img2} alt="img2" className="w-full" />
                    </div>
                    <div>
                      <img src={data.img3} alt="img3" />
                    </div>
                    <div className="w-full max-w-[100px] max-h-[100px] flex justify-center items-center bg-[#A259FF]  rounded-[20px] text-base lg:text-[22px] font-bold leading-[35px] ">
                      1025+
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px] text-start">
                    <div className="flex text-[22px] font-semibold leading-[30px]">
                      {data.title1}
                    </div>
                    <div className="flex gap-[12px] items-center">
                      <img src={data.img4} alt="img4" />
                      <div className="text-base font-normal leading-[22px]">
                        {data.title2}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Creator */}
        <div className=" sm:mt-0 text-white  flex flex-col justify-center gap-10 sm:gap-[60px] max-w-[690px] md:max-w-[800px]  xl:max-w-[1050px]  lg:max-w-[900px]  w-full ">
          <div className=" sm:px-0 flex justify-between text-start">
            <div className="flex flex-col gap-[10px] sm:max-w-[343px] lg:max-w-full">
              <div className="text-[28px] lg:text-[38px] leading-[39px]  lg:leading-[45px] font-semibold">
                Top creators
              </div>
              <div className="text-base lg:text-[22px] leading-[22px] lg:leading-[35px] font-normal">
                Checkout Top Rated Creators on the NFT Marketplace
              </div>
            </div>
            <div className="hidden sm:flex items-end justify-between">
              <Button
                startIcon={
                  <img src={"/assets/crypto/rocket.svg"} alt="rocket" />
                }
                className="px-[30px] lg:px-[50px] py-[13px] rounded-[20px] border-2 border-[#A259FF] flex gap-[15px] items-center"
                font="font-semibold text-base font-semibold"
                label="View Rankings"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-5  sm:gap-[30px] justify-center w-full ">
            {creator.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`w-full relative   md:max-w-[330px]  lg:max-w-[200px] xl:max-w-[240px] h-[100px] lg:h-[239px] bg-[#3B3B3B] rounded-[20px] flex lg:flex-col gap-5 justify-center items-center ${
                    i > 5 && "hidden lg:flex"
                  }`}
                >
                  <div className="absolute text-[#858584] text-center flex items-center justify-center top-[18px] left-[20px] w-[30px] h-[30px] bg-[#2B2B2B] rounded-full">
                    {i + 1}
                  </div>
                  <div className="flex justify-start  max-w-[200px]">
                    <div className="w-[60px] lg:w-[120px] lg:h-[120px] rounded-full bg-white">
                      <img src={data.img} alt="img" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <div className="text-start lg:text-center  text-[22px] leading-[30px] font-semibold">
                      {data.name}
                    </div>
                    <div className="text-base leading-[22px] font-normal">
                      <span className="text-[#858584]">Total Sales:</span> 34.53
                      ETH
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="w-full px-[10%] flex sm:hidden items-end justify-between">
              <div className="max-w-full w-full px-[30px] lg:px-[50px] py-[13px] rounded-[20px] border-2 border-[#A259FF] justify-center flex gap-[15px] items-center">
                <img src={"/assets/crypto/rocket.svg"} alt="ranking" />
                <button className="text-base leading-[22px] font-semibold">
                  View Rankings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Browse */}
        <div className="mt-10 sm:mt-0 text-white flex flex-col justify-center gap-10 sm:gap-[30px] lg:gap-[60px]   w-full ">
          <div className="flex justify-start lg:justify-start ">
            <div className="text-[28px] lg:text-[38px] leading-[29px] lg:leading-[45px] font-semibold">
              Browse Categories
            </div>
          </div>
          <div className="flex  flex-wrap items-center justify-around   gap-[15px] sm:gap-[25px] md:gap-[30px] max-w-[1050px]">
            {browse.map((data, index) => {
              return (
                <div
                  key={index}
                  className="max-w-[150px] rounded-[20px] overflow-hidden sm:max-w-[120px] md:max-w-[150px]  lg:max-w-[200px]  xl:max-w-[240px]   flex flex-col w-full "
                >
                  <div className="relative">
                    <div
                      style={{
                        backgroundImage: `url(${data?.img})`,
                        filter: "blur(8px)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="h-[142px] lg:h-[240px] flex flex-row justify-center items-center  rounded-t-[20px] bg-[#3B3B3B]"
                    ></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <img src={data.icon} alt="img" />
                    </div>
                  </div>
                  <div className="lg:pl-[30px] whitespace-nowrap h-[67px] lg:h-[76px] text-base sm:text-xs md:text-base lg:text-[22px] leading-5 font-semibold text-start px-5 sm:px-[10px] pt-[30px] rounded-b-[20px] bg-[#3B3B3B]">
                    {data.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* NFT */}
        <div className="mt-10 sm:mt-0 text-white  flex flex-col justify-center gap-10 lg:gap-[60px] w-full ">
          <div className=" flex justify-between text-start">
            <div className="flex flex-col gap-[10px]">
              <div className="text-[28px] lg:text-[38px] leading-[39px] lg:leading-[45px] font-semibold">
                Discover More NFTs
              </div>
              <div className="text-base lg:text-[22px] leading-[22px] lg:leading-[35px] font-normal">
                Explore new trending NFTs
              </div>
            </div>
            <div className="sm:flex hidden  items-end justify-end">
              <Button
                startIcon={
                  <img src={"/assets/crypto/rocket.svg"} alt="rocket" />
                }
                className="px-[50px] py-[12px] rounded-[20px] border-2 border-[#A259FF]  gap-2.5 "
                font="font-semibold text-base font-semibold"
                label="See All"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center rounded-[20px]  sm:flex-row gap-[30px] w-full  max-w-[1050px]">
            {nftdata.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`max-w-[330px] lg:max-w-[330px] h-[469px] w-full ${
                    i === 2 && "sm:hidden lg:block"
                  }`}
                >
                  <div className="rounded-t-[20px]  ">
                    <img src={data.img} alt="img" className="w-full " />
                  </div>
                  <div className="h-[173px] py-5  bg-[#3B3B3B] rounded-b-[20px] ">
                    <div className="flex flex-col justify-center items-center gap-[25px] ">
                      <div className="text-start flex flex-col gap-[10px]  max-w-[270px] w-full">
                        <div className="flex text-[22px] font-semibold leading-[30px]">
                          {data.title1}
                        </div>
                        <div className="flex gap-[12px] items-center">
                          <img src={data.img1} alt="img1" />
                          <div className="!font-spacemono text-base font-normal leading-[22px]">
                            {data.title2}
                          </div>
                        </div>
                      </div>
                      <div className="!font-spacemono flex justify-between max-w-[270px] w-full">
                        <div className="flex flex-col gap-[8px]">
                          <div className="text-start text-xs text-[#858584] font-normal leading-[13px]">
                            Price
                          </div>
                          <div className="text-base text-white font-normal leading-[21px]">
                            1.63 ETH
                          </div>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                          <div className="text-xs text-[#858584] font-normal leading-[13px]">
                            Highest Bid
                          </div>
                          <div className="text-base text-white font-normal leading-[21px]">
                            0.33 wETH
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

      <div className=" bg-nft-back  before:bg-bg-linear before:absolute relative before:top-0 before:w-full before:h-full bg-cover bg-no-repeat before:left-0 w-full h-[660px] ">
        <div className="-bottom-[25%] sm:-bottom-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2  absolute md:flex-row flex-col flex gap-[30px] sm:gap-[80px]  ">
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-center items-center text-white gap-[10px] max-w-[151px] py-[10px] bg-[#3B3B3B] rounded-[20px]">
              <img src={"/assets/crypto/mushroom4.png"} alt="img" />
              <button>Shroomie</button>
            </div>
            <div className="sm:whitespace-nowrap text-[38px] leading-[45px] font-semibold text-white max-w-[375px] text-start">
              Magic Mashrooms
            </div>
            <Button
              startIcon={<img src={"/assets/crypto/eye.svg"} alt="eye" />}
              className="sm:flex hidden bg-white py-[19px] font-semibold   justify-center items-center gap-[15px] rounded-[20px] max-w-[198px]  "
              font="font-semibold text-base font-semibold text-[#2B2B2B]"
              label="See NFT"
            />
          </div>
          <div className="flex  text-white items-end ">
            <div className="flex flex-col gap-[10px] justify-center items-center  w-[295px] h-[144px] rounded-[20px] bg-[#3b3b3b80]">
              <div className="max-w-[235px]  flex flex-col gap-[10px]">
                <div className="flex items-start w-full !font-spacemono ">
                  Auction ends in:
                </div>
                <div className="flex gap-[10px]">
                  <div className="flex flex-col gap-[5px]">
                    <div className="text-[38px] leading-[45px] font-bold">
                      59
                    </div>
                    <div className="text-start text-xs leading-[12px] font-normal">
                      Hours
                    </div>
                  </div>
                  <div className="text-[38px] leading-[45px] font-bold">:</div>
                  <div className="flex flex-col gap-[5px]">
                    <div className="text-[38px] leading-[45px] font-bold">
                      59
                    </div>
                    <div className="text-start text-xs leading-[12px] font-normal">
                      Minutes
                    </div>
                  </div>
                  <div className="text-[38px] leading-[45px] font-bold">:</div>
                  <div className="flex flex-col gap-[5px]">
                    <div className="text-[38px] leading-[45px] font-bold">
                      59
                    </div>
                    <div className="text-start text-xs leading-[12px] font-normal">
                      Seconds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex sm:hidden bg-white py-[19px] font-semibold   justify-center items-center gap-[15px] rounded-[20px]  text-[#2B2B2B]">
            <img src={"/assets/crypto/eye.svg"} alt="img" />
            <button>See NFT</button>
          </div>
        </div>
      </div>

      <div className="md:max-w-[690px] capitalize sm:max-w-[590px] w-full   xl:max-w-[1050px] lg:max-w-[900px] flex flex-col items-center gap-10 md:gap-[80px] lg:gap-[100px]">
        <div className="text-white px-[15px] md:px-0 flex flex-col  justify-center gap-10 lg:gap-[60px]  w-full ">
          <div className=" sm:pl-0 flex flex-col lg:gap-[10px] justify-start text-start">
            <div className="text-[28px] lg:text-[38px] leading-[39px] lg:leading-[45px] font-semibold">
              How it works
            </div>
            <div className="text-base lg:text-[22px] leading-[35px] font-normal">
              Find out how to get started
            </div>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex-row gap-[30px] w-full max-w-[1050px]">
            {howwoks.map((data, index) => {
              return (
                <div
                  key={index}
                  className=" md:max-w-[330px] w-full p-[20px] sm:p-0   max-h-fit sm:h-[337px] lg:h-[439px] bg-[#3B3B3B] rounded-[20px] flex sm:flex-col gap-5    sm:justify-center items-center"
                >
                  <div>
                    <img
                      src={data.img}
                      alt="img"
                      className="min-w-[100px] h-[100px] sm:h-[150px] lg:h-auto"
                    />
                  </div>
                  <div className="text-start sm:text-center max-w-[155px] md:max-w-[170px] lg:max-w-[270px] w-full flex flex-col gap-[10px]">
                    <div className="text-base lg:text-[22px] leading-[30px] font-semibold">
                      {data.title}
                    </div>
                    <div className="normal-case text-xs lg:text-base leading-[16px] lg:leading-[22px] font-normal">
                      {data.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-[15px] lg:px-[10px] md:px-[20px] xl:px-0 w-full sm:bg-[#3B3B3B] rounded-[20px]  sm:h-[360px]  lg:h-[430px] flex flex-col sm:flex-row gap-[30px] lg:gap-10 xl:gap-[80px] items-start md:items-center justify-center">
          <div>
            <img
              src={"/assets/crypto/weekly.png"}
              alt="week"
              className="w-[400px]"
            />
          </div>
          <div className="max-w-[300px] md:max-w-[375px] lg:max-w-[425px] w-full text-start text-white flex flex-col gap-5 lg:gap-10 ">
            <div className="flex flex-col gap-[10px]">
              <div className="text-[28px] lg:text-[38px] font-semibold leading-[45px]">
                Join our weekly digest
              </div>
              <div className="text-base lg:text-[22px] font-normal  leading-[22px] lg:leading-[35px]">
                Get exclusive promotions & updates straight to your inbox.
              </div>
            </div>
            <div className="hidden md:flex max-w-[425px]  bg-white rounded-[20px]  items-center justify-between">
              {/* <div className="normal-case  text-black whitespace-nowrap pl-[20px] text-base font-normal leading-[22px] ">
                Enter your email here
              </div> */}
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email here"
                className="w-full outline-none h-fit text-black pl-[20px] text-xs lg:text-base font-normal rounded-l-[20px] leading-[22px] "
              />
              <a
                href="#"
                className="px-[50px] py-[17px] text-base font-semibold leading-[22px] rounded-[20px]  bg-[#A259FF] flex justify-center items-center gap-[15px]"
              >
                <img src={"/assets/crypto/email.svg"} alt="email" />
                <button className=" ">Subscribe</button>
              </a>
            </div>
            <div className="md:hidden flex flex-col gap-4">
              <div className="normal-case max-w-[300px] text-base w-full bg-white border py-[12px] rounded-[20px] text-black border-[#A259FF]">
                <button className="px-5">Enter Your Email Address</button>
              </div>
              <a
                href="#_"
                className="px-[50px] py-[12px] text-base font-semibold leading-[22px] rounded-[20px]  bg-[#A259FF] flex justify-center items-center gap-[15px]"
              >
                <img src={"/public/assets/crypto/email.svg"} alt="subscribe" />
                <button>Subscribe</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full pl-[5%] pb-[20px] lg:px-0  text-start max-h-fit   flex flex-col gap-5 justify-center items-start sm:items-center bg-[#3B3B3B]">
        <div className="max-w-[315px] sm:max-w-[690px] md:max-w-[900px] xl:max-w-[1050px] md:px-[20px]  w-full">
          <div className="flex flex-col gap-[30px] pt-[40px] md:flex-row md:justify-between ">
            <div className="text-[#CCCCCC] flex flex-col gap-[25px]">
              <div>
                <img src={"/assets/crypto/logo.svg"} alt="img" />
              </div>
              <div className="flex flex-col gap-5">
                <div className=" lg:max-w-[238px]">
                  NFT marketplace UI created with Anima for Figma.
                </div>
                <div className="flex flex-col gap-[15px]">
                  <div>Join our community</div>
                  <div className="flex gap-[12px]">
                    <img src={"/assets/crypto/discord.svg"} alt="discord" />
                    <img src={"/assets/crypto/youtube.svg"} alt="youtube" />
                    <img src={"/assets/crypto/twitter.svg"} alt="twitter" />
                    <img src={"/assets/crypto/instagram.svg"} alt="instagram" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[25px] max-w-[240px] ">
              <div className="text-[22px] font-bold leading-[35px] text-white">
                Explore
              </div>
              <div className="flex flex-col gap-5  text-base font-normal leading-[22px] text-[#CCCCCC]">
                {Navitem.map((navitem, index) => {
                  return (
                    <a key={index} href="#_">
                      {navitem}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="md:max-w-[420px] w-full flex flex-col lg gap-[25px] ">
              <div className="text-[22px] capitalize !font-spacemono font-bold leading-[35px] text-white">
                Join our weekly digest
              </div>
              <div className="flex flex-col gap-5 text-base font-normal leading-[22px] text-[#CCCCCC]">
                <div className="lg:max-w-[330px]">
                  Get exclusive promotions & updates straight to your inbox.
                </div>

                <div className="hidden sm:flex max-w-[420px] w-full  bg-white rounded-[20px]   items-center justify-between">
                  {/* <div className="text-black pl-[20px] text-xs lg:text-base font-normal leading-[22px] ">
                    Enter your email here
                  </div> */}
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email here"
                    className="w-full h-full outline-none text-black pl-[20px] text-xs lg:text-base font-normal rounded-l-[20px] leading-[22px] "
                  />
                  <div className="px-[50px] text-white py-[12px] lg:py-[17px] text-base font-semibold leading-[22px] rounded-[20px]  bg-[#A259FF]">
                    <button className=" ">Subscribe</button>
                  </div>
                </div>

                <div className="sm:hidden flex flex-col gap-4">
                  <div className="max-w-[300px] text-base w-full bg-white border py-[12px] rounded-[20px] text-black border-[#A259FF]">
                    <button className="px-5">Enter Your Email Address</button>
                  </div>
                  <div className="max-w-[300px] py-[12px] text-base font-semibold leading-[22px] rounded-[20px]  bg-[#A259FF] flex justify-center items-center gap-[15px]">
                    <img src={"/assets/crypto/email.svg"} alt="subscribe" />
                    <button className="text-white ">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" border border-[#858584] my-[20px] w-full"></div>
          <div className="whitespace-nowrap text-[#CCCCCC]   w-full text-start flex justify-start">
            Ⓒ NFT Market. Use this template freely.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
