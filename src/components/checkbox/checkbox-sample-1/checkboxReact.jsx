import React from "react";

const CheckBox = () => {
  return (
    <div className="flex flex-col py-6  h-[800px] justify-center gap-9 ">
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-[24px] font-bold">Basic Examples</h2>
        <div className="flex justify-center">
          <div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                Default checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
                onClick="!this.checked=this.checked;"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckChecked"
              >
                Checked checkbox
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-[24px] font-bold">Disabled Checkbox</h2>
        <div className="flex justify-center">
          <div className="flex justify-center">
            <div>
              <div className="form-check">
                <input
                  className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                  type="checkbox"
                  value=""
                  id="checkbox1"
                  disabled
                />
                <label
                  className="form-check-label inline-block cursor-not-allowed text-gray-400"
                  for="checkbox1"
                >
                  Default checkbox
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none disabled:bg-blue-400"
                  type="checkbox"
                  value=""
                  id="checkbox2"
                  checked
                  onClick="!this.checked=this.checked;"
                  disabled
                />
                <label
                  className="form-check-label inline-block cursor-not-allowed text-gray-400"
                  for="checkbox2"
                >
                  Checked checkbox
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-[24px] font-bold">Colorfull Checkbox</h2>
        <div className="flex justify-center gap-10">
          <div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-rose-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                Default checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input checked:bg--600 float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-rose-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
                onClick="!this.checked=this.checked;"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckChecked"
              >
                Checked checkbox
              </label>
            </div>
          </div>

          <div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-green-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                Default checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input checked:bg--600 float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-green-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
                onClick="!this.checked=this.checked;"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckChecked"
              >
                Checked checkbox
              </label>
            </div>
          </div>

          <div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-gray-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                Default checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input checked:bg--600 float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-gray-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
                onClick="!this.checked=this.checked;"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckChecked"
              >
                Checked checkbox
              </label>
            </div>
          </div>

          <div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-yellow-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                Default checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input checked:bg--600 float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-yellow-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
                onClick="!this.checked=this.checked;"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckChecked"
              >
                Checked checkbox
              </label>
            </div>
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-fuchsia-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                Default checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input checked:bg--600 float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-fuchsia-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
                onClick="!this.checked=this.checked;"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckChecked"
              >
                Checked checkbox
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-[24px] font-bold">Inline Checkbox</h2>
        <div className="flex justify-center">
          <div className="flex gap-10">
            <div className="form-check">
              <input
                className="form-check-input mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                1
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                2
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                3
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onClick="!this.checked=this.checked;"
                checked
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                None
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
