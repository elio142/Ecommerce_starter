import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export default function PaymentSummary() {

    const { cartItems, totalPrice } = useCart();


    return (
        <div className="lg:col-span-4">
            <div className="bg-white p-6 shadow-sm rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${totalPrice}</span>
                    </div>
                </div>
                <Link to="/Checkout">
                    <button className="cursor-pointer w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    )
}