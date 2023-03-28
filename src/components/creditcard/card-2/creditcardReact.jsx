import React, { useState } from "react";
import { SiVisa } from "react-icons/si";

const CreditCard2 = ({ showCaseView }) => {
  const [creditCardDetails, setCreditCardDetails] = useState(defaultData);
  const [error, setError] = useState({
    number: false,
    expiryDate: false,
    cvv: false,
  });
  let currentYear = new Date().getFullYear().toString();
  var currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);

  return (
    <div
      className={`flex flex-col justify-center items-center bg-transparent ${
        showCaseView
          ? "md:py-16 py-5"
          : "h-screen bg-gradient-to-bl from-blue-400 via-blue-200 to-blue-400 backdrop-blur-sm"
      }`}
    >
      <div
        className={`flex flex-col justify-center items-center md:gap-20 sm:gap-16 bg-white bg-opacity-40  gap-7  shadow-sm px-0 sm:px-5 rounded-3xl w-max  md:px-8 lg:px-20 sm:py-20 py-8 ${
          showCaseView && "sm:py-20 md:py-7 py-6"
        }`}
      >
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-20 gap-12">
          <div className="flex flex-col px-2">
            {(error.expiryDate || error.number) && (
              <div className="text-xs text-red-600 h-9">
                {error.expiryDate
                  ? "Please enter valid expiry date"
                  : "Please enter valid card number"}
              </div>
            )}
            <div className="relative w-[290px] shadow-xl transition duration-400 hover:scale-110 ">
              <img
                src="/assets/creditcard/sample2/cc_cover.jpg"
                className="w-full h-full rounded-[10px]"
              />
              <div className="absolute top-0 px-[26px] py-[18px] flex flex-col justify-between h-[186px]">
                <div className="flex justify-between leading-[14px] items-center ">
                  <span className="text-[13px] font-medium">
                    American Express
                  </span>
                  <SiVisa className="h-[32px] w-12" />
                </div>

                <div className="flex">
                  <span className="flex items-center text-base top-3">
                    <img
                      src="/assets/creditcard/sample2/left-caret.svg"
                      alt="not found"
                      className="text-xl mt-[2px] mr-1"
                    />

                    <input
                      className="bg-transparent focus:outline-none focus:border border-black rounded-md px-1"
                      type="text"
                      value={cc_format(creditCardDetails?.number)}
                      onChange={(e) => {
                        const { value } = e?.target;
                        let finalValue = value.replaceAll(" ", "");
                        isNaN(finalValue)
                          ? setError({ ...error, number: true })
                          : finalValue.length < 16
                          ? setError({ ...error, number: true })
                          : setError({ ...error, number: false });

                        setCreditCardDetails({
                          ...creditCardDetails,
                          number: value,
                        });
                      }}
                    />
                  </span>
                </div>
                <div className="flex flex-row font-bold justify-between text-[13px]  text-gradient-to-r from-black to-gray-200">
                  <span>
                    <input
                      className="bg-transparent focus:outline-none focus:border border-black rounded-md px-1"
                      type="text"
                      value={creditCardDetails?.ownerName}
                      maxLength="21"
                      onChange={(e) =>
                        setCreditCardDetails({
                          ...creditCardDetails,
                          ownerName: e?.target?.value,
                        })
                      }
                    />
                  </span>
                  <span>
                    <input
                      className="bg-transparent focus:outline-none focus:border border-black rounded-md px-1 w-12"
                      type="text"
                      value={cc_expires_format(creditCardDetails?.expiryDate)}
                      maxLength="5"
                      onChange={(e) => {
                        const { value } = e?.target;
                        value.match(/^(0[1-9]|1[0-2])\/(([0-9]{4}|[0-9]{2})$)/)
                          ? value.slice(-2) < currentYear.slice(-2)
                            ? setError({ ...error, expiryDate: true })
                            : value.slice(-2) === currentYear.slice(-2) &&
                              value.slice(0, 2) <= currentMonth
                            ? setError({ ...error, expiryDate: true })
                            : setError({ ...error, expiryDate: false })
                          : setError({ ...error, expiryDate: true });
                        setCreditCardDetails({
                          ...creditCardDetails,
                          expiryDate: value,
                        });
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full px-4">
            {error.cvv && (
              <span className="text-xs text-red-600 h-9">
                Please enter valid cvv number
              </span>
            )}
            <div className="flex flex-col justify-between bg-white h-[186px] w-[307px] rounded-[10px] pt-[18px] pb-2 italic text-[4px] shadow-xl transition duration-400 hover:scale-110 sample2">
              <div>
                <div className="bg-black h-[34px] w-full" />
                <div className="flex justify-between">
                  <div className="flex flex-col w-[190px] mt-2">
                    <div className="flex justify-between ml-1">
                      <span>Authorized Signature</span>
                      <span>Not valid unless signed</span>
                    </div>
                    <div className="bg-[#E5E5E5] h-[22px] w-[190px] text-right">
                      <span className="text-[10px]">
                        <input
                          className="bg-transparent focus:outline-none focus:border border-black rounded-md text-right italic w-7 pl-1"
                          type="text"
                          maxLength="3"
                          value={creditCardDetails?.cvv}
                          onChange={(e) => {
                            const { value } = e?.target;
                            value.length < 3
                              ? setError({ ...error, cvv: true })
                              : setError({ ...error, cvv: false });
                            setCreditCardDetails({
                              ...creditCardDetails,
                              cvv: e?.target?.value,
                            });
                          }}
                        />
                      </span>
                    </div>
                    <div className="text-left ml-1 mt-2">
                      <p>
                        Lorem Ipsum Indoctum accusamus comprehensam Nullam id
                        dolor id nibh ultricies vehicula ut id elit. Donec sed
                        odio dui. Fusce dapibus, tellus ac cursus etiam porta
                        sem malesuada magna mollis euismod. commodo, Faccibus
                        mollis interdum. Morbi leo risus, porta ac, vestibulum
                        at eros.Feugiat accumsan Suspendisse eget Duis faucibus
                        tempus pede pede augue pede. Dapibus mollis dignissim
                        suscipit porta justo nisl amet Nunc quis semper.
                        Indoctum accusamus comprehensam .
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    {" "}
                    CIA 000012 CSM-1234--4321
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-center">
                <span>
                  +234089876543, +234803456789, +234089876543, +234089876543{" "}
                </span>
                <span> www.bankofruqmania.com</span>
              </div>
            </div>
          </div>
        </div>
        <button
          className={`w-24 rounded-lg h-9 bg-[#FF1D89] text-white hover:shadow-2xl font-medium hover:bg-white hover:text-black
        ${(error.expiryDate || error.number || error.cvv) && "opacity-70"}`}
          disabled={error.expiryDate || error.number || error.cvv}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreditCard2;

const defaultData = {
  number: "1234567812345678",
  ownerName: "Infynno Solutions",
  expiryDate: "06/29",
  cvv: "133",
};

export function cc_format(value) {
  var v = value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .replace(/\D/g, "");

  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];
  let len, i;
  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join("  ");
  } else {
    return v;
  }
}

export function cc_expires_format(string) {
  return string
    .replace(
      /[^0-9]/g,
      "" // To allow only numbers
    )
    .replace(
      /^([2-9])$/g,
      "0$1" // To handle 3 > 03
    )
    .replace(
      /^(1{1})([3-9]{1})$/g,
      "0$1/$2" // 13 > 01/3
    )
    .replace(
      /^0{1,}/g,
      "0" // To handle 00 > 0
    )
    .replace(
      /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
      "$1/$2" // To handle 113 > 11/3
    );
}
