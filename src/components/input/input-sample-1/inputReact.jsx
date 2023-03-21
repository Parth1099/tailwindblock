import React from "react";

const Input = () => {
  return (
    <div className="flex flex-col py-6 items-center max-h-fit justify-center gap-5 ">
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-[22px] font-bold">Basic Examples</h2>

        <div className="flex items-center justify-center text-left">
          <div className="mb-3 xl:w-96">
            <label
              for="formInput1"
              className="form-label mb-2 inline-block text-gray-700"
            >
              Label
            </label>
            <input
              className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              placeholder="Basic Input"
            />
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-center flex-col gap-1 ">
        <h2 className="text-[22px] font-bold">Sizing Input</h2>
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center text-left">
            <div className="mb-3 xl:w-96">
              <label
                for="formInput1"
                className="form-label mb-2 inline-block text-sm text-gray-700"
              >
                Label
              </label>
              <input
                className="form-control m-0 block h-8 w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-sm font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Basic Input"
              />
            </div>
          </div>
          <div className="flex items-center justify-center text-left">
            <div className="mb-3 xl:w-96">
              <label
                for="formInput1"
                className="form-label mb-2 inline-block text-gray-700"
              >
                Label
              </label>
              <input
                className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Basic Input"
              />
            </div>
          </div>
          <div className="flex items-center justify-center text-left">
            <div className="">
              <label
                for="formInput1"
                className="form-label h mb-2 inline-block text-lg text-gray-700"
              >
                Label
              </label>
              <input
                className="form-control m-0 block h-12 w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-lg font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Basic Input"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-1">
        <h2 className="text-[22px] font-bold">Disabled Input</h2>

        <div className="flex items-center justify-center text-left">
          <div className="flex items-center justify-center text-left">
            <div className="mb-3 xl:w-96">
              <label
                for="formInput1"
                className="form-label mb-2 inline-block text-gray-700"
              >
                Label
              </label>
              <input
                className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-gray-100 bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 opacity-80 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Basic Input"
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-1">
        <h2 className="text-[22px] font-bold">Read only Input</h2>

        <div className="flex items-center justify-center text-left">
          <div className="mb-3 xl:w-96">
            <label
              for="formInput1"
              className="form-label mb-2 inline-block text-gray-700"
            >
              Label
            </label>
            <input
              className="form-control bg-slate-100 m-0 block w-full rounded border border-solid border-gray-300 bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 opacity-80 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              placeholder="Basic Input"
              disabled
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-1">
        <h2 className="text-[22px] font-bold">Text input</h2>

        <div className="flex items-center justify-center text-left">
          <div className="mb-3 xl:w-96">
            <label
              for="formInput1"
              className="form-label mb-2 inline-block text-gray-700"
            >
              Label
            </label>
            <input
              className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              placeholder="Basic Input"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-1">
        <h2 className="text-[22px] font-bold">Email Input</h2>

        <div className="flex items-center justify-center text-left">
          <div className="mb-3 xl:w-96">
            <label
              for="formInput1"
              className="form-label mb-2 inline-block text-gray-700"
            >
              Label
            </label>
            <input
              className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              placeholder="Basic Input"
              type="email"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-1">
        <h2 className="text-[22px] font-bold">Password Input</h2>

        <div className="flex items-center justify-center text-left">
          <div className="mb-3 xl:w-96">
            <label
              for="formInput1"
              className="form-label mb-2 inline-block text-gray-700"
            >
              Label
            </label>
            <input
              type="password"
              className="form-control bg-slate-100 m-0 block w-full rounded border border-solid border-gray-300 bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 opacity-80 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              placeholder="Basic Input"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-1">
        <h2 className="text-[22px] font-bold">Numbers Input</h2>
        <div className="flex items-center justify-center text-left">
          <div className="mb-3 xl:w-96">
            <label
              for="formInput1"
              className="form-label mb-2 inline-block text-gray-700"
            >
              Label
            </label>
            <input
              className="form-control bg-slate-100 m-0 block w-full rounded border border-solid border-gray-300 bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 opacity-80 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              placeholder="Basic Input"
              type="number"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
