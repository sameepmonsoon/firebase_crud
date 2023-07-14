import FAQModal from "../Component/FAQModal/FAQModal";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/FAQModal",
  component: FAQModal,
  tags: ["autodocs"],
  argTypes: {
    editDocData: { control: "object" },
  },
  args: { modalState: false },
};

const Template = (args) => <FAQModal {...args} />;
export const Default = Template.bind({});
export const FAQStory = Template.bind({});
FAQStory.args = {
  toggleModal: action("Change the toggle state"),
  modalState: false,
  editDocData: {},
};
