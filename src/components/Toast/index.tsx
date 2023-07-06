// React Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icon
import { CheckCircle } from "@phosphor-icons/react";

// Toast Container
const Toast = () => {
    return (
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            newestOnTop={false}
            toastStyle={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "4px",
                fontSize: "14px",
                border: "1px solid #ddd",
                overflow: "hidden",
            }}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    );
};

// Download Alert
// eslint-disable-next-line react-refresh/only-export-components
export const addProductAlert = () => {
    toast.success("Adicionado ao carrinho!", {
        icon: (
            <CheckCircle style={{ color: "#22c55e" }} weight="bold" size={24} />
        ),
    });
};

export default Toast;
