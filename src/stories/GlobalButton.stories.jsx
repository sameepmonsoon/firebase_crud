import GlobalButton from "../Component/GlobalButton/GlobalButton";
import { action } from "@storybook/addon-actions";
export default {
  title: "Components/GlobalButton",
  Component: GlobalButton,
  argTypes: {
    // color: { control: "color" },
  },
};

const Template = (args) => <GlobalButton {...args} />;
export const Default = Template.bind({});
export const Primary = Template.bind({});
Primary.args = {
  handleClick: action("Click Me"),
  buttonIcon: "",
  buttonTitle: "Nepal",
  color: "red",
};
