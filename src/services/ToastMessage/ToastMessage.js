import { toast } from "react-toastify";

export const toastMessageSuccess = (message) => {
  const toastMessageId = "success";
  const existingToast = toast.isActive(toastMessageId);
  if (existingToast) {
    toast.update(toastMessageId, {
      render: `${message}`,
      autoClose: 4000,
    });
  } else {
    toast.success(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      toastId: toastMessageId,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

export const toastMessageError = (message) => {
  const toastId = "error";
  const existingToast = toast.isActive(toastId);
  if (existingToast) {
    toast.update(toastId, {
      render: `${message}`,
      autoClose: 4000,
    });
  } else {
    toast.error(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      toastId,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  }
};
