import SignIn from "./pages/signIn";
import Categories from "./pages/Categories";
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
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
      </AppProviders>
    </div>
  );
}

export default App;
