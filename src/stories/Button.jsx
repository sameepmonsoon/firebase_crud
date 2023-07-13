import PropTypes from "prop-types";
const Button = (props) => {
  const { title, handleClick, color } = props;
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: `${color}`,
        padding: "10px",
        border: "1px solid black",
        borderRadius: "10px",
        width: "120px",
      }}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
};
export default Button;
