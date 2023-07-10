import HomeLayout from "../Layout/HomeLayout";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/UserAuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Store/authSlice";
import { PiSpinnerBold } from "react-icons/pi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  toastMessageError,
  toastMessageSuccess,
} from "../services/ToastMessage/ToastMessage";
import { useDispatch } from "react-redux";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { firestoreDb } from "../Utils/Firebase";
const SignIn = () => {
  const dispatch = useDispatch();
  const { login } = useContext(AuthContext);
  const [formValues, setFormValues] = useState([]);
  const [formError, setFormError] = useState([]);
  const [togglePassword, setTogglePassword] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  //   function for togglePassword
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

    if (formValues.password.trim().length === 0) {
      setFormError({ ["password"]: "Please enter your password." });
      setIsLoading(false);
    }
    if (formValues.password.trim().length > 0) {
      setFormError({});
      await login(formValues.email, formValues.password)
        .then(async (user) => {
          dispatch(
            loginUser({
              email: user.user.email,
              uid: user.user.uid,
              displayName: user.user.displayName,
            })
          );

          toastMessageSuccess(
            `Welcome! ${
              user.user.displayName != null ? user.user.displayName : ""
            }`
          );
          // afterLogin();
          navigate("/");
        })
        .catch((err) => {
          if (err.code === "auth/user-not-found") {
            toastMessageError("User Not found");
          }
          if (err.code === "auth/wrong-password") {
            toastMessageError("Password didnot match.");
          }
          if (err.code === "auth/too-many-requests") {
            toastMessageError("Too many attempts. Please wait.");
          } else {
            toastMessageError("Invalid Password");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <HomeLayout>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-[20rem] sm:w-[28rem] h-[28rem] flex flex-col justify-start items-center p-10 bg-white border-[1px] shadow-md text-black border-black/10 rounded-sm gap-10">
        <p className="w-full flex  text-blue-600 justify-center items-center text-[1.5rem] capitalize font-[600] border-b-[1px] border-black/30 py-2">
          sign In
        </p>
        <label
          htmlFor="email"
          className="w-full text-black flex justify-center items-center flex-col text-sm gap-1">
          <input
            type="email"
            name="email"
            required
            id="email"
            onChange={handleChange}
            className="border-[1px] outline-0 p-1 px-3 h-[2.7rem] w-full sm:w-[95%] rounded-sm border-black/40 focus:outline focus:outline-2 focus:outline-blue-300 focus:outline-offset-1 focus:border-blue-500"
            placeholder="Email"
          />
        </label>
        <label
          htmlFor="Password"
          className="w-full relative flex justify-center items-center flex-col text-sm gap-1">
          <input
            type={togglePassword}
            name="password"
            required
            id="Password"
            onChange={handleChange}
            maxLength={10}
            className="border-[1px] outline-0 p-1 px-3 pr-8 h-[2.7rem] w-full sm:w-[95%] border-black/40 rounded-sm focus:outline focus:outline-2 focus:outline-blue-300 focus:outline-offset-1 focus:border-blue-500"
            placeholder="Password"
          />
          <span
            className="absolute right-4 top-[0.67rem] cursor-pointer hover:bg-gray-300/80 text-black/80 flex justify-center items-center p-[2px] rounded-full"
            onClick={handleTogglePassword}>
            {togglePassword === "text" ? (
              <AiOutlineEye size={20} />
            ) : (
              <AiOutlineEyeInvisible size={20} />
            )}
          </span>
          {formError.password && (
            <span className="w-[25rem] px-[2px] h-auto text-rose-400">
              {formError.password}
            </span>
          )}
        </label>

        <button
          disabled={isLoading}
          type="submit"
          className={`w-full sm:w-[95%] capitalize bg-blue-600 flex justify-center ${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          }  items-center min-h-[2.6rem] p-0 rounded-[3px] text-md font-[500] text-white border-[1px] border-blue-200 hover:bg-blue-500 hover:border-blue-500`}>
          {isLoading ? (
            <span className="w-full flex justify-center items-center gap-2 text-lg animate-pulse">
              <PiSpinnerBold size={30} className="animate-spin " /> Processing
            </span>
          ) : (
            "Sign In"
          )}
        </button>

        <div className="w-full  text-gray-700 flex justify-center items-center gap-1 flex-wrap">
          {`Don't Have an account?`}
          <Link
            to="/signup"
            className="underline underline-offset-2 decoration-1 italic hover:no-underline text-blue-500">
            Sign Up
          </Link>
        </div>
      </form>
    </HomeLayout>
  );
};

export default SignIn;
