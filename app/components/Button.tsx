import { ButtonProps } from "../containers/Numpad";
import classNames from "classnames";

export default function Button({
  kind,
  label,
  handler,
}: ButtonProps & { handler: (label: string, kind: string) => void }) {
  const buttonClass = classNames(
    "h-11",
    "rounded-md",
    {
      "text-[32px] bg-controlYellow dark:bg-graylishOrange purple:bg-darkPurpleViolet text-darkYellow dark:text-darkGraylish purple:text-lightYellow hover:bg-prjWhite dark:hover:bg-prjWhite purple:hover:bg-purpleHoverViolet":
        kind === "numeral" || kind === "operation",
    },
    {
      "text-prjWhite text-[20px] items-center justify-center flex":
        kind === "control",
    },
    {
      "bg-lightOrange dark:bg-darkRed purple:bg-pureCyan hover:bg-lightOrangeHover dark:hover:bg-darkHoverRed purple:text-purpleDarkBlue purple:hover:bg-pureCyanHover":
        label === "=",
    },
    {
      "bg-lightKeyBg dark:bg-darkDarkBlue hover:bg-lighKeyHover dark:hover:bg-darkHoverBlue purple:bg-darkVioletPurple purple:hover:bg-purpleHoverControl":
        label === "RESET",
    },
    {
      "bg-lightKeyBg dark:bg-darkDarkBlue hover:bg-lighKeyHover dark:hover:bg-darkHoverBlue purple:bg-darkVioletPurple purple:hover:bg-purpleHoverControl":
        label === "DEL",
    },
  );

  const shadowButtonClass = classNames(
    "h-12",
    "cursor-pointer",
    "rounded-md",
    {
      "bg-controlOrange dark:bg-graylishOrangeHover purple:bg-darkMagenta":
        kind === "numeral" || kind === "operation",
    },
    {
      "col-span-2 bg-lightDarkOrange dark:bg-darkShadowRed purple:bg-pureCyanShadow":
        label === "=",
    },
    {
      "col-span-2 bg-lightKeyShadow dark:bg-darkShadowBlue purple:bg-shadowPurple":
        label === "RESET",
    },
    {
      "bg-lightKeyShadow dark:bg-darkShadowBlue purple:bg-shadowPurple":
        label === "DEL",
    },
  );

  return (
    <div className={shadowButtonClass} onClick={() => handler(label, kind)}>
      <div className={buttonClass}>
        <p className="select-none text-center">{label}</p>
      </div>
    </div>
  );
}
