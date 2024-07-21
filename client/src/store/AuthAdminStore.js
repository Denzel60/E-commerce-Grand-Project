import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const authAdminStore = (set) => ({
  AuthAdmin: false,

  setAuthAdmin: (newAuthAdmin) =>
    set(() => {
      return { AuthAdmin: newAuthAdmin };
    }),
});

const useAuthAdminStore = create(
  devtools(persist(authAdminStore, { name: "AuthAdmin" }))
);
export default useAuthAdminStore;
