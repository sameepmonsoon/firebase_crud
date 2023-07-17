import PropTypes from "prop-types";
const Button = (props) => {
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
    const element = document.getElementById("button");
    element.style.backgroundColor = hoverColorBackground;
  };
  const handleMouseLeave = () => {
    const element = document.getElementById("button");
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
          borderSize === 0 || borderSize < 7
            ? `${borderSize}px `
            : borderSize > 7
            ? "7px"
            : "1px",
        color: textColor !== "" ? textColor : "black",
        overflow:'hidden'
      }}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string || PropTypes.node,
  backgroundColor: PropTypes.string,
  hoverColorBackground: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  handleClick: PropTypes.func,
  borderSize: PropTypes.number,
  borderRadius: PropTypes.number,
  buttonWidth: PropTypes.number,
  buttonHeight: PropTypes.number,
};
export default Button;
