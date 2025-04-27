import { useEffect, useState } from "react";
import { initialProducts } from "../../lib/data";
import { useCart } from "../../hooks/useCart";

export default function ProductCard({ id, product, onRemoveFavorite }) {
  let productData;
  const [isWishlisted, setIsWishlisted] = useState(false);

  // get .addItem method from useCart
  const { addItem } = useCart();

  if (product) {
    productData = product;
  } else if (id) {
    const productId = parseInt(id, 10);
    productData = initialProducts.find((p) => p.id === productId);
  }

  if (!productData) {
    return <div className="text-red-500">Product not found.</div>;
  }


  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      const wishlistArray = JSON.parse(storedWishlist);
      setIsWishlisted(wishlistArray.includes(productData.id));
    }

  }, [isWishlisted]);


  const handleWishlistToggle = () => {
    const storedWishlist = localStorage.getItem("wishlist");
    let wishlistArray = storedWishlist ? JSON.parse(storedWishlist) : [];

    if (isWishlisted) {
      wishlistArray = wishlistArray.filter(id => id !== productData.id);
      if (onRemoveFavorite)
        onRemoveFavorite(productData.id);
    } else {
      wishlistArray.push(productData.id);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlistArray));
    setIsWishlisted(!isWishlisted);
  }


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative h-48">
        <img
          src={productData.image_url}
          alt={productData.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <button onClick={handleWishlistToggle} className="cursor-pointer absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-heart w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{productData.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{productData.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${productData.price}</span>
          <button
            className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => addItem(productData.id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
