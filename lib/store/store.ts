import { create } from "zustand";

export const useStore = create<{
  user: User | undefined;
  posts: Post[];
}>((set, get) => ({
  user: undefined,
  posts: [],
}));
