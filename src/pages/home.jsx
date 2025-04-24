import FeaturedCategories from "../components/blocks/FeaturedCategories";
import FeaturedProducts from "../components/blocks/FeaturedProducts";
import HeroSection from "../components/blocks/heroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
    </div>
  );
}
