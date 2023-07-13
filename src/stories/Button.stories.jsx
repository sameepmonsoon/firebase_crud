import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    handleClick: { action: "clicked" },
  },
};
const TemplateOne = (args) => <Button {...args} />;
export const Default = TemplateOne.bind({});
Default.args = {
  title: "Button",
  color: "",
};
