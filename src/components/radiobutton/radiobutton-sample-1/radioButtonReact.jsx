import React from "react";

const RadioButton = () => {
  return (
    <div className="flex flex-col py-6 items-center h-[800px] max-h-fit justify-center gap-5 ">
      <div className="flex justify-center items-center flex-col gap-1">
        <h2 className="text-[22px] font-bold">Read only Input</h2>

        <div className="align-center flex justify-center py-5">
          <div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none"
                type="radio"
                name="radioname"
                id="radioidone"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="radioidone"
              >
                Default radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none disabled:border-blue-400"
                type="radio"
                name="radioname"
                id="radioidtwo"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="radioidtwo"
              >
                Default checked radio
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-1">
        <h2 className="text-[22px] font-bold">Disabled</h2>
        <div className="align-center flex justify-center py-5">
          <div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none"
                type="radio"
                name="radioname"
                id="radioidone"
                disabled
              />
              <label
                className="form-check-label inline-block text-gray-400 cursor-not-allowed"
                for="radioidone"
              >
                Default radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none disabled:border-blue-400"
                type="radio"
                name="radioname"
                id="radioidtwo"
                checked
                disabled
              />
              <label
                className="form-check-label inline-block text-gray-400 cursor-not-allowed"
                for="radioidtwo"
              >
                Default checked radio
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-1">
        <h2 className="text-[22px] font-bold">Inline</h2>
        <div className="align-center flex justify-center py-5">
          <div className="flex gap-4">
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none"
                type="radio"
                name="radioname"
                id="radioidone"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="radioidone"
              >
                Default radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none disabled:border-blue-400"
                type="radio"
                name="radioname"
                id="radioidtwo"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="radioidtwo"
              >
                Default checked radio
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-1">
        <h2 className="text-[22px] font-bold">Default Checked</h2>
        <div className="align-center flex justify-center py-5">
          <div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none"
                type="radio"
                name="radioname"
                id="radioidone"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="radioidone"
              >
                Default radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none disabled:border-blue-400"
                type="radio"
                name="radioname"
                id="radioidtwo"
                checked
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="radioidtwo"
              >
                Default checked radio
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioButton;
