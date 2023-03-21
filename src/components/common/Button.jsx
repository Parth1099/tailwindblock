import React from "react";
import classNames from "classnames";
import { Loader } from "../../utils/images/loader";

const Button = ({
  size,
  className,
  isLoading,
  color,
  font,
  icon,
  type,
  onClick,
  label,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isLoading}
      className={classNames(
        className,
        "flex justify-center items-center",
        size ? size : "max-w-[300px] w-full ",
        color ? color : "bg-blue",
        font ? font : "font-[500] tracking-tight text-white",
        isLoading && "opacity-50 cursor-not-allowed"
      )}
      {...props}
    >
      <div className="relative">
        <div className="loader absolute -left-5 top-1/2 -translate-y-2/4">
          {isLoading && (
            <div className="animate-spin">
              <Loader fill="black" />
            </div>
          )}
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <div className="label">{label}</div>
          {icon && <div>{icon}</div>}
        </div>
      </div>
    </button>
  );
};
export default Button;
