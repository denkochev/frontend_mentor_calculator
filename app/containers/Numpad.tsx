import Button from "../components/Button";
import { useStore } from "../../store/store";

export interface ButtonProps {
  kind: "numeral" | "operation" | "control";
  label: string;
}

const buttonsProps: ButtonProps[] = [
  { kind: "numeral", label: "7" },
  { kind: "numeral", label: "8" },
  { kind: "numeral", label: "9" },
  { kind: "control", label: "DEL" },
  { kind: "numeral", label: "4" },
  { kind: "numeral", label: "5" },
  { kind: "numeral", label: "6" },
  { kind: "operation", label: "+" },
  { kind: "numeral", label: "1" },
  { kind: "numeral", label: "2" },
  { kind: "numeral", label: "3" },
  { kind: "operation", label: "-" },
  { kind: "numeral", label: "." },
  { kind: "numeral", label: "0" },
  { kind: "operation", label: "/" },
  { kind: "operation", label: "x" },
  { kind: "control", label: "RESET" },
  { kind: "control", label: "=" },
];

export default function Numpad() {
  const [
    value,
    setCurrentValue,
    changeOperator,
    addNumberToBuffer,
    addOperatorToBuffer,
    getResult,
    reset,
  ] = useStore((state) => [
    state.value,
    state.setCurrentValue,
    state.changeOperator,
    state.addNumberToBuffer,
    state.addOperatorToBuffer,
    state.getResult,
    state.reset,
  ]);

  const buttonHandler = (label: string, kind: string): void => {
    if (kind === "numeral") {
      setCurrentValue(label);
    } else if (kind === "operation") {
      changeOperator();
      addNumberToBuffer(Number(value));
      getResult();
      addOperatorToBuffer(label);
    } else if (kind === "control") {
      switch (label) {
        case "=":
          addNumberToBuffer(Number(value));
          getResult();
          break;
        case "RESET":
          reset();
          break;
        case "DEL":
          setCurrentValue("0");
          break;
      }
    }
  };

  return (
    <div className="grid h-[340px] grid-cols-4 gap-4 rounded-md bg-lightKeyPadBG p-5 purple:bg-purpleDarkViolet dark:bg-desterBlue">
      {buttonsProps.map((buttonProps, index) => (
        <Button key={index} handler={buttonHandler} {...buttonProps} />
      ))}
    </div>
  );
}
