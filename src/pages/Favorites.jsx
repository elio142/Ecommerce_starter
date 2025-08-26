import { useEffect, useState, useContext } from "react";
import ProductCard from "../components/UI/ProductCard";
import EmptyFavorites from "../components/blocks/EmptyFavorites";
import { AuthContext } from "../context/AuthContext";

export default function Favorites() {
  const { user } = useContext(AuthContext);
  const userId = user?.id || "guest"; // fallback for not logged in
  const storageKey = `wishlist_${userId}`;

  const [wishlistArray, setWishlistArray] = useState([]);

  // Load wishlist whenever user changes
  useEffect(() => {
    document.title = "ShopHub | Favorites";
    const storedWishlist = localStorage.getItem(storageKey);
    setWishlistArray(storedWishlist ? JSON.parse(storedWishlist) : []);
  }, [storageKey]);

  const handleRemoveFavorite = (productIdToRemove) => {
    const updatedWishlist = wishlistArray.filter((id) => id !== productIdToRemove);
    localStorage.setItem(storageKey, JSON.stringify(updatedWishlist));
    setWishlistArray(updatedWishlist);
  };

  return (
    <>
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
    </>
  );
}
