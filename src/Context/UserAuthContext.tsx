import { createContext, useEffect, useState } from "react";
import { firestoreAuth, firestoreDb } from "../Utils/Firebase.js";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { loginUser } from "../Store/authSlice.js";

import React from "react";
import UserAuthContextTypes from "../../Types/Context/UserAuthContextTypes";

export const AuthContext = createContext<UserAuthContextTypes | any>(null);
type ProviderProps = {
  children: React.JSX.Element;
};
const UserAuthContextProvider: React.FC<ProviderProps> = ({

  children,
}: ProviderProps) => {
  const dispatch = useDispatch();
  // state for current user
  const [currentUser, setCurrentUser] = useState<string | any>(
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
    const subscribe = firestoreAuth.onAuthStateChanged((user: any) => {
      if (user) {
        dispatch(
          loginUser({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
        localStorage.setItem("currentUser", user);
      }
      setCurrentUser(user);
      setIsLoading(false);
    });

    return subscribe;
  }, []);

  useEffect(() => {
    getAdminStatus();
  }, [currentUser]);

  // authcontext provider values

  const values: UserAuthContextTypes = {
    isLoading,
    currentUser,
    login,
    signUp,
    logOut,
    isAdminRole,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default UserAuthContextProvider;
