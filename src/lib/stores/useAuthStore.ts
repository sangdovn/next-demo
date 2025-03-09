// src/lib/store/useAuthStore.ts
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user: unknown) => set({ user }),
}));
