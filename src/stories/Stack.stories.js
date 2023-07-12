import DeleteModal from "../Component/Delete Modal/DeleteModal";
export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    closeDeleteModalFunction: { action: "closeDeleteModalFunction" },
  },
};

const Template = (args) => <Stack {...args} />;
