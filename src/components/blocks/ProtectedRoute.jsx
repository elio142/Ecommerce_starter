import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; // Import useAuth hook

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Get the user from context

  if (!user) {
    // Redirect to login page if no user is authenticated
    return <Navigate to="/SignIn" />;
  }

  return children; // Render the protected component
};

export default ProtectedRoute;
