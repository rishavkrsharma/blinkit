import { atom } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: {},
});

export const orderSuccessState = atom({
  key: "orderSuccessState",
  default: false,
});
