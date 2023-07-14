"use client";

export default function Display({ value }: { value: string }) {
  return (
    <div className="my-3 flex h-24 flex-col items-end justify-center rounded-md bg-lightGrayDspl">
      <div className="float-right pr-4">
        <p className="text-[34px] text-darkYellow">{value}</p>
      </div>
    </div>
  );
}
