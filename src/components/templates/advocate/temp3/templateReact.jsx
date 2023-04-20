import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings_first = {
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

let Navitem = ["Home", "Services", "About", "Contact"];

let whychooseData = [
  "CLIENT-FOCUSED SOLUTIONS AND RESULTS",
  "FLEXIBLE, VALUE-DRIVEN APPROACH",
  "BEYOND THE BILLABLE HOUR",
  "WE POSSES LAW DEGREES AND LAW PRACTICE EXPERIENCE",
];

let popularcatData = [
  {
    title: "Divorce",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in nibh tempor sit eros id sapien velit vitae. Blandit ultricies vivamus lectus ultrices mi sollicitudin magnis hendrerit.",
    img: "/assets/advocate/cat_one.png",
  },
  {
    title: "Property",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in nibh tempor sit eros id sapien velit vitae. Blandit ultricies vivamus lectus ultrices mi sollicitudin magnis hendrerit.",
    img: "/assets/advocate/cat_two.png",
  },
  {
    title: "Real Estate",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in nibh tempor sit eros id sapien velit vitae. Blandit ultricies vivamus lectus ultrices mi sollicitudin magnis hendrerit.",
    img: "/assets/advocate/cat_three.png",
  },
  {
    title: "Divorce",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in nibh tempor sit eros id sapien velit vitae. Blandit ultricies vivamus lectus ultrices mi sollicitudin magnis hendrerit.",
    img: "/assets/advocate/cat_one.png",
  },
];

let popularLawyer = [
  {
    mainTitle: "JAMES MILNER",
    subTitle: "Criminal Lawyer",
    exp: "20",
    reviews: "123",
    img_lawyer: "/assets/advocate/lawyer_one.png",
  },
  {
    mainTitle: "JAMES MILNER",
    subTitle: "Criminal Lawyer",
    exp: "20",
    reviews: "123",
    img_lawyer: "/assets/advocate/lawyer_two.png",
  },
  {
    mainTitle: "JAMES MILNER",
    subTitle: "Criminal Lawyer",
    exp: "20",
    reviews: "123",
    img_lawyer: "/assets/advocate/lawyer_three.png",
  },
  {
    mainTitle: "JAMES MILNER",
    subTitle: "Criminal Lawyer",
    exp: "20",
    reviews: "123",
    img_lawyer: "/assets/advocate/lawyer_one.png",
  },
];

let customer = [
  {
    cus_img: "/assets/advocate/customer_one.svg",
    cus_mainTitle: "JAMES MILNER",
    cus_subTitle: "CEO, Financial corp.",
    cus_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, orci lectus neque nascetur amet, suscipit feugiat. Et, diam tristique quisque platea viverra amet, eget.",
  },
  {
    cus_img: "/assets/advocate/customer_two.svg",
    cus_mainTitle: "JAMES MILNER",
    cus_subTitle: "CEO, Financial corp.",
    cus_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, orci lectus neque nascetur amet, suscipit feugiat. Et, diam tristique quisque platea viverra amet, eget.",
  },
  {
    cus_img: "/assets/advocate/customer_three.svg",
    cus_mainTitle: "JAMES MILNER",
    cus_subTitle: "CEO, Financial corp.",
    cus_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, orci lectus neque nascetur amet, suscipit feugiat. Et, diam tristique quisque platea viverra amet, eget.",
  },
  {
    cus_img: "/assets/advocate/customer_one.svg",
    cus_mainTitle: "JAMES MILNER",
    cus_subTitle: "CEO, Financial corp.",
    cus_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, orci lectus neque nascetur amet, suscipit feugiat. Et, diam tristique quisque platea viverra amet, eget.",
  },
];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={"/assets/advocate/Next_icon.svg"} alt="" className="w-[10px]" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img
        src={"/assets/advocate/previous_icon.svg"}
        alt="previous"
        className="w-[10px]"
      />
    </div>
  );
}
const Advocate = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="font-poppins flex flex-col justify-center items-center">
        <div className="w-full h-[110px] bg-[#FFFFFF] flex justify-center">
          <div className="flex justify-between md:justify-center items-center px-5 w-full max-w-[1440px] sm:px-5 md:px-[102px] sm:gap-[30px] md:gap-[50px] lg:gap-20 xl:gap-[124px]">
            <a href="#_" className="w-full max-w-fit">
              <img src={"/assets/advocate/logo.svg"} alt="logo" />
            </a>
            <div className="-mb-2.5 hidden md:flex  justify-between min-w-[200px] sm:min-w-[200px] md:min-w-[280px] gap-0 sm:gap-5 lg:min-w-[400px] xl:gap-[82px] w-full font-medium sm:text-xs xl:text-lg md:text-[15px] lg:text-[15px] tracking-tight leading-7">
              {Navitem.map((navitem, index) => {
                return (
                  <a
                    key={index}
                    href="#_"
                    className="text-[#1C1C23] hover:text-[#DDA45C] font-semibold"
                  >
                    {navitem}
                  </a>
                );
              })}
            </div>
            <div className=" hidden md:flex items-center justify-center gap-[25px]">
              <a
                href="#_"
                className="xl:min-w-[141px] md:min-w-[80px] sm:min-w-[60px] w-full sm:py-2.5  sm:px-5 xl:py-2.5 md:py-[5px] flex justify-center items-center rounded-[5px] border border-[#DDA45C]"
              >
                <button className="font-normal sm:text-xs xl:text-lg md:text-xs lg:text-sm leading-7 tracking-tight">
                  Login
                </button>
              </a>
              <a
                href="#_"
                className="xl:min-w-[141px] md:min-w-[80px] sm:min-w-[60px] sm:py-2.5  sm:px-5 w-full xl:py-2.5 md:py-[5px] flex justify-center items-center text-white rounded-[5px] bg-[#DDA45C]"
              >
                <button className="font-normal xl:text-lg sm:text-xs md:text-xs lg:text-sm leading-7 tracking-tight">
                  Register
                </button>
              </a>
            </div>
            <div
              className={
                navbar
                  ? "block max-h-fit py-[5%] w-[200px] absolute top-20 right-6 bg-white shadow-2xl rounded-lg transition-all ease-in-out duration-500"
                  : "hidden"
              }
            >
              <div className="flex flex-col -mb-2.5 sm:flex items-center  justify-between  gap-2.5 sm:gap-5  w-full  font-medium sm:text-xs xl:text-lg md:text-[15px] lg:text-[15px] tracking-tight leading-7">
                {Navitem.map((navitem, index) => {
                  return (
                    <a
                      key={index}
                      href="#_"
                      className="text-[#1C1C23] font-semibold"
                    >
                      {navitem}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="sm:hidden" onClick={() => setNavbar(!navbar)}>
              <img
                src={"/assets/advocate/menu.svg"}
                alt="menu"
                className="h-[30px]"
              />
            </div>
          </div>
        </div>
        <div className="pt-[5%] z-10 md:pt-[30%] lg:pt-[15%] relative xl:pt-0 !bg-landing-back bg-cover bg-no-repeat w-full md:min-h-[609px] min-h-[400px] flex flex-col items-center md:gap-[70px] sm:gap-10 gap-[30px] justify-center">
          <div className="w-full h-full opacity-[0.5] top-0 bg-black absolute"></div>
          <div className="absolute z-10 flex justify-center flex-col items-center gap-[60px]">
            <div className="flex flex-col gap-[22px] xs:gap-[23px] md:gap-5">
              <div className="text-center text-white mx-auto text-[28px] leading-9 sm:text-5xl sm:leading-[50px] md:text-[38px] lg:text-5xl md:leading-[48px] lg:leading-[60px] font-extrabold lg:max-w-[514px] md:max-w-[414px] max-w-[300px] sm:max-w-[550px]">
                Here at <span className="text-[#DDA45C]"> Advocate</span>, Every
                client matters
              </div>
              <div className=" text-white text-center md:max-w-[613px] max-w-[380px] sm:max-w-[500px] text-[13px] md:text-[20px] leading-5 md:leading-[28px] tracking-[0.02em]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br></br> Lectus nunc scelerisque est aenean sed nunc id
                tincidunt.
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 md:max-w-[241px] max-w-[170px] w-full py-3 rounded-[6px] text-white bg-[#DDA45C]">
              <button className="text-sm md:text-[20px] font-medium leading-[15px] md:leading-[30px] tracking-tight">
                Consult Lawyers
              </button>
              <div>
                <img
                  src={"/assets/advocate/button_arrow.svg"}
                  alt="btn-arrow"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-popular-back bg-cover min-h-[600px] md:min-h-[761px] bg-no-repeat w-full flex justify-center">
          <div className="flex mt-5 flex-col gap-2.5 py-5 md:py-0 md:gap-[50px] items-center justify-center ">
            <div className="md:text-[40px] text-[30px] leading-[60px] tracking-[0.02em] text-[#1C1C23] font-semibold">
              Popular Lawyers
            </div>
            <div className="template mx-0.5">
              <Slider {...settings_first}>
                {popularLawyer.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="max-w-[365px] bg-white rounded-b-[5px]"
                    >
                      <div>
                        <img
                          src={data.img_lawyer}
                          alt=""
                          className="w-full hover:opacity-75 cursor-pointer"
                        />
                      </div>
                      <div className="h-[224px] flex flex-col">
                        <div className="flex py-[14px] flex-col items-center">
                          <div className="text-lg leading-7 tracking-[0.04em] font-normal">
                            {data.mainTitle}
                          </div>
                          <div className="text-xs leading-[18px] tracking-[0.04em] text-[#707070] font-medium">
                            {data.subTitle}
                          </div>
                        </div>
                        <div className="h-[1px] w-full bg-[#D9D9D9] "></div>
                        <div className="flex flex-col gap-[28px] mx-auto max-w-[308px] xl:max-w-[308px] lg:max-w-[280px] w-full ">
                          <div className=" pt-[13px] w-full items-center flex justify-between">
                            <div className="w-[87px]  text-start text-base font-normal leading-[22px]">
                              <span className="font-semibold">{data.exp}+</span>
                              Yrs Experience
                            </div>
                            <div>
                              <div className="flex items-center gap-[6px]">
                                <div>5.0</div>
                                <div className="flex items-center gap-[3px]">
                                  <img
                                    src={"/assets/advocate/star.svg"}
                                    alt="star"
                                  />
                                  <img
                                    src={"/assets/advocate/star.svg"}
                                    alt="star"
                                  />
                                  <img
                                    src={"/assets/advocate/star.svg"}
                                    alt="star"
                                  />
                                  <img
                                    src={"/assets/advocate/star.svg"}
                                    alt="star"
                                  />
                                  <img
                                    src={"/assets/advocate/star.svg"}
                                    alt="star"
                                  />
                                </div>
                              </div>
                              <div className="text-start">
                                {data.reviews} Reviews
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between  ">
                            <div className="max-w-[128px] w-full py-2 bg-[#DDA45C] rounded-[4px] flex justify-center ">
                              <button className="text-white flex items-center justify-center gap-[11px]">
                                <img
                                  src={"/assets/advocate/call.svg"}
                                  alt="call"
                                />
                                Call Now
                              </button>
                            </div>
                            <div className="max-w-[128px] w-full py-2 rounded-[4px] border-[1px] border-[#DDA45C] flex justify-center ">
                              <button className="flex items-center justify-center gap-[11px]">
                                <img
                                  src={"/assets/advocate/chat.svg"}
                                  alt="chat"
                                />
                                Chat Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className=" max-w-[158px] px-[35px] mx-auto mt-[40px]  bg-[#DDA45C] py-[11px] flex items-center text-white justify-center rounded-[6px] ">
              <button className="text-base leading-[24px] tracking-[0.02em] font-normal">
                View All
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[20px] md:mt-[59px] flex flex-col items-center xs:gap-5 lg:gap-[60px] md:gap-[30px]">
          <div className="lg:text-[40px] text-[28px] md:text-[30px] leading-[68px] tracking-[0.02em] text-[#1C1C23] font-semibold">
            Popular Categories
          </div>
          <div className="template flex md:flex-row xs:flex-col xs:gap-2.5 xl:gap-[51px] px-[5%] md:gap-[30px]">
            <Slider {...settings_first}>
              {popularcatData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={`relative bg-black  rounded-[8px] bg-no-repeat bg-cover w-full max-w-[365px] min-h-[377px] flex justify-center items-end `}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${data.img})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className={`w-full absolute rounded-[8px] bg-black opacity-[0.4] min-h-[377px] h-full `}
                    ></div>

                    <div className="rounded-[8px] absolute z-10 flex flex-col xs:gap-5 xl:gap-[29px] lg:gap-2.5 md:gap-[15px] transform translate-x-[-40%] translate-y-[-50%] top-[50%] w-full left-[50%] ">
                      <div className="xl:text-[32px] xs:text-[28px] lg:text-[28px] text-[20px] md:text-[30px] text-start leading-[48px] text-white font-semibold">
                        {data.title}
                      </div>
                      <div className="lg:max-w-fit  max-w-[270px] xl:max-w-fit md:max-w-fit pr-0 md:pr-[20%] lg:pr-[15%]  text-justify text-white xs:text-lg lg:text-sm xl:text-lg md:text-lg md:leading-[32px] lg:leading-7 font-normal">
                        {data.des}
                      </div>
                      <div className="flex item-center gap-[16.7px] text-[#DDA45C] text-start  lg:text-lg md:text-[24px] leading-7 font-medium">
                        <div>Explore</div>
                        <div className="flex items-center">
                          <img src={"/assets/advocate/Cat_arrow.svg"} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div>
            <div className="px-[24px] text-white  leading-[24px] tracking-[0.02em] font-normal py-2.5  bg-[#DDA45C] rounded-[6px] ">
              <button className="text-base">All Categories</button>
            </div>
          </div>
        </div>
        <div className="mt-[60px] relative flex w-full bg-chooseus-back bg-cover md:min-h-[500px] min-h-[400px] ">
          <div className="h-full w-full absolute bg-black opacity-[0.7]"></div>
          <div className="flex absolute   top-[50%]  transform translate-x-[-52%] translate-y-[-50%]  left-[50%] z-10 mx-auto flex-col  lg:flex-row justify-center gap-[50px] md:gap-10 xl:gap-[135px] items-center max-w-[1216px] w-full">
            <div className="left w-max mx-auto pl-[15px]   text-white font-semibold lg:text-[40px]  xl:text-[54px]  md:text-[40px] md:leading-5  xs:text-[34px]  xs:leading-5 lg:leading-[61px]  xl:leading-[81px] tracking-[0.02em] lg:max-w-[140px]">
              Why<span className="text-[#DDA45C] "> Choose </span> Us ?
            </div>
            <div className=" px-[10%] lg:px-0 flex flex-col md:gap-[30px] lg:gap-[41px] xl:gap-[61px] gap-5 sm:gap-[30px]">
              {whychooseData.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center md:gap-6 gap-[15px]"
                >
                  <div className="min-w-[40px]">
                    <img src={"/assets/advocate/rightarrow.svg"} alt="arrow" />
                  </div>
                  <div className="lg:text-[24px] xl:text-[28px] sm:text-[15px] md:text-[23px]  text-start lg:leading-[42px] md:leading-[30px] xs:text-sm leading-5 text-white  font-medium ">
                    {data}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[40px] min-h-[440px] flex flex-col gap-5 lg:gap-[60px] xl:max-w-[1234px] ">
          <div className="lg:text-[40px] text-center text-lg sm:text-[30px] leading-[60px] tracking-[0.02em] text-[#1C1C23] font-semibold">
            Hear it From Our Customers
          </div>

          <div className="mb-5 flex template justify-center xl:max-w-[1234px]">
            <Slider {...settings}>
              {customer.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="hover:scale-95 duration-1000 max-w-[365px] w-full min-h-[278px] flex flex-col gap-[15px] bg-[#FFFFFF] shadow-xl rounded-b-[5px]"
                  >
                    <div className="flex items-center gap-[15px] px-[25px] pt-[15px]">
                      <div>
                        <img src={data.cus_img} alt="one" />
                      </div>
                      <div className="mr-[34px]">
                        <div className="text-lg whitespace-nowrap leading-7 tracking-[0.04em] text-[#1C1C23] font-normal">
                          {data.cus_mainTitle}
                        </div>
                        <div className="text-xs text-start leading-[18px] tracking-[0.04em] text-[#707070] font-medium">
                          {data.cus_subTitle}
                        </div>
                      </div>
                      <div>
                        <img
                          src={"/assets/advocate/quote_mark.svg"}
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className=" w-full border-b-2 border-[#DDA45C] py-3"></div>
                    <div className="text-justify  px-[25px] mt-2.5 pb-[25px]">
                      {data.cus_content}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="w-full">
          <div className="flex md:mt-[60px] mt-0 flex-col  items-center justify-center max-h-fit    xl:max-w-full  w-full bg-[#000D13]">
            <div className="flex gap-5 px-[10%] xl:gap-[122px] lg:gap-[50px] flex-col md:flex-row md:gap-5   justify-center mt-[30px] md:mt-[60px] xl:px-0 lg:px-[30px] md:px-[30px]">
              <div className="flex flex-col gap-[15px] lg:gap-[23px] md:gap-[15px]">
                <a href="#_" className="max-w-fit -mt-2.5  ">
                  <img src={"/assets/advocate/logofooter.svg"} alt="footer" />
                </a>
                <div className="text-[#F2F2F2] xl:max-w-[249px] lg:max-w-[249px] md:max-w-[190px] text-justify xl:text-base md:text-xs lg:text-sm leading-[24px] tracking-[0.02em] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  habitant enim eget at non, integer non tempus.
                </div>
                <div className="flex justify-between max-w-[200px]  xs:gap-5 lg:gap-[29px] md:gap-[15px] items-center">
                  <img
                    src={"/assets/advocate/facebookicon.svg"}
                    alt="facebook"
                  />
                  <img
                    src={"/assets/advocate/linkedinicon.svg"}
                    alt="linkedin"
                  />
                  <img src={"/assets/advocate/twittericon.svg"} alt="twitter" />
                  <img
                    src={"/assets/advocate/instagramicon.svg"}
                    alt="instagram"
                  />
                </div>
              </div>
              <div className="flex flex-col md:gap-[23px] gap-2.5">
                <div className="text-[#DDA45C] xl:text-[20px] lg:text-lg md:text-sm leading-[30px] tracking-[0.02em] text-justify font-semibold">
                  Links
                </div>
                {Navitem.map((navitem, index) => {
                  return (
                    <a
                      key={index}
                      href="#_"
                      className="text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-[24px] font-normal text-justify"
                    >
                      {navitem}
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-col md:gap-[23px] gap-2.5">
                <div className="text-[#DDA45C]  xl:text-[20px] lg:text-lg md:text-sm leading-[30px] tracking-[0.02em] text-justify font-semibold">
                  Services
                </div>
                <div className="flex gap-[31px] w-full  text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-[24px] font-normal text-justify">
                  <a href="#_" className="lg:w-[112px] w-[95px] md:w-[85px]">
                    Drug crime
                  </a>
                  <a href="#_">Evading</a>
                </div>
                <div className="flex gap-[31px]  text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-[24px] font-normal text-justify">
                  <a href="#_" className="lg:w-[112px] w-[95px] md:w-[85px]">
                    Robbery
                  </a>
                  <a href="#_">Hit and Run</a>
                </div>
                <div className="flex gap-[31px]  text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-[24px] font-normal text-justify">
                  <a href="#_" className="lg:w-[112px] w-[95px] md:w-[85px]">
                    Investigations
                  </a>
                  <a href="#_" className="tett-strat flex justify-start ">
                    Theft
                  </a>
                </div>
                <div className="flex gap-[31px]  text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-[24px] font-normal text-justify">
                  <a href="#_" className=" lg:w-[112px] w-[95px] md:w-[85px]">
                    Assault
                  </a>
                  <a href="#_" className="whitespace-nowrap">
                    Disturbing the peace
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-[23px] md:gap-[15px]">
                <div className="text-[#DDA45C] xl:text-[20px] lg:text-lg md:text-sm leading-[30px] tracking-[0.02em] text-justify font-semibold">
                  Contact
                </div>
                <div className="max-w-[243px] text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs  leading-[24px] font-normal text-start">
                  802, Orbit complex, C.G Road, Ahmedabad, 380009.
                </div>
                <div className="text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs  leading-[24px] font-normal text-justify">
                  +91 12345 67890
                </div>
                <div className="text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs  leading-[24px] font-normal text-justify">
                  info.advocate@gmail.com
                </div>
                <div className="text-[#F2F2F2]  lg:text-xs xs:text-[13px] md:text-xs leading-[24px] font-normal text-justify">
                  <a href="#_">
                    <div className="xl:max-w-[211px] lg:max-w-[170px] xs:max-w-[190px] md:max-w-[170px] lg:py-3 md:py-2 py-2.5 bg-[#DDA45C] text-center text-white font-medium">
                      <button>Book free Consultation</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="h-[1.17px] md:mt-[14px] mt-2.5 w-full bg-[#A3A3A3]"></div>
            <div className="flex flex-col items-start px-[10%] md:px-0 md:flex-row justify-between md:items-center w-full xl:max-w-[1238px] lg:max-w-[900px] md:max-w-[700px] md:mt-[27px] mt-2.5 mb-[14px]">
              <div className="text-white text-sm xl:text-base whitespace-nowrap lg:text-sm md:text-xs flex items-center gap-1">
                Advocate{" "}
                <img src={"/assets/advocate/copyright.svg"} alt="copyright" />
                {new Date().getFullYear()} All Rights Reserved
              </div>
              <div className="flex md:gap-4 gap-[6px] whitespace-nowrap text-white font-normal leading-[24px] text-sm xl:text-base lg:text-sm md:text-xs tracking-[0.02em]">
                <div>Terms of Service</div>
                <div>|</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Advocate;
