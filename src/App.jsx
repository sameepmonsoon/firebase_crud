import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import UserAuthContextProvider from "./Context/UserAuthContext";
import SignIn from "./Pages/SignIn";
import HomePage from "./Pages/HomePage";
import ProtectedRoute from "./services/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
}

export default App;
