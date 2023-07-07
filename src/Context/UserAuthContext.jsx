import { createContext, useEffect, useState } from "react";
import { firestoreAuth, firestoreDb } from "../Utils/Firebase.js";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { loginUser } from "../Store/authSlice.jsx";
export const AuthContext = createContext(null);
const UserAuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  // state for current user
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("currentUser")
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isAdminRole, setIsAdminRole] = useState(false);

  // firebase signup Function
  function signUp(email, password) {
    return createUserWithEmailAndPassword(firestoreAuth, email, password);
  }

  // firebase signup function
  function login(email, password) {
    return signInWithEmailAndPassword(firestoreAuth, email, password);
  }

  //firebase logout function
  function logOut() {
    localStorage.removeItem("currentUser");
    return signOut(firestoreAuth);
  }

  // function to get the role status

  async function getAdminStatus() {
    const userId = query(
      collection(firestoreDb, "users"),
      where("uid", "==", currentUser?.uid)
    );
    const allDocs = await getDocs(userId);

    allDocs?.docs?.map((doc) => {
      if (doc?.data()?.roles === "admin") {
        setIsAdminRole(true);
        return true;
      } else {
        setIsAdminRole(false);
        return false;
      }
    });
  }
  // effect to fetch the currentUser

  useEffect(() => {
    const subscribe = firestoreAuth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        dispatch(
          loginUser({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      }
      localStorage.setItem("currentUser", JSON.stringify(user));
      setCurrentUser(user);
      setIsLoading(false);
    });

    return subscribe;
  }, []);

  useEffect(() => {
    getAdminStatus();
  }, [currentUser]);

  // authcontext provider values

  const value = {
    isLoading,
    currentUser,
    login,
    signUp,
    logOut,
    isAdminRole,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default UserAuthContextProvider;
