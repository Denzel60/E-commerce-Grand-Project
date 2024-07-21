import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const authBuyerStore = (set) => ({
  AuthBuyer: false,

  setAuthBuyer: (newAuthBuyer) =>
    set(() => {
      return { AuthBuyer: newAuthBuyer };
    }),
});

const useAuthBuyerStore = create(
  devtools(persist(authBuyerStore, { name: "AuthBuyer" }))
);
export default useAuthBuyerStore;
