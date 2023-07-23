"use client";

export default function Display({ value }: { value: string }) {
  return (
    <div className="my-4 flex h-24 flex-col items-end justify-center rounded-md bg-lightGrayDspl purple:bg-purpleDarkViolet dark:bg-desaturedBlue">
      <div className="float-right pr-4">
        <p className="text-[34px] text-darkYellow purple:text-lightYellow dark:text-prjWhite">
          {value}
        </p>
      </div>
    </div>
  );
}
