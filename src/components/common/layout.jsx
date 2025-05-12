// src/components/common/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Render your existing Navbar component */}
      <Navbar />

      {/* 2. Outlet is where React-Router will inject the current page */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 3. Render your existing Footer component */}
      <Footer />
    </div>
  );
}
