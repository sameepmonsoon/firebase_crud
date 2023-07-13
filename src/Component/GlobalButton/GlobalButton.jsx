import PropTypes from "prop-types";
const GlobalButton = (props) => {
  const { handleClick, buttonIcon, buttonTitle, colorType, size } = props;
  const colorVariants = {
    blue: "bg-blue-200 hover:bg-blue-500",
    red: "bg-red-200 hover:bg-red-500",
    yellow: "bg-yellow-200 hover:bg-yellow-500",
    rose: "bg-rose-200 hover:bg-rose-500",
    green: "bg-green-200 hover:bg-green-500",
    "": "hover:bg-blue-700",
  };
  const sizeVariants = {
    "": "h-[1.8rem]",
    small: "h-[1.8rem]",
    medium: "h-[2.3rem]",
    large: "h-[2.8rem]",
  };
  return (
    <div
      onClick={handleClick}
      className={`sm:w-[7rem] font-[400] ${colorVariants[colorType]}  gap-0 ${sizeVariants[size]} flex justify-start items-center text-sm sm:text-[1rem] lg:text-md border-[1px] rounded-[0.2rem] cursor-pointer text-white  hover:border-white border-gray-100/90`}>
      <span
        className={`h-full w-[70%] flex justify-center items-center text-black`}>
        {buttonTitle}
      </span>
      <span className="w-[2rem]  h-full flex justify-center items-center rounded-r-sm  overflow-hidden">
        {buttonIcon && buttonIcon}
      </span>
    </div>
  );
};

GlobalButton.propTypes = {
  handleClick: PropTypes.func,
  buttonIcon: PropTypes.node,
  buttonTitle: PropTypes.string,
  colorType: PropTypes.string,
  size: PropTypes.string,
};

export default GlobalButton;
