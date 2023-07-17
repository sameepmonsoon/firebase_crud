import Button from "./Button";
import { AiFillHome } from "react-icons/ai";
import React from "react";
export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    handleClick: { action: "clicked" },
  },
};
const TemplateOne = (args) => <Button {...args} />;
export const Default = TemplateOne.bind({});
Default.args = {
  title: "Button",
  backgroundColor: "",
  borderRadius: 2,
  borderColor: "black",
  borderSize: 1,
  buttonWidth: 100,
  buttonHeight: 0,
  textColor: "",
  hoverColorBackground: "",
};
export const ButtonOne = TemplateOne.bind({});
ButtonOne.args = {
  title: "Button",
  backgroundColor: "black",
  borderRadius: 100,
  borderColor: "white",
  borderSize: 1,
  buttonWidth: 160,
  textColor: "white",
  hoverColorBackground: "#7bb8eaaa",
};
export const ButtonTwo = TemplateOne.bind({});
ButtonTwo.args = {
  title: <AiFillHome size={20} />,
  backgroundColor: "black",
  borderRadius: 100,
  borderColor: "#37a4f8aa",
  borderSize: 1,
  buttonWidth: 0,
  buttonHeight: 10,
  textColor: "white",
  hoverColorBackground: "#37a4f8aa",
};
export const ButtonThree = TemplateOne.bind({});
ButtonThree.args = {
  title: "Hover Me",
  backgroundColor: "white",
  borderRadius: 0,
  borderColor: "white",
  borderSize: 1,
  buttonWidth: 150,
  buttonHeight: 50,
  textColor: "black",
  hoverColorBackground: "#7bb8eaaa",
};
export const ButtonFour = TemplateOne.bind({});
ButtonFour.args = {
  title: "Click Me",
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "black",
  borderSize: 1,
  buttonWidth: 150,
  buttonHeight: 250,
  textColor: "black",
  hoverColorBackground: "#7bb8eaaa",
};
