import { useCart } from "../hooks/useCart";
import CartItem from "../components/UI/CartItem";
import EmptyCart from "../components/blocks/EmptyCart";
import PaymentSummary from "../components/UI/PaymentSummary";


export default function Cart() {
    const { cartItems } = useCart();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {cartItems && cartItems.length > 0 ? (
                <>
                    <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8">
                            <div className="bg-white shadow-sm rounded-lg">
                                {cartItems.map(cartItem => (
                                    <CartItem item={cartItem} key={cartItem.id} />
                                ))}
                            </div>
                        </div>
                        <PaymentSummary />
                    </div>
                </>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
}
