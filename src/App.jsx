import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Footer from './components/footer'
import SignIn from './pages/signIn'
import FeaturedCategories from './components/Homepage/FeaturedCategories'
import FeaturedProducts from './components/Homepage/FeaturedProducts'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedCategories/>
      <FeaturedProducts/>
      <Footer />
      <SignIn />
    </div>
  );
}
export default App;