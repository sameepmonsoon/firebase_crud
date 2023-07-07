import { useContext } from "react";
import { AuthContext } from "../../Context/UserAuthContext";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { currentUser, isLoading } = useContext(AuthContext);
  if (currentUser === null) {
    return <Navigate to="/signup" replace />;
  }
  if (!isLoading && currentUser) return children;
};

export default ProtectedRoute;
