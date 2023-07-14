import PropTypes from "prop-types";
const GlobalButton = (props) => {
  const { handleClick, buttonIcon, buttonTitle, colorType, size } = props;
  const colorVariants = {
    blue: "bg-blue-200 hover:bg-blue-500 text-black",
    red: "bg-red-200 hover:bg-red-500",
    yellow: "bg-yellow-200 hover:bg-yellow-500",
    rose: "bg-rose-200 hover:bg-rose-500",
    green: "bg-green-200 hover:bg-green-500",
    "": "hover:bg-blue-700",
  };
  const textColorVariant = {
    blue: "text-black",
    red: "text-black",
    yellow: "text-black",
    rose: "text-black",
    green: "text-black",
    "": "text-white",
  };
  const sizeVariants = {
    "": "h-[1.8rem] sm:w-[7rem]",
    small: "h-[1.8rem] sm:w-[7rem]",
    medium: "h-[2.3rem] sm:w-[8rem] ",
    large: "h-[3.8rem] sm:w-[10rem]",
  };
  const textVariants = {
    "": "text-[15px]",
    small: "text-[15px]",
    medium: "text-[17px] ",
    large: "text-[22px]",
  };
  return (
    <div
      onClick={handleClick}
      className={` font-[400] ${colorVariants[colorType]} text-black fill-black border-[1px]  border-blue-200 gap-0 ${sizeVariants[size]} flex justify-start items-center text-sm sm:text-[1rem] lg:text-md border-[1px] rounded-[0.2rem] cursor-pointer text-white  hover:border-white border-gray-100/90`}>
      <span
        className={`h-full w-[70%] flex justify-center items-center ${textColorVariant[colorType]} ${textVariants[size]}`}>
        {buttonTitle}
      </span>
      <span
        className={`w-[2rem]  h-full flex justify-center items-center rounded-r-sm  overflow-hidden ${textColorVariant[colorType]}`}>
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
