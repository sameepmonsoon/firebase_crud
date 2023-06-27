import HomeLayout from "../Layout/HomeLayout";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { validateUserForm } from "../services/HandleFormValidation/HandleFormValidation";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDb } from "../Utils/Firebase";
import { PiSpinnerBold } from "react-icons/pi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  toastMessageError,
  toastMessageSuccess,
} from "../services/ToastMessage/ToastMessage";
const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const [formValues, setFormValues] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [togglePassword, setTogglePassword] = useState("text");
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
    const userId = query(
      collection(firestoreDb, "users"),
      where("username", "==", formValues?.username)
    );
    const allDocs = await getDocs(userId);
    if (allDocs.docs.length != 0) {
      setFormErrors({
        ...formErrors,
        ["username"]: "Username already in use.",
      });
    }
    if (
      allDocs.docs.length === 0 &&
      Object.keys(formErrors).length <= 0 &&
      formValues?.username.trim().length > 0 &&
      formValues?.password.trim().length > 0
    ) {
      await signUp(formValues.email, formValues.password)
        .then(async (res) => {
          toastMessageSuccess("Welcome!");
          if (formValues.roles === "admin" || formValues.roles === "user") {
            const userId = await addDoc(collection(firestoreDb, "users"), {
              uid: res?.user?.uid,
              username: formValues.username,
              email: formValues.email,
              password: formValues.password,
              roles: formValues.roles,
            })
              .then((res) => console.log(res))
              .catch((err) => {
                console.log("inside innner then", err.code);
              });

            console.log(userId);
          }
          navigate("/");
        })
        .catch((err) => {
          console.log(err.code);
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

    if (Object.keys(formErrors).length >= 0) {
      setIsLoading(false);
    }
  };

  return (
    <HomeLayout>
      <form
        action=""
        onSubmit={handleSubmit}
        className="overflow-x-hidden overflow-y-auto w-[22rem] sm:w-[35rem] h-[38rem] sm:h-[45rem] flex flex-col justify-start items-center p-10 bg-blue-600 rounded-lg gap-10">
        <p className="w-full flex justify-center items-center text-4xl capitalize text-white font-[600] border-b-2 py-2">
          sign up
        </p>
        <label
          htmlFor="username"
          className="w-full flex justify-center items-center flex-col">
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={handleChange}
            className="border-[1px] outline-0 p-1 px-3 h-[3rem] w-full sm:w-[30rem] rounded-sm focus:outline focus:outline-2 focus:outline-blue-200 focus:outline-offset-1 focus:border-transparent"
            placeholder="User Name"
          />
          {formErrors.username && (
            <span className="w-full h-[1.5rem]  text-rose-400">
              {formErrors.username}
            </span>
          )}
        </label>
        <label
          htmlFor="email"
          className="w-full flex justify-center items-center flex-col">
          <input
            type="email"
            name="email"
            required
            id="email"
            onChange={handleChange}
            className="relative border-[1px] outline-0 p-1 px-3 h-[3rem] w-full sm:w-[30rem] rounded-sm focus:outline focus:outline-2 focus:outline-blue-200 focus:outline-offset-1 focus:border-transparent"
            placeholder="Email"
          />

          {formErrors.email && (
            <span className="w-full h-auto text-rose-400">
              {formErrors.email}
            </span>
          )}
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
            className=" border-[1px] outline-0 p-1 h-[3rem] px-3 w-full sm:w-[30rem] rounded-sm focus:outline focus:outline-2 focus:outline-blue-200 focus:outline-offset-1 focus:border-transparent"
            placeholder="Password"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={handleTogglePassword}>
            {togglePassword === "text" ? (
              <AiOutlineEyeInvisible size={25} />
            ) : (
              <AiOutlineEye size={25} />
            )}
          </span>
          {formErrors?.password && (
            <span className="relative w-full h-auto text-rose-400">
              {formErrors.password}
            </span>
          )}
        </label>
        <label
          htmlFor="Role"
          className="w-full flex justify-center items-center flex-col">
          <select
            type="text"
            name="roles"
            id="roles"
            required
            defaultValue={""}
            onChange={handleChange}
            className="border-[1px] outline-0 p-1 h-[3rem] px-3 w-full sm:w-[30rem] rounded-sm focus:outline focus:outline-2 focus:outline-blue-200 focus:outline-offset-1 focus:border-transparent"
            placeholder="Select Role">
            <option value="" disabled hidden>
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          {formErrors.roles && (
            <span className="w-full h-auto text-red-600">
              {formErrors.roles}
            </span>
          )}
        </label>

        <button
          disabled={isLoading}
          type="submit"
          className={`w-full capitalize bg-blue-400 flex justify-center  items-center min-h-[3rem] p-0 rounded-md text-xl font-[500] text-white border-[1px] border-blue-200 hover:bg-blue-500 hover:border-blue-300 ${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          } `}>
          {isLoading ? (
            <PiSpinnerBold size={30} className="animate-spin " />
          ) : (
            "Sign Up"
          )}
        </button>

        <p className="w-full text-white flex justify-center items-center gap-1">
          Already Have an account?{" "}
          <Link
            to="/signin"
            className="underline underline-offset-2 decoration-1 italic hover:no-underline">
            Sign In
          </Link>
        </p>
      </form>
    </HomeLayout>
  );
};

export default SignUp;
