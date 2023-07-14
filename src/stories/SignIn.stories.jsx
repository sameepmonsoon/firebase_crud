import SignIn from "../Pages/SignIn";
// import { within, userEvent } from "@storybook/testing-library";
import { Provider } from "react-redux";
import userReducer from "../Store/user";
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Store/authSlice";
import UserAuthContextProvider from "../Context/UserAuthContext";
export default {
  title: "Pages/Authentication",
  component: SignIn,
  argTypes: {
    editDocData: { control: "object" },
  },
};
const store = configureStore({
  reducer: { auth: authSliceReducer, user: userReducer },
});

const Template = (args) => {
  return (
    <Provider store={store}>
      <UserAuthContextProvider>
        <SignIn {...args} />
      </UserAuthContextProvider>
    </Provider>
  );
};
export const SignInPage = Template.bind({});
