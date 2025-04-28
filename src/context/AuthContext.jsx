import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext(); // إنشاء السياق

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // حالة المستخدم
  const [loading, setLoading] = useState(true); // حالة التحميل

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false); // بعد التحميل، نقوم بتحديث حالة التحميل
  }, []);

  const signIn = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // إرجاع قيمة تشمل حالة التحميل والمستخدم
  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
