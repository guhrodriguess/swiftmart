import { useContext } from "react";

import { CartItem } from "@/components/CartItem";

import * as Styles from "./styles";

import AppContext from "@/contexts/AppContext";

import formatCurrency from "@/utils/formatCurrency";

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
            <Styles.CartWrapper
                style={
                    isCartVisible
                        ? { transform: "translateX(0)" }
                        : { transform: "translateX(120%)" }
                }
            >
                <Styles.Info>
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
                </Styles.Info>
                <button id="close" onClick={handleCloseCartBar}>
                    <X weight="bold" size={24} />
                </button>
                <Styles.CartList>
                    {cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} data={cartItem} />
                    ))}
                </Styles.CartList>
                <Styles.CartResume>
                    <span>Total de Produtos ({cartItems.length})</span>
                    <p>{formatCurrency(totalPrice)}</p>
                </Styles.CartResume>
                {cartItems.length > 0 && (
                    <Link to="/purchase">
                        <button id="buy" onClick={handleCloseCartBar}>
                            finalizar compra{" "}
                            <ArrowRight weight="bold" id="arrowRight" />
                        </button>
                    </Link>
                )}
            </Styles.CartWrapper>

            {isCartVisible && (
                <Styles.PageOpacity onClick={handleCloseCartBar} />
            )}
        </>
    );
}
