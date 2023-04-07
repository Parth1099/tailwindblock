import { useEffect, useState } from "react";

const Timer3 = () => {
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
    <div className="relative bg-[#191A24] h-screen w-screen  bg-no-repeat bg-center pt-32">
      <div className=" flex flex-col items-center w-full h-full gap-8 sm:gap-16">
        <span className=" text-2xl sm:text-3xl font-semibold text-white text-center tracking-widest px-2">
          Limited time offer, Sales end in
        </span>
        <div className="flex justify-center gap-3 sm:gap-8">
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex  justify-between items-center  bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px]  rounded-full bg-[#191A24]"></div>
              <span className=" lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc] ">
                {timerDays}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3  -right-[6px]  rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              Days
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex  justify-between items-center  bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px]  rounded-full bg-[#191A24]"></div>
              <span className=" lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc] ">
                {timerHours}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3  -right-[6px]  rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center  font-medium">
              Hours
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex  justify-between items-center  bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px]  rounded-full bg-[#191A24]"></div>
              <span className=" lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc] ">
                {timerMinutes}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3  -right-[6px]  rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize ">
              Minutes
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex  justify-between items-center  bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px]  rounded-full bg-[#191A24]"></div>
              <span className=" lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc] ">
                {timerSeconds}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3  -right-[6px]  rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              Seconds
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timer3;
