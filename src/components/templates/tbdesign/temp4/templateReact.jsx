import { useEffect, useState } from "react";
export default function TbDesign() {
  // const [page, setPage] = useState("home");
  const moveTo = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  };
  const [navbar, setNavbar] = useState(true);
  const header = [
    {
      title: "Home",
      scrollto: "home",
    },
    {
      title: "Portfolio",
      scrollto: "portfolio",
    },
    { title: "About Me", scrollto: "about" },
    {
      title: "Contact",
      scrollto: "contactus",
    },
  ];

  const card = [
    {
      img: "/assets/tbdesign/carduser.svg",
      person: "Ryan Wills",
      details:
        "Absolutely fantastic, my go to web designer! Absolutely fantastic, my go to web designer!Absolutely fantastic, my go to web designer!Absolutely fan",
    },
    {
      img: "/assets/tbdesign/carduser.svg",
      person: "Ryan Wills",
      details:
        "Absolutely fantastic, my go to web designer! Absolutely fantastic, my go to web designer!Absolutely fantastic, my go to web designer!Absolutely fan",
    },
  ];

  const project = [
    {
      userimage: "/assets/tbdesign/carduser.svg",
      userdetails: "Absolutely fantastic, my go to web designer!",
      username: "Ryan Wills",
      frameimage: "/assets/tbdesign/iframe1.svg",
      hover: "false",
      linkimage: "/assets/tbdesign/Link.svg",
      number: 1,
    },
    {
      userimage: "/assets/tbdesign/carduser.svg",
      userdetails: "Absolutely fantastic, my go to web designer!",
      username: "Ryan Wills",
      frameimage: "/assets/tbdesign/iframe1.svg",
      hover: "true",
      linkimage: "/assets/tbdesign/Link.svg",
      number: 2,
      website: "https://infynno.com/",
    },
  ];
  const quation = [
    {
      title: "Title Of The Question",
      details:
        "Absolutely fantastic, my go to web designer! Absolutely fantastic, my go to web designer!Absolutely fantastic, my go to web designer!Absolutely fan",
    },
    {
      title: "Title Of The Question",
      details:
        "Absolutely fantastic, my go to web designer! Absolutely fantastic, my go to web designer!Absolutely fantastic, my go to web designer!Absolutely fan",
    },
    {
      title: "Title Of The Question",
      details:
        "Absolutely fantastic, my go to web designer! Absolutely fantastic, my go to web designer!Absolutely fantastic, my go to web designer!Absolutely fan",
    },
    {
      title: "Title Of The Question",
      details:
        "Absolutely fantastic, my go to web designer! Absolutely fantastic, my go to web designer!Absolutely fantastic, my go to web designer!Absolutely fan",
    },
  ];
  return (
    <>
      <div className="bg-[#F8F7F3]">
        <div>
          <div className="max-w-[1920px] mx-auto 2xl:px-40 xl:px-32 sm:px-10  px-5 flex justify-between items-center pt-6">
            <div className="flex gap-3">
              <img src={"/assets/tbdesign/TB.svg"} alt="Logo"></img>
              <span className="font-normal text-3xl leading-10 uppercase">
                TAILWIND blocks
              </span>
            </div>
            <div className="relative h-10 w-12 block md:hidden">
              <img
                alt="menu"
                src="/assets/tbdesign/menu.svg"
                className=" h-10 w-12"
              />
            </div>

            <div className="md:flex gap-3 lg:gap-12  hidden ">
              {header.map((data, index) => {
                return (
                  <span
                    key={index}
                    className=" relative font-medium text-xl lg:text-xl  text-[#09051B] cursor-pointer"
                    onClick={() => moveTo(data.scrollto)}
                  >
                    {data.title}
                    {data.title == "Home" && (
                      <div className="bg-[#4518F5] w-3 h-3 rounded-full absolute top-12 left-5"></div>
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-[1920px] mx-auto 2xl:px-40   xl:px-32    sm:px-24  px-5 flex xl:justify-between  justify-center  flex-col xl:flex-row ">
            <div className="relative 2xl:self-start self-center flex pt-5">
              <div className="relative lg:w-[500px] lg:h-[700px] w-80 h-[300px] sm:w-[400px] sm:h-[400px] ">
                <img
                  alt="user"
                  src="/assets/tbdesign/usericon.svg"
                  className=" lg:w-[500px] lg:h-[700px] w-80 h-[300px] sm:w-[400px] sm:h-[400px]"
                />
                <div className="absolute xl:w-24 xl:h-24 2xl:-right-40 sm:-right-32  -right-2 top-[152px] hidden xl:block">
                  <img alt="icon 1" src="/assets/tbdesign/icon1.svg" />
                </div>
                <div className="absolute 2xl:-right-60 -right-52 top-80 xl:w-24 xl:h-24 h-0 w-0 hidden xl:block">
                  <img alt="icon 2" src="/assets/tbdesign/icon2.svg" />
                </div>
                <div className="absolute xl:w-24 xl:h-24 h-0 w-0 2xl:-right-40 -right-32 bottom-28 hidden xl:block">
                  <img alt="icon 3" src="/assets/tbdesign/icon3.svg" />
                </div>
              </div>
              <div className="w-11 h-9 relative xl:hidden block">
                <div className="absolute lg:w-24 lg:h-24 sm:w-16 sm:h-16 w-12 h-12 2xl:-right-60  lg:-right-20  sm:-right-4 right-8 top-14 lg:top-40 ">
                  <img alt="icon 1" src="/assets/tbdesign/icon1.svg" />
                </div>
                <div className="absolute lg:w-24 lg:h-24 sm:w-16 sm:h-16 w-12 h-12  2xl:-right-40 sm:-right-20 sm:top-[168px] top-[130px] -right-0   lg:-right-36 lg:top-[350px]">
                  <img alt="icon 2" src="/assets/tbdesign/icon2.svg" />
                </div>
                <div className="absolute lg:w-24 lg:h-24 sm:w-16 sm:h-16 w-12 h-12  2xl:-right-60 sm:-right-4 right-8 lg:-right-20 sm:top-72 top-52 lg:top-[570px]">
                  <img alt="icon 3" src="/assets/tbdesign/icon3.svg" />
                </div>
              </div>
            </div>
            {/* remanning */}
            <div className="w-full flex flex-col xl:ml-60 2xl:max-w-2xl xl:max-w-lg px-3  gap-16  pb-24 pt-24">
              <div>
                <div className="flex gap-4 items-center w-full">
                  <span className="font-[Playfair] text-3xl sm:text-4xl xl:text-5xl 2xl:text-8xl xl:leading-10  font-bold text-[#09051B]">
                    Websites
                  </span>
                  <div className="relative">
                    <img
                      alt="logo"
                      src="/assets/tbdesign/arrow.svg"
                      className="sm:w-32 w-20 h-14"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center  font-bold text-[#09051B]">
                    <span className=" font-[Playfair] text-3xl sm:text-4xl xl:text-5xl 2xl:text-8xl xl:leading-10 gap-2">
                      Fit For Purpose
                      <span className="relative text-[#4518F5] xl:text-8xl sm:ml-3 ml-2 text-7xl ">
                        .
                      </span>
                    </span>
                  </div>

                  <span className="font-light text-xl leading-7 text[#09051B]  w-full max-w-[600px]">
                    I am a website designer who focuses on creating memorable
                    websites. The aim isn&apos;t to have a website that blends
                    in with the rest; it&apos;s to stand out from the crowd.
                  </span>
                </div>
              </div>
              <div className="bg-[#09051b66] h-px w-full"></div>
              <div className=" flex flex-col gap-28 ">
                <div className="flex gap-2 md:gap-16 items-center">
                  <button className="relative font-[Playfair] border-[#4518F5] border-[3px]  bg-transparent  sm:py-4  sm:px-10 px-8 py-3 sm:text-2xl text-xl leading-5  sm:leading-8  font-semibold rounded-[30px] text-[#4518F5] hover:text-white duration-1000 hover:bg-[#4518F5] ">
                    My Portfolio
                  </button>

                  <div className="flex sm:gap-7 gap-4 ">
                    <a
                      href="https://in.linkedin.com/company/infynno-solutions"
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer"
                    >
                      <div className="relative rounded-full w-12 h-14 flex justify-center items-center">
                        <img
                          alt="linkedin"
                          src="/assets/tbdesign/linkedin.svg"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/infynno_solutions/?hl=en"
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer"
                    >
                      <div className="relative rounded-full w-12 h-14 flex justify-center items-center">
                        <img
                          alt="instagram"
                          src="/assets/tbdesign/instagram.svg"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="px-11 py-5 relative bg-white sm:rounded-[188px] rounded-[40px] flex items-center gap-8 flex-col sm:flex-row justify-center w-full max-w-2xl">
                  <div>
                    <img src="/assets/tbdesign/carduser.svg" alt="card-user" />
                  </div>
                  <span className="w-full  text-center md:text-start max-w-xs">
                    Absolutely fantastic, my go to web designer!
                  </span>
                  <span className="self-center sm:self-end whitespace-nowrap">
                    Ryan Wills
                  </span>
                  <div className="absolute -top-5 left-36">
                    <img alt="coma" src="/assets/tbdesign/coma.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] sm:py-32 py-16" id="portfolio">
        <div className="mx-auto max-w-[1920px] 2xl:px-40 xl:px-32 sm:px-24  px-5  flex lg:justify-between   flex-col lg:flex-row gap-12">
          <div className="flex flex-col gap-6">
            <span className="font-[Playfair] flex items-baseline lg:gap-4 md:gap-2 gap-2 font-bold  2xl:text-6xl lg:text-5xl sm:text-4xl text-4xl  text-[#09051B]">
              My Portfolio
              <div className=" xl:w-4 xl:h-4  w-3 h-3 bg-[#4518F5] rounded-full "></div>
            </span>
            <div className="">
              <span className="text-xl w-[500px]   text-[#09051B]">
                Here are some examples of websites I&apos;ve made recently. Each
                and every project is a bespoke design made to serve the purpose
                me and the client discussed.
              </span>
            </div>
          </div>
          <div className="flex  gap-24  flex-col-reverse  lg:flex-col">
            <div className="">
              <span className="text-xl w-[500px]   text-[#09051B]">
                Here are some examples of websites I&apos;ve made recently. Each
                and every project is a bespoke design made to serve the purpose
                me and the client discussed.
              </span>
            </div>
            <div className=" relative flex  justify-between ">
              <div className="absolute top-[30px] sm:top-[45px] w-full  bg-[#09051b66] h-[2px]"></div>
              <div className="relative w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] border-[#1ED1A1] border-[2px]   rounded-full flex justify-center items-center ml-[10px]">
                <div className="w-[30px] h-[30px] sm:w-12 sm:h-12 bg-[#1ED1A1] rounded-full flex justify-center items-center text-xl sm:text-4xl leading-10 text-white">
                  1
                </div>
                <span className="absolute left-[1px] sm:left-0 top-28 text-lg sm:text-xl leading-7 text-[#09051B]">
                  Consultation
                </span>
              </div>
              <div className="relative w-[60px] h-[60px] sm:w-[90px] sm:h-[90px]  border-[#4518F5] border-[2px]   rounded-full flex justify-center items-center">
                <div className=" w-[30px] h-[30px] sm:w-12 sm:h-12 bg-[#4518F5] rounded-full flex justify-center items-center text-xl sm:text-4xl leading-10 text-white">
                  2
                </div>
                <span className="absolute top-28 text-lg sm:text-xl leading-7 text-[#09051B]">
                  Mockup
                </span>
              </div>
              <div className="relative w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] border-[#EB8015] border-[2px]   rounded-full flex justify-center items-center mr-[10px]">
                <div className="w-[30px]  h-[30px] sm:w-12 sm:h-12 bg-[#EB8015] rounded-full flex justify-center items-center text-xl sm:text-4xl leading-10 text-white">
                  3
                </div>
                <span className="absolute top-28 -left-12 sm:left-0 text-lg sm:text-xl leading-7 text-[#09051B]">
                  Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F2F2F2] sm:pb-44 pb-24">
        <div className="flex  overflow-auto mx-auto  max-w-[109rem] ">
          <div>
            <div className="relative h-[340px] w-[580px] ">
              <img
                src="/assets/tbdesign/card1.svg"
                alt="card 1"
                className="object-cover h-[340px] w-[580px]"
              />
            </div>
          </div>
          <div>
            <div className="relative h-[340px] w-[580px] ">
              <img
                src="/assets/tbdesign/card2.svg"
                alt="card 2"
                className="object-cover h-[340px] w-[580px]"
              />
            </div>
          </div>
          <div>
            <div className="relative h-[340px] w-[580px] ">
              <img
                src="/assets/tbdesign/card3.svg"
                alt="card 3"
                className="object-cover h-[340px] w-[580px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] sm:pb-40  pb-24" id="about">
        <div className="max-w-[1920px] mx-auto 2xl:px-40 xl:px-32 sm:px-24  px-5 flex  items-center pt-[25px] flex-col gap-16 ">
          <div className="w-full 2xl:px-36 lg:px-24 md:px-14 sm:px-11 px-6 py-16 lg:py-28 border-[#09051B] rounded-5 border-2 flex justify-between flex-col xl:flex-row gap-4 xl:gap-10">
            <div>
              <span className="font-[Playfair] text-3xl leading-9 text-[#09051B]">
                About Me
              </span>
              <h1 className=" font-[Playfair] 2xl:text-6xl  sm:text-5xl text-4xl  font-bold text-[#09051B]">
                I&apos;m The Guy For The Job
                <span className="relative text-[#4518F5] sm:text-8xl sm:ml-3 ml-2 text-7xl ">
                  .
                </span>
              </h1>
              <div className="sm:text-xl text-lg mt-8 font-light leading-6 flex gap-10 flex-col">
                <span className="sm:text-xl text-lg leading-6 text-[#09051B] font-light">
                  I am a website designer who focuses on creating memorable
                  websites. The aim isn&apos;t to have a website that blends in
                  with the rest; it&apos;s to stand out from the crowd. I am a
                  website designer who focuses on
                </span>
                <span className="sm:text-xl text-lg leading-6 text-[#09051B] font-light">
                  creating memorable websites. The aim isn&apos;t to have a
                  website that blends in with the rest; it&apos;s to stand out
                  from the crowd.
                </span>
                <span className="sm:text-xl text-lg leading-6 text-[#09051B] font-light">
                  I am a website designer who focuses on creating memorable
                  websites. The aim isn&apos;t to have a website that blends in
                  with the rest; it&apos;s to stand out from the crowd.
                </span>
              </div>
            </div>
            <div className="flex 2xl:gap-6 sm:gap-3 gap-1 justify-center">
              <div className="relative lg:w-[100px] lg:h-[100px] sm:w-[60px] sm:h-[60px] h-[40px] w-[40px]">
                <img
                  alt="about"
                  src="/assets/tbdesign/object-icon.svg"
                  className="object-cover"
                />
              </div>
              <div className="relative 2xl:w-[400px] 2xl:h-[400px] xl:w-[350px] xl:h-[350px]  lg:w-[300px] lg:h-[300px] md:w-[350px] md:h-[350px] w-[223px] h-[223px]">
                <img
                  alt="about"
                  src="/assets/tbdesign/aboutuser.svg"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <button className="font-[Playfair] mx-auto text-[#4518F5] text-2xl leading-8 font-semibold py-4 px-10 rounded-[20px] border-[#4518F5] border-[3px]">
            Learn More
          </button>
        </div>
      </div>
      <div className="  pt-20 md:pb-40 pb-96 bg-[#F8F7F3]">
        <div className="max-w-[1920px] mx-auto 2xl:px-40 xl:px-32 sm:px-24  px-5 flex justify-between items-center pt-6 flex-col gap-16">
          <div className="mx-auto md:max-w-xl w-full flex flex-col justify-center gap-6">
            <div className="flex items-end  lg:gap-4 md:gap-3 gap-2 text-center justify-center">
              <span className="sm:text-6xl sm:leading-10 text-4xl  text-center whitespace-nowrap">
                Recent Projects
              </span>
              <div className=" xl:w-[18px] xl:h-[18px]  w-3 h-3 bg-[#4518F5] rounded-full mb-2 sm:mb-0"></div>
            </div>
            <div className="text-center">
              <span>
                I am a website designer who focuses on creating memorable
                websites. The aim isn&apos;t to have a website that blends .
              </span>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:gap-16 md:gap-40 gap-96">
            {project.map((data, index) => {
              return (
                <div key={index} className="relative group">
                  <div className="absolute  md:-bottom-32  sm:-bottom-[17rem] -bottom-[19rem]  z-10 flex gap-24 2xl:flex-row flex-col  w-full max-w-3xl">
                    <div className="px-11 pt-12 pb-5 relative bg-white md:rounded-[50px] 2xl:rounded-[100px] rounded-[40px] flex items-center gap-8 flex-col md:flex-row justify-center">
                      <div>
                        <img src={data.userimage} alt="card-user" />
                      </div>

                      <span className="w-full  text-center md:text-start sm:text-xl text-lg leading-6 text-[#09051B] font-light">
                        {data.userdetails}
                      </span>
                      <span className="self-center sm:self-end whitespace-nowrap">
                        {data.username}
                      </span>
                      <div className="absolute -top-2 left-36">
                        <img alt="coma" src="/assets/tbdesign/coma.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="relative sm:w-[600px] sm:h-[400px] w-[336px] h-[228px]">
                    <img alt="frame1" src={data.frameimage} />
                  </div>
                  {data?.hover === "true" && (
                    <a href={data.website} target="_blank" rel="noreferrer">
                      <div className="hidden group-hover:absolute   sm:h-[423px] h-[104%]  group-hover:bg-[#b2671c] group-hover:top-0  group-hover:opacity-[0.7] group-hover:flex group-hover:flex-col group-hover:gap-4 group-hover:cursor-pointer group-hover:justify-center group-hover:items-center group-hover:text-2xl group-hover:text-white group-hover:font-bold group-hover:underline   group-hover:w-full sm:rounded-xl ">
                        <img alt="frame1" src={data.linkimage} />
                        Visit Website
                      </div>
                    </a>
                  )}
                  <div className="absolute -top-6 sm:-top-10 sm:-left-9 -left-6 w-[60px] h-[60px] sm:w-[90px] sm:h-[90px]  border-[#4518F5] border-2   rounded-full flex justify-center items-center">
                    <div className=" w-8 h-8 sm:w-12 sm:h-12 bg-[#4518F5] rounded-full flex justify-center items-center text-xl sm:text-4xl leading-10 text-white">
                      {data.number}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] py-32">
        <div className="max-w-[1920px] mx-auto 2xl:px-40 xl:px-32 sm:px-24  px-5 flex justify-between items-center pt-6 flex-col gap-32">
          <div className="mx-auto  w-full max-w-xl flex flex-col justify-center gap-6">
            <div className="flex items-end  lg:gap-4 md:gap-3 gap-2 text-center justify-center">
              <span className="sm:text-6xl sm:leading-10 text-4xl  text-center">
                Testimonials
              </span>
              <div className="  w-3 h-3 sm:w-4 sm:h-4 bg-[#4518F5] rounded-full mb-2 sm:mb-0"></div>
            </div>
            <div className="text-center">
              <span>
                I am a website designer who focuses on creating memorable
                websites. The aim isn&apos;t to have a website that blends in
                with the rest; it&apos;s to stand out from the crowd.
              </span>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-16">
            {card?.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex  2xl:flex-row flex-col px-5 w-full max-w-3xl"
                >
                  <div className="px-11 pt-12 pb-5 relative bg-white md:rounded-[50px] 2xl:rounded-[100px] rounded-[40px] flex items-center gap-9 flex-col md:flex-row justify-center">
                    <div>
                      <img src={data.img} alt="card-user" />
                    </div>
                    <span className="w-full  text-center md:text-start sm:text-xl text-lg leading-6 text-[#09051B] font-light">
                      {data.details}
                    </span>
                    <span className="self-center sm:self-end whitespace-nowrap">
                      {data.person}
                    </span>

                    <div className="absolute sm:-top-9 sm:-left-8  xl:-left-8 -top-6 -left-5">
                      <div className="relative sm:h-24 sm:w-24 w-16 h-16">
                        <img alt="star" src="/assets/tbdesign/star.svg" />
                      </div>
                    </div>
                    <div className="absolute -top-5 left-36">
                      <img alt="coma" src="/assets/tbdesign/coma.svg" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#F8F7F3] sm:py-32 py-20">
        <div className="max-w-[1222px] mx-auto flex flex-col ">
          <div className="flex items-end gap-2 text-center justify-center">
            <span className="font-[Playfair] sm:text-6xl sm:10  font-bold text-4xl  text-center">
              FAQ’s
              <span className="sm:text-8xl text-[#4518F5] text-4xl text-left sm:ml-1">
                .
              </span>
            </span>
          </div>
          <div className="sm:mt-24 mt-14">
            <div className="flex flex-wrap justify-center gap-12 px-1">
              {quation.map((data, index) => {
                return (
                  <div key={index} className="flex w-full max-w-lg  px-3 gap-2">
                    <div className="relative w-32  h-11">
                      <img src="/assets/tbdesign/qutaion.svg" alt="quation" />
                    </div>
                    <div className="pt-1">
                      <h1 className="font-[Playfair] text-[#09051B] sm:text-4xl text-2xl leading-10  whitespace-nowrap">
                        {data.title}
                      </h1>

                      <div className="mt-">
                        <span className="sm:text-xl text-lg leading-6 text-[#09051B] font-light text-left">
                          {data.details}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#F2F2F2] sm:py-40 py-24 " id="contactus">
        <div className="flex justify-center gap-16 items-center flex-col lg:flex-row">
          <div className="">
            <div className="flex items-end sm:gap-3 gap-2 text-center ">
              <span className="font-[Playfair] sm:text-6xl sm:leading-10 text-4xl  text-center whitespace-nowrap">
                Let&apos;s Work Together
                <span className="sm:text-9xl text-[#4518F5] text-4xl text-left">
                  .
                </span>
              </span>
            </div>
            <div className="lg:w-[580px] sm:w-[550px] mt-8 w-[300px] text-center  lg:text-left">
              <span className="sm:text-xl text-lg leading-6 text-[#09051B] font-light  ">
                Absolutely fantastic, my go to web designer! Absolutely
                fantastic, my go to web designer!Absolutely fantastic, my go to
                web designer!Absolutely fan
              </span>
            </div>
          </div>
          <div>
            <a
              href="https://in.linkedin.com/company/infynno-solutions"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <button className=" font-[Playfair] mx-auto text-[#4518F5] text-2xl leading-8 font-semibold py-4 px-16 rounded-[20px] border-[#4518F5] border-[3px]">
                Get In Touch
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F7F3] py-16 flex justify-center border-t-[1px] border-[#000000]">
        <span className="sm:text-xl leading-6 font-light text-center text-[#000000] text-lg">
          Copyright © {new Date().getFullYear()} TB Tailwind Blocks. Design
          credits goes to Tom Berry.
        </span>
      </div>
    </>
  );
}
