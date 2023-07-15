import { create } from "zustand";

export type Store = {
  value: string;
  isOperator: boolean;
  numberBuffer: number[];
  operatorsBuffer: string[];
  lastNumber: number;
};

export type Actions = {
  setCurrentValue: (value: string) => void;
  setValue: (numbers: string) => void;
  changeOperator: () => void;
  addNumberToBuffer: (number: number) => void;
  addOperatorToBuffer: (operator: string) => void;
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
  // STATES
  value: "0",
  isOperator: false,
  numberBuffer: [],
  operatorsBuffer: [],
  lastNumber: 0,
  // ACTIONS
  setValue: (value) => set({ value }),
  changeOperator: () =>
    set((state) => ({
      isOperator: !state.isOperator,
    })),
  setCurrentValue: (numbers) =>
    set((state) => ({
      value: addNumbersToDisplay(state, numbers),
    })),
  addNumberToBuffer: (number: number) =>
    set((state) => ({ numberBuffer: [...state.numberBuffer, number] })),
  addOperatorToBuffer: (operator: string) =>
    set((state) => ({ operatorsBuffer: [...state.operatorsBuffer, operator] })),
}));
