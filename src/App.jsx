import SignIn from "./pages/signIn";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/home";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SignInToFavorites from "./components/blocks/SignInToFavorites";
import SignInToCheckout from "./components/blocks/SignInToCheckout";
import ProtectedRoute from "./components/blocks/ProtectedRoute";
import AppProviders from "./context/AppProviders";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppProviders>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signintofavorites" element={<SignInToFavorites />} />
            <Route path="/signintocheckout" element={<SignInToCheckout />} />
            {/* Protected Pages */}
            <Route
              path="/checkout"
              element={
                <ProtectedRoute fallback={<SignInToCheckout />}>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute fallback={<SignInToFavorites />}>
                  <Favorites />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </AppProviders>
    </div>
  );
}

export default App;
