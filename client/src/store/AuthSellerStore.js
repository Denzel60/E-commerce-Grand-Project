import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const authSellerStore = (set) => ({
  AuthSeller: false,

  setAuthSeller: (newAuthSeller) =>
    set(() => {
      return { AuthSeller: newAuthSeller };
    }),
});

const useAuthSellerStore = create(
  devtools(persist(authSellerStore, { name: "AuthSeller" }))
);
export default useAuthSellerStore;
