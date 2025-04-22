import { useState } from 'react'
import Navbar from './components/Navbar'
import Featured from './components/featured'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar />
      <Featured />
      <Footer />
    </div>
  );
}
export default App;