import GlobalButton from "../Component/GlobalButton/GlobalButton";
import { action } from "@storybook/addon-actions";
export default {
  title: "Components/GlobalButton",
  Component: GlobalButton,
  argTypes: {},
};

const Template = (args) => <GlobalButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  handleClick: action("Click Me"),
  buttonTitle: "Button",
  colorType: "",
  size: "",
};

export const Primary = Template.bind({});
Primary.args = {
  handleClick: action("Click Me"),
  buttonIcon: "",
  buttonTitle: "Nepal",
  colorType: "",
  size: "medium",
};
