import PropTypes from "prop-types";
const Button = (props) => {
  const { title, handleClick } = props;
  return (
    <div>
      <button onClick={handleClick}>{title}</button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
};
export default Button;
