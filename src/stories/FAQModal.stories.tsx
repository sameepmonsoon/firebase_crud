import FAQModal from "../Component/FAQModal/FAQModal";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Provider } from "react-redux";
import userReducer from "../Store/user";
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Store/authSlice";
import UserAuthContextProvider from "../Context/UserAuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const store = configureStore({
  reducer: { auth: authSliceReducer, user: userReducer },
});
export default {
  title: "Components/FAQModal",
  component: FAQModal,
  tags: ["autodocs"],
  argTypes: {
    editDocData: { control: "object" },
  },
  args: { modalState: false },
};

const Template = (args) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <UserAuthContextProvider>
          <FAQModal {...args} />
        </UserAuthContextProvider>
      </QueryClientProvider>
    </Provider>
  );
};
export const Default = Template.bind({});
export const FAQStory = Template.bind({});
FAQStory.args = {
  toggleModal: action("Change the toggle state"),
  modalState: false,
  editDocData: {},
};
