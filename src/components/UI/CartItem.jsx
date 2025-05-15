import { initialProducts } from "../../lib/data";
import { useCart } from "../../hooks/useCart";

export default function CartItem({ item }) {
    const { removeItem, updateItemQuantity } = useCart();
    const { id, quantity } = item;

    const productData = initialProducts.find((p) => p.id === parseInt(id, 10));

    function incrementItemCount() { updateItemQuantity(id, quantity + 1); }
    function decrementItemCount() { updateItemQuantity(id, quantity - 1); }

    return (
        <div className="flex items-center p-6 border-b last:border-b-0 border-gray-200">
            <img src={productData.image_url} alt={productData.name} className="w-24 h-24 object-cover rounded-md" />
            <div className="ml-6 flex-1">
                <h3 className="text-lg font-semibold">{productData.name}</h3>
                <p className="text-gray-600 mt-1">{productData.description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button onClick={() => removeItem(id)} className="text-red-500 hover:text-red-700 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 w-5 h-5">
                                <path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                <line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17">
                                </line>
                            </svg>
                        </button>
                        <div className="flex items-center border rounded-md">
                            <button onClick={decrementItemCount} className="p-2 hover:bg-gray-100 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus w-4 h-4">
                                    <path d="M5 12h14"></path>
                                </svg>
                            </button>
                            <span className="px-4 py-2 border-x">{quantity}</span>
                            <button onClick={incrementItemCount} className="p-2 hover:bg-gray-100 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-4 h-4">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <span className="text-lg font-semibold">${(productData.price * quantity).toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}