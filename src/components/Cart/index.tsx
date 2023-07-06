import { useContext } from "react";
import { CartItem } from "../CartItem";
import { CartWrapper, Info, CartList, CartResume, PageOpacity } from "./styles";
import AppContext from "../../contexts/AppContext";
import formatCurrency from "../../utils/formatCurrency";
import { ArrowRight, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cartItems, setCartItems, isCartVisible, setIsCartVisible } =
        useContext(AppContext);

    const totalPrice = cartItems.reduce<string | number>(
        (acc, item) => item.price + acc,
        0
    );

    const handleRemoveAllItems = () => {
        setCartItems([]);
    };

    const handleCloseCartBar = () => {
        setIsCartVisible(false);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            <CartWrapper
                style={
                    isCartVisible
                        ? { transform: "translateX(0)" }
                        : { transform: "translateX(120%)" }
                }
            >
                <Info>
                    <div>
                        <h4>
                            Carrinho{" "}
                            {cartItems.length > 0 && (
                                <span>({cartItems.length})</span>
                            )}
                        </h4>
                        <hr />
                    </div>
                    <div>
                        {cartItems.length > 0 && (
                            <button onClick={handleRemoveAllItems}>
                                Limpar tudo
                            </button>
                        )}
                    </div>
                </Info>
                <button id="close" onClick={handleCloseCartBar}>
                    <X weight="bold" size={24} />
                </button>
                <CartList>
                    {cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} data={cartItem} />
                    ))}
                </CartList>
                <CartResume>
                    <span>Total de Produtos ({cartItems.length})</span>
                    <p>{formatCurrency(totalPrice)}</p>
                </CartResume>
                {cartItems.length > 0 && (
                    <Link to="/purchase">
                        <button id="buy" onClick={handleCloseCartBar}>
                            finalizar compra{" "}
                            <ArrowRight weight="bold" id="arrowRight" />
                        </button>
                    </Link>
                )}
            </CartWrapper>

            {isCartVisible && <PageOpacity />}
        </>
    );
}
