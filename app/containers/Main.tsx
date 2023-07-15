"use client";

import Display from "../components/Display";
import ThemeButton from "../components/ThemeButton";
import Numpad from "./Numpad";
import { useStore } from "../../store/store";

export default function Main() {
  const [value, setCurrentValue, changeOperator] = useStore((state) => [
    state.value,
    state.setCurrentValue,
    state.changeOperator,
  ]);

  return (
    <div>
      <div className="flex w-96 justify-between">
        <div>
          <h1 className="text-2xl text-darkYellow">calc</h1>
        </div>
        <div className="flex items-center">
          <h3 className="text-[12px] text-darkYellow">THEME</h3>
          <ThemeButton />
        </div>
      </div>
      <Display value={value} />
      <Numpad
        setCurrentValue={setCurrentValue}
        changeOperator={changeOperator}
      />
    </div>
  );
}
