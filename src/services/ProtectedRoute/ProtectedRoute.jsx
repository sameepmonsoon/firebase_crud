import { useContext } from "react";
import { AuthContext } from "../../Context/UserAuthContext";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/signup" replace />;
  }

  return children;
};

export default ProtectedRoute;
