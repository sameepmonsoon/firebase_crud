import DeleteModal from "../Component/Delete Modal/DeleteModal";
import {action} from "@storybook/addon-actions"
export default {
  title: "Components/Modal",
  component: DeleteModal,
  argTypes: {
    onclick: { action: "closeDeleteModalFunction" },
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <DeleteModal {...args} />;

export const DeleteModalStory = Template.bind({});

DeleteModalStory.args = {
  deleteModalState: "false",
  closeDeleteModalFunction: () => {},
  deleteFAQ: "() => {}",
  isLoading: "false",
  deleteModalTitle: "",
};

export const DeleteModalStoryV2 = Template.bind({});

DeleteModalStoryV2.args = {
  deleteModalState: "false",
  closeDeleteModalFunction: action("CLick"),
  deleteFAQ: "() => {}",
  isLoading: "false",
  deleteModalTitle: "Type 2?",
};
