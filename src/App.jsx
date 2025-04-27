import SignIn from "./pages/signIn";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact"
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/home"
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import AuthProvider from "./context/AuthProvider";
import CartProvider from "./context/CartContext";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}
export default App;
