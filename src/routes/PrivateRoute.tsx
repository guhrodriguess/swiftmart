// React Router Dom
import { RouteProps, Navigate } from "react-router-dom";

// Private Route
export default function PrivateRoute({ children }: RouteProps) {
    const cartItems = localStorage.getItem("cartItems");
    const myObject = cartItems ? JSON.parse(cartItems) : null;

    const hasCartItems = myObject && Object.keys(myObject).length > 0;

    return <>{hasCartItems ? { children } : <Navigate to="/" replace />}</>;
}
