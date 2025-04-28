import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth"; // استدعاء useAuth
import ProductCard from "../components/UI/ProductCard";
import { initialProducts } from "../lib/data";
import EmptyFavorites from "../components/blocks/EmptyFavorites";
import SignInToFavorites from "../components/blocks/SignInToFavorites";

export default function Favorites() {
  const { user, loading } = useAuth(); // جلب بيانات المستخدم وحالة التحميل
  const [wishlistArray, setWishlistArray] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    setWishlistArray(storedWishlist ? JSON.parse(storedWishlist) : []);
  }, []);

  const handleRemoveFavorite = (productIdToRemove) => {
    const updatedWishlist = wishlistArray.filter(id => id !== productIdToRemove);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlistArray(updatedWishlist);
  };

  // عرض صفحة تحميل أثناء انتظار استرجاع بيانات المستخدم
  if (loading) {
    return <div>جاري التحميل...</div>;
  }

  // إذا كان المستخدم غير مسجل الدخول، إظهار صفحة تسجيل الدخول للمفضلة
  if (!user) {
    return <SignInToFavorites />;
  }

  return (
    <div>
      <main className="flex-grow">
        {wishlistArray.length === 0 ? (
          <EmptyFavorites />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlistArray.map((id) => (
                <ProductCard key={id} id={id} onRemoveFavorite={handleRemoveFavorite} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
