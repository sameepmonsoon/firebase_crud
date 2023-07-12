import DeleteModal from "../Component/Delete Modal/DeleteModal";
import { action } from "@storybook/addon-actions";
export default {
  title: "Components/Modal",
  component: DeleteModal,
  argTypes: {
    // closeDeleteModalFunction: { action: "closeDeleteModalFunction" },
    deleteFAQ: { action: "deleteFAQ" },
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <DeleteModal {...args} />;

export const DeleteModalStory = Template.bind({});

DeleteModalStory.args = {
  deleteModalState: "false",
  deleteFAQ: "() => {}",
  isLoading: "false",
  deleteModalTitle: "",
};

export const DeleteModalStoryV2 = Template.bind({});

DeleteModalStoryV2.args = {
  deleteModalState: "false",
  // closeDeleteModalFunction: action("CLick"),
  deleteFAQ: action("Primary Click"),
  isLoading: "false",
  deleteModalTitle: "Type 2?",
};
