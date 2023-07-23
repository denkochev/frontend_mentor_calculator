import { ButtonProps } from "../containers/Numpad";

export default function Button({
  kind,
  label,
  handler,
}: ButtonProps & { handler: (label: string, kind: string) => void }) {
  let buttonClass: string = "";
  let shadowButtonClass: string = "";
  if (kind === "numeral" || kind === "operation") {
    shadowButtonClass =
      "bg-controlOrange dark:bg-graylishOrangeHover purple:bg-darkMagenta";
    buttonClass =
      "text-[32px] bg-controlYellow dark:bg-graylishOrange purple:bg-darkPurpleViolet text-darkYellow dark:text-darkGraylish purple:text-lightYellow hover:bg-prjWhite dark:hover:bg-prjWhite purple:hover:bg-purpleHoverViolet";
  } else if (kind === "control") {
    if (label === "=") {
      shadowButtonClass =
        "col-span-2 bg-lightDarkOrange dark:bg-darkShadowRed purple:bg-pureCyanShadow";
      buttonClass =
        "bg-lightOrange dark:bg-darkRed purple:bg-pureCyan hover:bg-lightOrangeHover dark:hover:bg-darkHoverRed purple:text-purpleDarkBlue purple:hover:bg-pureCyanHover";
    } else if (label === "RESET") {
      shadowButtonClass =
        "col-span-2 bg-lightKeyShadow dark:bg-darkShadowBlue purple:bg-shadowPurple";
      buttonClass =
        "bg-lightKeyBg dark:bg-darkDarkBlue hover:bg-lighKeyHover dark:hover:bg-darkHoverBlue purple:bg-darkVioletPurple purple:hover:bg-purpleHoverControl";
    } else if (label === "DEL") {
      shadowButtonClass =
        "bg-lightKeyShadow dark:bg-darkShadowBlue purple:bg-shadowPurple";
      buttonClass =
        "bg-lightKeyBg dark:bg-darkDarkBlue hover:bg-lighKeyHover dark:hover:bg-darkHoverBlue purple:bg-darkVioletPurple purple:hover:bg-purpleHoverControl";
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
