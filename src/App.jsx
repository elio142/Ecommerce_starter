import Navbar from "./components/common/Navbar";
import Hero from "./components/hero";
import Footer from "./components/common/Footer";
import SignIn from "./pages/signIn";
import FeaturedCategories from "./components/Cards/FeaturedCategories";
import FeaturedProducts from "./components/Cards/FeaturedProducts";
import Categories from "./pages/Categories";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
export default App;
