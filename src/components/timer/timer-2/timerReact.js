import { useEffect, useState } from "react";

const Timer2 = () => {
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
          ? Math.floor(distance / (24 * 60 * 60 * 1000))
          : `0${Math.floor(distance / (24 * 60 * 60 * 1000))}`;

      const hours =
        Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >= 10
          ? Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
          : `0${Math.floor(
              (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            )}`;
      const minutes =
        Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60)) >= 10
          ? Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
          : `0${Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))}`;
      const seconds =
        Math.floor((distance % (60 * 1000)) / 1000) >= 10
          ? Math.floor((distance % (60 * 1000)) / 1000)
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
    <div className=" flex justify-center  items-center h-screen w-screen bg-[#070920] ">
      <div className="mx-3 sm:p-10 p-4 rounded-md flex justify-center flex-col gap-6 shadow-[5px_5px_50px_rgba(47,16,60,1)] ">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-center sm:text-3xl text-xl font-semibold leading-8 text-[#FBFAF8]">
            Limited time offer, Sales end in
          </h1>
          <span className="text-sm font-semibold text-center leading-8 text-[#959AAE]">
            Take Advantage of Our Biggest Sale, Grab the offer before it's gone!
          </span>
        </div>
        <div className="flex justify-between sm:px-4 ">
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 flex justify-center items-center bg-[#5468FF] text-[#FBFAF8] text-3xl font-semibold rounded-md ">
              {timerDays}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Days</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#5468FF] text-[#FBFAF8] text-3xl font-semibold rounded-md">
              {timerHours}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Hours</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#5468FF] text-[#FBFAF8] text-3xl font-semibold rounded-md">
              {timerMinutes}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Minutes</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <span className="py-3 px-3 bg-[#5468FF] text-[#FBFAF8] text-3xl font-semibold rounded-md">
              {timerSeconds}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timer2;
