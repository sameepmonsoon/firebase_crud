import HomePage from "../Pages/HomePage";
// import { within, userEvent } from "@storybook/testing-library";
import { Provider } from "react-redux";
import userReducer from "../Store/user";
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Store/authSlice";
import UserAuthContextProvider from "../Context/UserAuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default {
  title: "Pages/Home",
  component: HomePage,
  parameters: {
    reactRouter: {
      routePath: "/signin",
    },
  },
};
const store = configureStore({
  reducer: { auth: authSliceReducer, user: userReducer },
});

const Template = (args) => {
  // const Mycontext = useContext(AuthContext);
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
          <HomePage {...args} />
        </UserAuthContextProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export const HomePageFAQ = Template.bind({});
// export const HomePageFAQOpen = Template.bind({});
// HomePageFAQOpen.args = {};
// HomePageFAQOpen.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const Button = canvas.getByTestId("FAQ-header");
// };
