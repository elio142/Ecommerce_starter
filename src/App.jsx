import SignIn from "./pages/signIn";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import Checkout from "./pages/Checkout";
import SignInToFavorites from "./components/blocks/SignInToFavorites";
import SignInToCheckout from "./components/blocks/SignInToCheckout";
import ProtectedRoute from "./components/blocks/ProtectedRoute";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignInToFavorites" element={<SignInToFavorites />} />
            <Route path="/SignInToCheckout" element={<SignInToCheckout />} />
            {/* Protected Pages */}
            <Route
              path="/Checkout"
              element={
                <ProtectedRoute fallback={<SignInToCheckout />}>
                  <Checkout />
                </ProtectedRoute>
              }
            />

            <Route
              path="/Favorites"
              element={
                <ProtectedRoute fallback={<SignInToFavorites />}>
                  <Favorites />
                </ProtectedRoute>
              }
            />
          </Routes>
          </main>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
