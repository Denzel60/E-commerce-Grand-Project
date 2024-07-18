import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const itemStore = (set) => ({
  cartItems: [],

  addItemCart: (cartItem) =>
    set((previousState) => {
      return { cartItems: [cartItem, ...previousState.cartItems] };
    }),
});

const useItemStore = create(devtools(persist(itemStore, { name: "Item" })));
export default useItemStore;
