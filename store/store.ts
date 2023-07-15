import { create } from "zustand";

type Store = {
  value: string;
  buffer: number[];
  isOperator: boolean;
};

type Actions = {
  setCurrentValue: (value: string) => void;
  setValue: (numbers: string) => void;
  changeOperator: () => void;
};

const addNumbersToDisplay = (
  { value, isOperator, changeOperator }: Store & Actions,
  numbers: string,
): string => {
  if (isOperator) {
    changeOperator();
    return numbers;
  }
  if (numbers === "." && value.includes(".")) {
    return value;
  }
  if (value[0] === "0" && value[1] !== "." && numbers !== ".") {
    return numbers;
  }
  return value + numbers;
};

export const useStore = create<Store & Actions>((set) => ({
  value: "0",
  buffer: [],
  isOperator: false,
  setValue: (value) => set({ value }),
  changeOperator: () =>
    set((state) => ({
      isOperator: !state.isOperator,
    })),
  setCurrentValue: (numbers) =>
    set((state) => ({
      value: addNumbersToDisplay(state, numbers),
    })),
}));
