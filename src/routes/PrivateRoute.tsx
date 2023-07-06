import { RouteProps, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: RouteProps) {
    const hasCartItems = localStorage.getItem("cartItems");

    return hasCartItems ? children : <Navigate to="/" />;
}
