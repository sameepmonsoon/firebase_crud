import HomeLayout from "../Layout/HomeLayout";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { validateUserForm } from "../services/HandleFormValidation/HandleFormValidation";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firestoreAuth, firestoreDb } from "../Utils/Firebase";
import { PiSpinnerBold } from "react-icons/pi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { updateProfile } from "firebase/auth";
import {
  toastMessageError,
  toastMessageSuccess,
} from "../services/ToastMessage/ToastMessage";
import { useDispatch } from "react-redux";
import { loginUser } from "../Store/authSlice";
import FormValues from "../../Types/Page/SignInSignUpTypes";
const SignUp = () => {
  const dispatch = useDispatch();
  const { signUp } = useContext(AuthContext);
  const [formValues, setFormValues] = useState<FormValues>({});
  const [formErrors, setFormErrors] = useState<any>({});
  const [togglePassword, setTogglePassword] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // functions
  const handleTogglePassword = () => {
    if (togglePassword === "text") {
      setTogglePassword("password");
    }

    if (togglePassword === "password") {
      setTogglePassword("text");
    }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors(validateUserForm(formValues));
    if (
      Object.keys(validateUserForm(formValues))?.length === 0 &&
      formValues?.username?.trim().length > 0 &&
      formValues?.password?.trim().length > 0
    ) {
      const userId = query(
        collection(firestoreDb, "users"),
        where("username", "==", formValues?.username)
      );
      const allDocs = await getDocs(userId);

      if (allDocs.docs.length != 0) {
        toastMessageError("Username already in use.");
        setFormErrors({
          ["username"]: "Username already in use.",
        });
      } else {
        await signUp(formValues.email, formValues.password)
          .then(async (res) => {
            dispatch(
              loginUser({
                email: res.user.email,
                uid: res.user.uid,
                displayName: formValues.username,
              })
            );
            if (formValues.roles === "admin" || formValues.roles === "user") {
              await addDoc(collection(firestoreDb, "users"), {
                uid: res?.user?.uid,
                username: formValues.username,
                email: formValues.email,
                password: formValues.password,
                roles: formValues.roles,
              })
                .then((res) => console.log(res))
                .catch((err) => {
                  console.log(err.code);
                });
            }
            toastMessageSuccess(`Welcome! ${formValues?.username}`);
            await updateProfile(firestoreAuth?.currentUser, {
              displayName: formValues?.username,
            }).then(() => {
              // afterLogin();
              // localStorage.setItem("currentUser", JSON.stringify(res?.user));
              navigate("/");
            });
          })
          .catch((err) => {
            if (err.code === "auth/email-already-in-use") {
              toastMessageError("Email already in use.");
            }
            if (err.code === "auth/too-many-requests") {
              toastMessageError("Too many attempts. Please wait.");
            } else {
              toastMessageError("Error signing up.");
            }
          })
          .finally(() => setIsLoading(false));
      }
    }

    if (Object.keys(validateUserForm(formValues))?.length >= 0) {
      setIsLoading(false);
    }
  };

  return (
    <HomeLayout>
      <form
        action=""
        onSubmit={handleSubmit}
        className="overflow-x-hidden border-black/10 overflow-y-auto w-[20rem] sm:w-[32rem] h-[30rem] sm:h-[37rem] flex flex-col justify-start items-center p-10 bg-white border-[1px] shadow-md text-black rounded-sm gap-9">
        <p className="w-full flex justify-center items-center text-2xl capitalize text-blue-600 font-[600] border-b-[1px] border-black/40 py-2">
          sign up
        </p>
        <label
          htmlFor="username"
          className="w-full flex justify-center items-center flex-col text-sm gap-1">
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={handleChange}
            className="border-[1px] outline-0 p-1 px-3 h-[2.7rem] w-full sm:w-[25rem] border-black/40  rounded-sm focus:outline focus:outline-2 focus:outline-blue-300 focus:outline-offset-1 focus:border-blue-500"
            placeholder="User Name"
          />
          {formErrors.username && (
            <span className="w-[95%] px-[2px] h-[1.5rem]  text-rose-400">
              {formErrors.username}
            </span>
          )}
        </label>
        <label
          htmlFor="email"
          className="w-full flex justify-center items-center flex-col text-sm gap-1">
          <input
            type="email"
            name="email"
            required
            id="email"
            onChange={handleChange}
            className="relative border-[1px] outline-0 p-1 px-3 h-[2.7rem] w-full sm:w-[25rem] border-black/40  rounded-sm focus:outline focus:outline-2 focus:outline-blue-300 focus:outline-offset-1 focus:border-blue-500"
            placeholder="Email"
          />

          {formErrors.email && (
            <span className="w-[95%] px-[2px] h-auto text-rose-400">
              {formErrors.email}
            </span>
          )}
        </label>
        <label
          htmlFor="Password"
          className="w-full relative flex justify-center items-center flex-col text-sm gap-1">
          <input
            type={togglePassword}
            name="password"
            required
            id="Password"
            maxLength={10}
            onChange={handleChange}
            className=" border-[1px] outline-0 p-1 h-[2.7rem] px-3 pr-10 w-full sm:w-[25rem] border-black/40 rounded-sm focus:outline focus:outline-2 focus:outline-blue-300 focus:outline-offset-1 focus:border-blue-500"
            placeholder="Password"
          />
          <span
            className="absolute right-6 top-[0.67rem] cursor-pointer hover:bg-gray-300/80 text-black/80 flex justify-center items-center p-[2px] rounded-full"
            onClick={handleTogglePassword}>
            {togglePassword === "text" ? (
              <AiOutlineEye size={20} />
            ) : (
              <AiOutlineEyeInvisible size={20} />
            )}
          </span>
          {formErrors?.password && (
            <span className="relative w-[95%] px-[2px] h-auto text-rose-400">
              {formErrors.password}
            </span>
          )}
        </label>
        <label
          htmlFor="Role"
          className="w-full flex justify-center items-center flex-col text-sm gap-1">
          <select
            name="roles"
            id="roles"
            required
            defaultValue={""}
            onChange={handleChange}
            className="appearance-none border-[1px] outline-0 p-1 h-[2.7rem] px-3 w-full sm:w-[25rem] border-black/40 rounded-sm focus:outline focus:outline-2 focus:outline-blue-300 focus:outline-offset-1 focus:border-blue-500"
            placeholder="Select Role">
            <option value="" disabled hidden>
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          {formErrors.roles && (
            <span className="w-[95%] px-[2px] h-auto text-rose-4000">
              {formErrors.roles}
            </span>
          )}
        </label>

        <button
          disabled={isLoading}
          type="submit"
          className={`w-full sm:w-[25rem] capitalize bg-blue-600 flex justify-center  items-center min-h-[2.7rem] p-0 rounded-[3px] text-sm font-[500] text-white border-[1px] border-blue-200 hover:bg-blue-500 hover:border-blue-300 ${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          } `}>
          {isLoading ? (
            <PiSpinnerBold size={30} className="animate-spin " />
          ) : (
            "Sign Up"
          )}
        </button>

        <div className="w-full flex justify-center items-center gap-1 text-gray-700 flex-wrap">
          Already Have an account?{" "}
          <Link
            to="/signin"
            className="underline underline-offset-2 decoration-1 italic hover:no-underline text-blue-500">
            Sign In
          </Link>
        </div>
      </form>
    </HomeLayout>
  );
};

export default SignUp;
