import React from 'react';
import { useCart } from '../../hooks/useCart.js';
import { initialProducts } from '../../lib/data.js';

export default function CartDetails() {
    const { cartItems, totalPrice } = useCart();

    return (
        <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                <div className="space-y-4">
                    {cartItems.map(item => {
                        const product = initialProducts.find(p => p.id === item.id);
                        if (!product) {
                            return <div key={item.id}>Product not found</div>;
                        }
                        const itemTotal = (product.price * item.quantity).toFixed(2);
                        return (
                            <div key={item.id} className="flex justify-between">
                                <span>{product.name} x {item.quantity}</span>
                                <span>${itemTotal}</span>
                            </div>
                        );
                    })}
                    <div className="border-t pt-4 flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}