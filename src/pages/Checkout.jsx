import { useEffect, useState } from "react";
import CartDetails from "../components/UI/CartDetails";
import { useNavigate } from "react-router-dom";
import { XCircle, CheckCircle } from 'lucide-react';

export default function Checkout() {
    useEffect(() => {
        document.title = 'ShopHub | Checkout';
    }, []);

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("email@email.com");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    const [orderPlaced, setOrderPlaced] = useState(false);
    const [validationErrors, setValidationErrors] = useState({}); // New state for validation errors

    const handleSubmit = (event) => {
        event.preventDefault();

        // Object to store errors
        const errors = {};

        // Validation logic
        if (!firstName) errors.firstName = "First name is required.";
        if (!lastName) errors.lastName = "Last name is required.";
        if (!email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid.";
        }
        if (!address) errors.address = "Address is required.";
        if (!city) errors.city = "City is required.";
        if (!postalCode) errors.postalCode = "Postal code is required.";
        if (!country) errors.country = "Country is required.";
        if (!cardNumber || cardNumber.length < 16) errors.cardNumber = "Card number must be 16 digits.";
        if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) errors.expiryDate = "Invalid expiry date (MM/YY).";
        if (!cvv || cvv.length !== 3) errors.cvv = "CVV must be 3 digits.";

        // Update the state with any new errors
        setValidationErrors(errors);

        // If there are no errors, proceed with placing the order
        if (Object.keys(errors).length === 0) {
            setOrderPlaced(true);
        }
    };

    if (orderPlaced) {
        return (
            <div className="max-w-2xl mx-auto py-20 text-center">
                <CheckCircle className="mx-auto text-green-500" size={64} />
                <h2 className="text-2xl font-bold mt-6 mb-2">Thank you for your order!</h2>
                <p className="text-gray-600 mb-8">Your order has been placed successfully.</p>
                <button
                    className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                    onClick={() => navigate("/")}
                >
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${validationErrors.firstName ? 'border-red-500' : ''}`}
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {validationErrors.firstName && <p className="text-red-500 text-sm mt-1">{validationErrors.firstName}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${validationErrors.lastName ? 'border-red-500' : ''}`}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {validationErrors.lastName && <p className="text-red-500 text-sm mt-1">{validationErrors.lastName}</p>}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${validationErrors.email ? 'border-red-500' : ''}`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {validationErrors.email && <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${validationErrors.address ? 'border-red-500' : ''}`}
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    {validationErrors.address && <p className="text-red-500 text-sm mt-1">{validationErrors.address}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${validationErrors.city ? 'border-red-500' : ''}`}
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                    {validationErrors.city && <p className="text-red-500 text-sm mt-1">{validationErrors.city}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        required
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${validationErrors.postalCode ? 'border-red-500' : ''}`}
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                    />
                                    {validationErrors.postalCode && <p className="text-red-500 text-sm mt-1">{validationErrors.postalCode}</p>}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">Country</label>
                                    <input
                                        type="text"
                                        name="country"
                                        required
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${validationErrors.country ? 'border-red-500' : ''}`}
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                    {validationErrors.country && <p className="text-red-500 text-sm mt-1">{validationErrors.country}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Card Number</label>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        required
                                        placeholder="1234 5678 9012 3456"
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${validationErrors.cardNumber ? 'border-red-500' : ''}`}
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                    />
                                    {validationErrors.cardNumber && <p className="text-red-500 text-sm mt-1">{validationErrors.cardNumber}</p>}
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                        <input
                                            type="text"
                                            name="expiryDate"
                                            required
                                            placeholder="MM/YY"
                                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${validationErrors.expiryDate ? 'border-red-500' : ''}`}
                                            value={expiryDate}
                                            onChange={(e) => setExpiryDate(e.target.value)}
                                        />
                                        {validationErrors.expiryDate && <p className="text-red-500 text-sm mt-1">{validationErrors.expiryDate}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">CVV</label>
                                        <input
                                            type="text"
                                            name="cvv"
                                            required
                                            placeholder="123"
                                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${validationErrors.cvv ? 'border-red-500' : ''}`}
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                        />
                                        {validationErrors.cvv && <p className="text-red-500 text-sm mt-1">{validationErrors.cvv}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
                <CartDetails />
            </div>
        </div>
    );
}