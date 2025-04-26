import { useCart } from "../hooks/useCart";
import { initialProducts } from "../lib/data";
import CartItem from "../components/UI/CartItem";
import EmptyCart from "../components/blocks/EmptyCart";
import CheckoutSummary from "../components/UI/CheckoutSummary";


export default function Cart() {
    const { cartItems } = useCart();

    return (
        <main className="flex-grow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {cartItems && cartItems.length > 0 ? (
                    <>
                        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-8">
                                <div className="bg-white shadow-sm rounded-lg">
                                    {cartItems.map(cartItem => (
                                        <CartItem id={cartItem.id} key={cartItem.id} />
                                    ))}
                                    <CheckoutSummary />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <EmptyCart />
                )}
            </div>
        </main>
    );
}
