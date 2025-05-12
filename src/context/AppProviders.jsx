import {AuthProvider} from "./AuthContext";
import {CartProvider} from "./CartContext";


export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </AuthProvider>
  );
}
