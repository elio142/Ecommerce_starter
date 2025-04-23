import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Product from './components/Product';
import Category from './components/Homepage/Category';
import FeaturedCategories from './components/Homepage/FeaturedCategories';
import FeaturedProducts from './components/Homepage/FeaturedProducts';
import Contact from './pages/Contact';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <FeaturedProducts />
    </div>
  );
}
export default App;