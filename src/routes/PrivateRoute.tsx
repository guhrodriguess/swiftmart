import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const cartItems = localStorage.getItem("cartItems");
  const myObject = cartItems ? JSON.parse(cartItems) : null;
  const hasCartItems = myObject && Object.keys(myObject).length > 0;

  return hasCartItems ? <Outlet /> : <Navigate to="/" />;
}
