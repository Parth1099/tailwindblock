import { useEffect, useState } from "react";

const Timer1 = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    var createDate = new Date();
    createDate.setDate(createDate.getDate() + 35);

    const countDownDate = createDate.getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      let days =
        Math.floor(distance / (24 * 60 * 60 * 1000)) >= 10
          ? `${Math.floor(distance / (24 * 60 * 60 * 1000))}`
          : `0${Math.floor(distance / (24 * 60 * 60 * 1000))}`;

      const hours =
        Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >= 10
          ? `${Math.floor(
              (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            )}`
          : `0${Math.floor(
              (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            )}`;

      const minutes =
        Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60)) >= 10
          ? `${Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))}`
          : `0${Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))}`;
      const seconds =
        Math.floor((distance % (60 * 1000)) / 1000) >= 10
          ? `${Math.floor((distance % (60 * 1000)) / 1000)}`
          : `0${Math.floor((distance % (60 * 1000)) / 1000)}`;

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  }, []);
  return (
    <div className="flex justify-center  items-center h-screen w-screen  bg-gradient-to-t from-[#2C045A] to-[#2B109D]">
      <div className="p-5 flex justify-center flex-col gap-4">
        <h1 className=" sm:text-3xl  text-2xl font-semibold leading-8 text-[#FBFAF8] text-center">
          Black Friday'23 Sale is Here
        </h1>
        <div className="flex gap-2 items-center justify-center">
          <div className="flex gap-1 ">
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {timerDays?.charAt(0)}
            </span>

            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {timerDays?.charAt(1)}
            </span>
          </div>
          <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
          <div className="flex gap-1 shadow-lg">
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {timerHours?.charAt(0)}
            </span>
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {timerHours?.charAt(1)}
            </span>
          </div>
          <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
          <div className="flex gap-1">
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {timerMinutes?.charAt(0)}
            </span>
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {timerMinutes?.charAt(1)}
            </span>
          </div>
          <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
          <div className="flex gap-1">
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {timerSeconds?.charAt(0)}
            </span>
            <span className="bg-[#4D0B8F] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {timerSeconds?.charAt(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timer1;
