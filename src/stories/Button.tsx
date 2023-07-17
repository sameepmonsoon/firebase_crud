import ButtonPropsTypes from "../../Types/Component/ButtonPropsTypes";
import React from "react";

const Button: React.FC = (props: ButtonPropsTypes) => {
  const {
    title,
    handleClick,
    backgroundColor,
    borderSize,
    borderColor,
    borderRadius,
    buttonWidth,
    buttonHeight,
    textColor,
    hoverColorBackground,
  } = props;
  const handleMouseOver = () => {
    const element: HTMLElement | any = document.getElementById("button");
    element.style.backgroundColor = hoverColorBackground;
  };
  const handleMouseLeave = () => {
    const element: HTMLElement | any = document.getElementById("button");
    element.style.backgroundColor = backgroundColor;
  };
  return (
    <button
      id="button"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        display: "flex",
        justifyContent: "center",
        borderColor: borderColor ? borderColor : "none",
        alignItems: "center",
        height: buttonHeight !== 0 ? `${buttonHeight}px` : "40px",
        minHeight: "48px",
        maxHeight: "80px",
        minWidth: "10px",
        width: buttonWidth !== 0 ? `${buttonWidth}px` : "50px",
        maxWidth: "200px",
        backgroundColor: `${backgroundColor}`,
        padding: "10px",
        borderRadius: borderRadius !== 0 ? `${borderRadius}px` : "0px",
        borderWidth:
          borderSize === 0 || (borderSize && borderSize < 7)
            ? `${borderSize}px `
            : borderSize && borderSize > 7
            ? "7px"
            : "1px",
        color: textColor !== "" ? textColor : "black",
        overflow: "hidden",
      }}>
      {title}
    </button>
  );
};

/** Primary UI component for the button. */
export default Button;
