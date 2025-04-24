import SignIn from "./pages/signIn";
import Categories from "./pages/Categories";
import Hero from "./components/blocks/heroSection";
import Navbar from "./components/common/Navbar";
import FeaturedCategories from "./components/blocks/FeaturedCategories";
import FeaturedProducts from "./components/blocks/FeaturedProducts";
import Footer from "./components/common/Footer";
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
