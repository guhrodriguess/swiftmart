import { useContext, useEffect, useState } from "react";

import AppContext from "@/contexts/AppContext";

import * as Styles from "./styles";

import { CartItem } from "@/components/CartItem";

import { ArrowLeft, Check } from "@phosphor-icons/react";

import { Link, redirect } from "react-router-dom";

import formatCurrency from "@/utils/formatCurrency";

export default function PurchasePage({ title }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (cartItems.length <= 0) {
    redirect("/");
  }

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
      <Styles.PurchaseComponent>
        <Styles.PurchaseWrapper>
          <Styles.Title>
            Carrinho
            <hr />
          </Styles.Title>
          <Styles.CartList>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} data={cartItem} />
            ))}
          </Styles.CartList>
          <Styles.CartResume>
            <p>
              Valor total <span id="divider">&mdash;</span>{" "}
              <span>{formatCurrency(totalPrice)}</span>
            </p>
          </Styles.CartResume>
          <Styles.ConfirmComponent>
            <button onClick={handleModal}>confirmar compra</button>
          </Styles.ConfirmComponent>
        </Styles.PurchaseWrapper>
      </Styles.PurchaseComponent>

      {isModalVisible && (
        <Styles.ModalComponent>
          <Styles.ModalWrapper>
            <Styles.Modal>
              <Styles.Info>
                <div className="title">
                  <button>
                    <Check weight="bold" size={30} />
                  </button>
                  <h2>Sucesso</h2>
                </div>
                <p>
                  Sua compra no valor de{" "}
                  <span>{formatCurrency(totalPrice)}</span> foi efetuada!
                </p>
                <Link to="/">
                  <button id="back" onClick={clearCart}>
                    <ArrowLeft weight="bold" id="arrowLeft" />
                    voltar ao início
                  </button>
                </Link>
              </Styles.Info>
            </Styles.Modal>
          </Styles.ModalWrapper>
        </Styles.ModalComponent>
      )}
    </>
  );
}
