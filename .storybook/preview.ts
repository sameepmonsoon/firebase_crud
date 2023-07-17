import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";
import { withRouter } from "storybook-addon-react-router-v6";
const preview: Preview = {
  decorators: [withRouter],
 
};

export default preview;
