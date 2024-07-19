import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const CredentialsStore = (set) => ({
  Credentials: {},

  setCredentials: (newCredentials) =>
    set(() => {
      return { Credentials: newCredentials };
    }),
});

const useCredentialsStore = create(
  devtools(persist(CredentialsStore, { name: "Credentials" }))
);
export default useCredentialsStore;
