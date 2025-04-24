import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Home from './pages/home';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;