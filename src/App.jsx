import SignIn from "./pages/signIn";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact"
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/home"
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Categories" element={<Categories />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/SignIn" element={<SignIn />}/>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
