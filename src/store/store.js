import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  user: { name: "", email: "" },
  setUser: (updatedUser) =>
    set((state) => ({ user: { ...state.user, ...updatedUser } })),
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

export default useCounterStore;
