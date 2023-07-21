import { create } from "zustand";

export type Store = {
  value: string;
  isOperator: boolean;
  numberBuffer: number[];
  operatorsBuffer: string[];
};

export type Actions = {
  setCurrentValue: (value: string) => void;
  setValue: (numbers: string) => void;
  changeOperator: () => void;
  addNumberToBuffer: (number: number) => void;
  addOperatorToBuffer: (operator: string) => void;
  getResult: () => void;
  reset: () => void;
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

const calculate = (numerals: number[], operations: string[]): string => {
  const values = [...numerals];
  const operators = [...operations];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "x") {
      values[i] = values[i] * values[i + 1];
      values.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    } else if (operators[i] === "/") {
      values[i] = values[i] / values[i + 1];
      values.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    }
  }

  let result: number = values[0];
  for (let i = 0; i < values.length; i++) {
    if (operators[i] === "+") {
      result += values[i + 1];
    } else if (operators[i] === "-") {
      result -= values[i + 1];
    }
  }

  return result.toString();
};

export const useStore = create<Store & Actions>((set) => ({
  // STATES
  value: "0",
  isOperator: false,
  numberBuffer: [],
  operatorsBuffer: [],
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
  getResult: () =>
    set((state) => ({
      value: calculate(state.numberBuffer, state.operatorsBuffer),
    })),
  reset: () =>
    set({
      value: "0",
      isOperator: false,
      numberBuffer: [],
      operatorsBuffer: [],
    }),
}));
