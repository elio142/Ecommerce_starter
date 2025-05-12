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
import NotFoundPage from "./pages/NotFoundPage";
import AppProviders from "./context/AppProviders";

function App() {
  return (
    <>
      <AppProviders>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignInToFavorites" element={<SignInToFavorites />} />
            <Route path="/SignInToCheckout" element={<SignInToCheckout />} />

            {/* Protected Pages */}
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/Checkout" element={<Checkout />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </AppProviders>
    </>
  );
}

export default App;
