import OrderSummary from "../components/UI/OrderSummary";

export default function Checkout() {
    return <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-3xl font-bold mb-8">Checkout</h1>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-8">
                <form class="space-y-8">
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <h2 class="text-xl font-semibold mb-6">Shipping Information</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" name="firstName" required="" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value="" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" name="lastName" required="" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value="" />
                            </div>
                            <div class="md:col-span-2">
                                <label class="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" required="" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value="email@email.com" />
                            </div>
                            <div class="md:col-span-2">
                                <label class="block text-sm font-medium text-gray-700">Address</label>
                                <input type="text" name="address" required="" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value="" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">City</label>
                                <input type="text" name="city" required="" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value="" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Postal Code</label>
                                <input type="text" name="postalCode" required="" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value="" />
                            </div>
                            <div class="md:col-span-2">
                                <label class="block text-sm font-medium text-gray-700">Country</label>
                                <input type="text" name="country" required="" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value="" />
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <h2 class="text-xl font-semibold mb-6">Payment Information</h2>
                        <div class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Card Number</label>
                                <input type="text" name="cardNumber" required="" placeholder="1234 5678 9012 3456" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value="" />
                            </div>
                            <div class="grid grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Expiry Date</label>
                                    <input type="text" name="expiryDate" required="" placeholder="MM/YY" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value="" />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700">CVV</label>
                                    <input type="text" name="cvv" required="" placeholder="123" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Place Order</button>
                </form>
            </div>
            <OrderSummary />
        </div>
    </div>
}