import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const itemStore = (set) => ({
  cartItems: [],

  addItemCart: (cartItem) =>
    set((previousState) => {
      return { cartItems: [cartItem, ...previousState.cartItems] };
    }),

  deleteItemCart: (itemId) => {
    set((state) => {
      const updateItems = state.cartItems.filter((item) => item.id !== itemId);
      return { cartItems: updateItems };
    });
  },
});

const useItemStore = create(devtools(persist(itemStore, { name: "Item" })));
export default useItemStore;
