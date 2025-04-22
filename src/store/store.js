import { create } from "zustand";

const useAppStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  user: { name: "", email: "" },
  setUser: (updatedUser) =>
    set((state) => ({ user: { ...state.user, ...updatedUser } })),
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  posts: { data: [], loading: false },
  fetchPosts: async () => {
    set((state) => ({ posts: { ...state.posts, loading: true } }));
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      set((state) => ({ posts: { ...state.posts, data: data.slice(0, 5) } }));
    } catch (err) {
      console.error("error in fetching data: ", err);
    } finally {
      set((state) => ({ posts: { ...state.posts, loading: false } }));
    }
  },
}));

export default useAppStore;
