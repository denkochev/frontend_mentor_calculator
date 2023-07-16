import { ButtonProps } from "../containers/Numpad";

export default function Button({
  kind,
  label,
  handler,
}: ButtonProps & { handler: (label: string, kind: string) => void }) {
  let buttonClass: string = "";
  let shadowButtonClass: string = "";
  if (kind === "numeral" || kind === "operation") {
    shadowButtonClass = "bg-controlOrange dark:bg-graylishOrangeHover";
    buttonClass =
      "text-[32px] bg-controlYellow dark:bg-graylishOrange text-darkYellow dark:text-darkGraylish hover:bg-prjWhite dark:hover:bg-prjWhite";
  } else if (kind === "control") {
    if (label === "=") {
      shadowButtonClass = "col-span-2 bg-lightDarkOrange dark:bg-darkShadowRed";
      buttonClass =
        "bg-lightOrange dark:bg-darkRed hover:bg-lightOrangeHover dark:hover:bg-darkHoverRed";
    } else if (label === "RESET") {
      shadowButtonClass = "col-span-2 bg-lightKeyShadow dark:bg-darkShadowBlue";
      buttonClass =
        "bg-lightKeyBg dark:bg-darkDarkBlue hover:bg-lighKeyHover dark:hover:bg-darkHoverBlue";
    } else if (label === "DEL") {
      shadowButtonClass = "bg-lightKeyShadow dark:bg-darkShadowBlue";
      buttonClass =
        "bg-lightKeyBg dark:bg-darkDarkBlue hover:bg-lighKeyHover dark:hover:bg-darkHoverBlue";
    }
    buttonClass +=
      " text-prjWhite text-[20px] items-center justify-center flex";
  }

  return (
    <div
      className={`${shadowButtonClass} h-12 cursor-pointer rounded-md`}
      onClick={() => handler(label, kind)}
    >
      <div className={`${buttonClass} h-11 rounded-md`}>
        <p className="select-none text-center">{label}</p>
      </div>
    </div>
  );
}
