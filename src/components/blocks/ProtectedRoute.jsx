import { useAuth } from "../../hooks/useAuth";

export default function CustomProtectedRoute({ children, fallback }) {
  const { user } = useAuth();

  if (!user) {
    return fallback; 
  }

  return children;
}
