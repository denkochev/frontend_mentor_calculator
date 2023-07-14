import { ButtonProps } from "../containers/Numpad";

export default function Button({
  kind,
  label,
  handler,
}: ButtonProps & { handler: (label: string) => void }) {
  let buttonClass: string = "";
  let shadowButtonClass: string = "";
  if (kind === "numeral" || kind === "operation") {
    shadowButtonClass = "bg-controlOrange";
    buttonClass =
      "text-[32px] bg-controlYellow text-darkYellow hover:bg-prjWhite";
  } else if (kind === "control") {
    if (label === "=") {
      shadowButtonClass = "col-span-2 bg-lightDarkOrange";
      buttonClass = "bg-lightOrange hover:bg-lightOrangeHover";
    } else if (label === "RESET") {
      shadowButtonClass = "col-span-2 bg-lightKeyShadow";
      buttonClass = "bg-lightKeyBg hover:bg-lighKeyHover";
    } else if (label === "DEL") {
      shadowButtonClass = "bg-lightKeyShadow";
      buttonClass = "bg-lightKeyBg hover:bg-lighKeyHover";
    }
    buttonClass +=
      " text-prjWhite text-[20px] items-center justify-center flex";
  }

  return (
    <div
      className={`${shadowButtonClass} h-11 cursor-pointer rounded-md`}
      onClick={() => handler(label)}
    >
      <div className={`${buttonClass} h-10 rounded-md`}>
        <p className="select-none text-center">{label}</p>
      </div>
    </div>
  );
}
