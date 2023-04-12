const colors = [
  "EBC84B",
  "64BC78",
  "57B3AC",
  "4299E1",
  "a60fa9",
  "9F7AEA",
  "ed64a6",
];
const CustomePreview = ({ setColor }) => {
  return (
    <div className="flex flex-row gap-5 p-2">
      <div>Infynno</div>
      <div className="flex justify-center gap-2 cursor-pointer">
        {colors.map((data, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: `#${data}` }}
              className={`w-[20px] h-[20px] rounded-[2px] bg-[#${data}]`}
              onClick={(e) => {
                setColor(data);
                localStorage.setItem("preview-color", data);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default CustomePreview;
