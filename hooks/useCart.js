import { useState } from "react";
import { useRecoilState } from "recoil";
import { cartState, orderSuccessState } from "../atoms/cartState";
import { products } from "../data/products";

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [orderSuccess, setOrderSuccess] = useRecoilState(orderSuccessState);

  const addToCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [productId, quantity]) => {
      const product = products.find((item) => item.id === parseInt(productId));
      return sum + product?.price * quantity;
    }, 0);
  };

  const placeOrder = () => {
    setOrderSuccess(true);
    setCart({});
  };

  return {
    cart,
    orderSuccess,
    addToCart,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    placeOrder,
  };
};
