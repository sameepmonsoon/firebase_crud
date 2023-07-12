import FAQModal from "../Component/FAQModal/FAQModal";

export default {
  title: "Components/FAQModal",
  component: FAQModal,
  args: {
    onclick: { action: "clicked" },
  },
};

const Template = (args) => {
  <FAQModal {...args} />;
};

export const FAQStory = Template.bind({});
FAQStory.args = {};
