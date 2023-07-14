import { create } from "zustand";

type Store = {
  value: string;
};

type Actions = {
  setCurrentValue: (value: string) => void;
  setValue: (value: string) => void;
};

export const useStore = create<Store & Actions>((set) => ({
  value: "0",
  setValue: (value) => set({ value }),
  setCurrentValue: (value) => set((state) => ({ value: state.value + value })),
}));
