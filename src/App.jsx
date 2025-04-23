import { useState } from 'react'
import Navbar from './components/Navbar'
import Featured from './components/featured'
import Footer from './components/footer'
import SignIn from './pages/signIn'

function App() {
  return (
    <div>
      <Navbar />
      <Featured />
      <Footer />
      <SignIn />
    </div>
  );
}
export default App;