import Button from "../components/Button";

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

export default function Numpad({
  setCurrentValue,
  changeOperator,
}: {
  setCurrentValue: (value: string) => void;
  changeOperator: () => void;
}) {
  const buttonHandler = (label: string, kind: string): void => {
    if (kind === "numeral") {
      setCurrentValue(label);
    } else if (kind === "operation") {
      changeOperator();
    } else if (kind === "control") {
    }
  };

  return (
    <div className="grid h-[340px] grid-cols-4 gap-4 rounded-md bg-lightKeyPadBG p-5">
      {buttonsProps.map((buttonProps, index) => (
        <Button key={index} handler={buttonHandler} {...buttonProps} />
      ))}
    </div>
  );
}
