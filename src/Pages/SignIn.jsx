import HomeLayout from "../Layout/HomeLayout";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/UserAuthContext";
import { Link } from "react-router-dom";
// import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
// import { firestoreDb } from "../Utils/Firebase";
import { PiSpinnerBold } from "react-icons/pi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  toastMessageError,
  toastMessageSuccess,
} from "../services/ToastMessage/ToastMessage";
const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [formValues, setFormValues] = useState([]);
  const [formError, setFormError] = useState([]);
  const [togglePassword, setTogglePassword] = useState("text");
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
        .then(async () => {
          // const userId = query(
          //   collection(firestoreDb, "users"),
          //   where("uid", "==", res.user.uid)
          // );
          // const allDocs = await getDocs(userId);

          toastMessageSuccess("Welcome!");
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
        className="w-[20rem] sm:w-[35rem] h-[30rem] flex flex-col justify-start items-center p-10 bg-blue-600 rounded-lg gap-10">
        <p className="w-full flex justify-center items-center text-4xl capitalize text-white font-[600] border-b-2 py-2">
          sign In
        </p>
        <label
          htmlFor="email"
          className="w-full flex justify-center items-center ">
          <input
            type="email"
            name="email"
            required
            id="email"
            onChange={handleChange}
            className="border-[1px] outline-0 p-1 px-3 h-[3rem] w-[30rem] rounded-sm focus:outline focus:outline-2 focus:outline-blue-200 focus:outline-offset-1 focus:border-transparent"
            placeholder="Email"
          />
        </label>
        <label
          htmlFor="Password"
          className="w-full relative flex justify-center items-center flex-col">
          <input
            type={togglePassword}
            name="password"
            required
            id="Password"
            onChange={handleChange}
            className="border-[1px] outline-0 p-1 px-3 h-[3rem] w-full sm:w-[30rem] rounded-sm focus:outline focus:outline-2 focus:outline-blue-200 focus:outline-offset-1 focus:border-transparent"
            placeholder="Password"
          />
          <span
            className="absolute right-3 cursor-pointer  top-3 "
            onClick={handleTogglePassword}>
            {togglePassword === "text" ? (
              <AiOutlineEyeInvisible size={25} />
            ) : (
              <AiOutlineEye size={25} />
            )}
          </span>
          {formError.password && (
            <span className="w-full h-auto text-rose-400">
              {formError.password}
            </span>
          )}
        </label>

        <button
          disabled={isLoading}
          type="submit"
          className={`w-full capitalize bg-blue-400 flex justify-center ${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          }  items-center min-h-[3rem] p-0 rounded-md text-xl font-[500] text-white border-[1px] border-blue-200 hover:bg-blue-500 hover:border-blue-300`}>
          {isLoading ? (
            <span className="w-full flex justify-center items-center gap-2 text-lg animate-pulse">
              <PiSpinnerBold size={30} className="animate-spin " /> Processing
            </span>
          ) : (
            "Sign In"
          )}
        </button>

        <p className="w-full text-white flex justify-center items-center gap-1">
          {`Don't Have an account?`}
          <Link
            to="/signup"
            className="underline underline-offset-2 decoration-1 italic hover:no-underline text-red-300">
            Sign Up
          </Link>
        </p>
      </form>
    </HomeLayout>
  );
};

export default SignIn;
