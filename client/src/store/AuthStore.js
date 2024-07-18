import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const authStore = (set) => ({
  Auth: false,

  setAuth: (newAuth) =>
    set(() => {
      return { Auth: newAuth };
    }),
});

const useAuthStore = create(devtools(persist(authStore, { name: "Auth" })));
export default useAuthStore;
