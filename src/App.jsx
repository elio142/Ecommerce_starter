import SignIn from "./pages/signIn";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/blocks/ProtectedRoute"; 

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        {/* Home no security */}
        <Route path="/" element={<Home />} />

        {/* Sign In no security*/}
        <Route path="/SignIn" element={<SignIn />} />

        {/* u should sign in to enter */}
        <Route
          path="/Categories"
          element={
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
