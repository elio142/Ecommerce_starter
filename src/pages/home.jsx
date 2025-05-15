import { useEffect } from "react";
import FeaturedCategories from "../components/blocks/FeaturedCategories";
import FeaturedProducts from "../components/blocks/FeaturedProducts";
import HeroSection from "../components/blocks/HeroSection";

export default function Home() {

  useEffect(() => {
    document.title = 'ShopHub | Your Online Marketplace';
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
    </div>
  );
}
