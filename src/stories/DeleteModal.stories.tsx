import DeleteModal from "../Component/Delete Modal/DeleteModal";
import { action } from "@storybook/addon-actions";
import React from "react";
export default {
  title: "Components/Modal",
  component: DeleteModal,
  tags: ["autodocs"],
  argTypes: {
    deleteFAQ: { action: "deleteFAQ" },
  },
};

const Template = (args) => <DeleteModal {...args} />;
export const Default = Template.bind({});
Default.args = {
  deleteFAQ: () => {},
  closeDeleteModalFunction: () => {},
  isLoading: true,
  deleteModalState: true,
  deleteModalTitle: "Delete",
};

export const DeleteModalStory = Template.bind({});
DeleteModalStory.args = {
  deleteModalState: false,
  deleteFAQ: action("deleteFAQ"),
  closeDeleteModalFunction: action("closeDeleteModalFunction"),
  isLoading: false,
  deleteModalTitle: "",
};

export const DeleteModalStoryV2 = Template.bind({});
DeleteModalStoryV2.args = {
  deleteModalState: false,
  isLoading: false,
  deleteModalTitle: "Type 2?",
};
