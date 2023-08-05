import { useContext, useEffect, useState } from "react";

import AppContext from "@/contexts/AppContext";

import {
    PurchaseComponent,
    PurchaseWrapper,
    Title,
    CartList,
    CartResume,
    ConfirmComponent,
    ModalComponent,
    ModalWrapper,
    Modal,
    Info,
} from "./styles";

import { CartItem } from "@/components/CartItem";

import { ArrowLeft, Check } from "@phosphor-icons/react";

import { Link } from "react-router-dom";

import formatCurrency from "@/utils/formatCurrency";

export default function PurchasePage({ title }) {
    const { cartItems, setCartItems } = useContext(AppContext);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        document.title = title;
    }, [title]);

    const handleModal = () => {
        setIsModalVisible(true);

        if (!isModalVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    const totalPrice = cartItems.reduce<string | number>(
        (acc, item) => item.price + acc,
        0
    );

    const clearCart = () => {
        setCartItems([]);

        document.body.style.overflow = "auto";
    };

    return (
        <>
            <PurchaseComponent>
                <PurchaseWrapper>
                    <Title>
                        Carrinho
                        <hr />
                    </Title>
                    <CartList>
                        {cartItems.map((cartItem) => (
                            <CartItem key={cartItem.id} data={cartItem} />
                        ))}
                    </CartList>
                    <CartResume>
                        <p>
                            Total <span id="divider">&mdash;</span>{" "}
                            <span>{formatCurrency(totalPrice)}</span>
                        </p>
                    </CartResume>
                    <ConfirmComponent>
                        <button onClick={handleModal}>confirmar compra</button>
                    </ConfirmComponent>
                </PurchaseWrapper>
            </PurchaseComponent>

            {isModalVisible && (
                <ModalComponent>
                    <ModalWrapper>
                        <Modal>
                            <Info>
                                <div className="title">
                                    <button>
                                        <Check weight="bold" size={30} />
                                    </button>
                                    <h2>Sucesso</h2>
                                </div>
                                <p>
                                    Sua compra no valor de{" "}
                                    <span>{formatCurrency(totalPrice)}</span>{" "}
                                    foi efetuada!
                                </p>
                                <Link to="/">
                                    <button id="back" onClick={clearCart}>
                                        <ArrowLeft
                                            weight="bold"
                                            id="arrowLeft"
                                        />
                                        voltar ao início
                                    </button>
                                </Link>
                            </Info>
                        </Modal>
                    </ModalWrapper>
                </ModalComponent>
            )}
        </>
    );
}
