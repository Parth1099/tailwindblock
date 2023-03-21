import Button from "../../../components/common/Button1";

export const buttonBasic = <Button />;

import React from "react";

const ButtonSample1 = () => {
  return (
    <div className="flex flex-col items-center h-[800px] justify-center gap-9 ">
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-[22px] font-bold">Basic Button</h2>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-600 h-9 rounded flex justify-center items-center px-6
                text-white font-medium text-xs leading-tight uppercase shadow-md  
                 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  
                 active:shadow-lg transition duration-150 ease-in-out hover:bg-blue-800"
          >
            Button
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-[22px] font-bold">Sizes Button</h2>
        <div className="flex items-center justify-center gap-3">
          <button className="flex h-7 items-center justify-center rounded bg-blue-600 hover:bg-blue-800 px-5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            Button
          </button>
          <button className="flex h-9 items-center justify-center rounded bg-blue-600 hover:bg-blue-800 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            Button
          </button>
          <button className="flex h-10 items-center justify-center rounded bg-blue-600 hover:bg-blue-800 px-8 text-lg font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            Button
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-[22px] font-bold">Disabled Button</h2>
        <div className="flex items-center justify-center gap-3">
          <button className="flex h-9 cursor-not-allowed items-center justify-center rounded bg-blue-600 hover:bg-blue-800 px-6 text-xs font-medium uppercase leading-tight text-white opacity-60 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            Button
          </button>
          <button className="flex h-9 cursor-not-allowed items-center justify-center rounded bg-gray-600 hover:bg-gray-800 px-6 text-xs font-medium uppercase leading-tight text-white opacity-60 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            Button
          </button>
        </div>
      </div>

      <div className="px-9 flex justify-center items-center w-full flex-col gap-3">
        <h2 className="text-[22px] font-bold">Block Button</h2>
        <div className="flex items-center flex-col justify-center gap-3 w-full">
          <button className="mx-5 h-9 w-full rounded bg-blue-600 text-xs font-medium uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            Button
          </button>
          <button className="mx-5 h-9 w-full rounded border-2 border-blue-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-blue-600 shadow-md transition duration-150 ease-in-out hover:bg-gray-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonSample1;
