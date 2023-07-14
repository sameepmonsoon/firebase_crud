import GlobalButton from "../Component/GlobalButton/GlobalButton";
import { action } from "@storybook/addon-actions";
import { FiEdit } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { IoAdd, IoLogOutOutline } from "react-icons/io5";

export default {
  title: "Components/GlobalButton",
  Component: GlobalButton,
  tags: ["autodocs"],
  argTypes: {},
};

const Template = (args) => <GlobalButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  handleClick: action("Click Me"),
  buttonTitle: "Button",
  buttonIcon: <FiEdit />,
  colorType: "red",
  size: "",
};

export const ButtonOne = Template.bind({});
ButtonOne.args = {
  handleClick: action("Click Me"),
  buttonIcon: <CiUser />,
  buttonTitle: "Nepal",
  colorType: "",
  size: "small",
};
export const ButtonTwo = Template.bind({});
ButtonTwo.args = {
  handleClick: action("Click Me"),
  buttonIcon: <IoAdd />,
  buttonTitle: "Nepal",
  colorType: "yellow",
  size: "medium",
};
export const ButtonThree = Template.bind({});
ButtonThree.args = {
  handleClick: action("Click Me"),
  buttonIcon: <IoLogOutOutline size={24} />,
  buttonTitle: "Nepal",
  colorType: "blue",
  size: "large",
};
