"use client";

import Display from "../components/Display";
import Numpad from "./Numpad";
import ToggleTheme from "../components/ToggleTheme";
import { useStore } from "../../store/store";

export default function Main() {
  const value = useStore((state) => state.value);
  const [numberBuffer, operatorBuffer, isOperator] = useStore((state) => [
    state.numberBuffer,
    state.operatorsBuffer,
    state.isOperator,
  ]);

  return (
    <div>
      <div className="flex w-96 justify-between">
        <div>
          <h1 className="mx-1 text-2xl text-darkYellow dark:text-prjWhite">
            calc
          </h1>
        </div>
        <div className="flex items-center">
          <h3 className="mx-4 text-[10px] text-darkYellow dark:text-prjWhite">
            THEME
          </h3>
          <ToggleTheme />
        </div>
      </div>
      <Display value={value} />
      <Numpad />
      <div>{numberBuffer.toString()}</div>
      <div>{operatorBuffer.toString()}</div>
      <div>{String(isOperator)}</div>
    </div>
  );
}
