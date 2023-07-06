import AppContext from "../../contexts/AppContext";
import {
    PurchaseComponent,
    PurchaseWrapper,
    Title,
    CartList,
    ConfirmComponent,
    ModalComponent,
    ModalWrapper,
    Modal,
    Info,
} from "./styles";
import { CartItem } from "../../components/CartItem";
import { useContext, useState } from "react";
import { ArrowLeft, Check } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function PurchasePage() {
    const { cartItems, setCartItems } = useContext(AppContext);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => {
        setIsModalVisible(true);

        if (!isModalVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

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
                                    <h2>Sucesso!</h2>
                                </div>
                                <p>Sua compra foi realizada.</p>
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
