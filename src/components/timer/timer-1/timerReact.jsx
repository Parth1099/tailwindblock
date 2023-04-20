import { useEffect, useState, useCallback, useMemo } from "react";

const Timer1 = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const getTimeDiffrence = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? `${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? `${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? `${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? `${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;

    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    {
      const customDate = new Date();
      const countDownDate = new Date(
        customDate.getFullYear(),
        customDate.getMonth() + 1,
        customDate.getDate() + 6,
        customDate.getHours(),
        customDate.getMinutes(),
        customDate.getSeconds() + 1
      );
      setInterval(() => {
        getTimeDiffrence(countDownDate.getTime());
      }, 1000);
    }
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="flex justify-center  items-center h-screen bg-gradient-to-t from-[#2C045A] to-[#2B109D]">
      <div className="flex justify-center flex-col gap-4">
        <h1 className="sm:text-3xl  text-2xl font-semibold leading-8 text-[#FBFAF8] text-center">
          Black Friday&apos;{new Date().getFullYear().toString().substr(-2)}
          Sale is Here
        </h1>
        <div className="flex gap-2 items-center justify-center">
          <div className="flex gap-1 ">
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.days?.charAt(0)}
            </span>

            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.days?.charAt(1)}
            </span>

            <span
              className={
                countDownTime?.days?.length <= 2
                  ? "hidden"
                  : "bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl"
              }
            >
              {countDownTime?.days?.charAt(3)}
            </span>
          </div>
          <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
          <div className="flex gap-1 shadow-lg">
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.hours?.charAt(0)}
            </span>
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.hours?.charAt(1)}
            </span>
          </div>
          <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
          <div className="flex gap-1">
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.minutes?.charAt(0)}
            </span>
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.minutes?.charAt(1)}
            </span>
          </div>
          <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
          <div className="flex gap-1">
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.seconds?.charAt(0)}
            </span>
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.seconds?.charAt(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timer1;
