import React, { ReactElement } from "react";

type Props = { dropdownContent: ReactElement };

export default function NavbarDropdown({ dropdownContent }: Props) {
  return (
    <div className="absolute top-full left-0 right-0 border-t-[0.5px] bg-base-100 py-[6vh] border-b-[0.5px] overflow-y-scroll max-h-[70vh]">
      <div className="max-w-7xl mx-auto flex justify-center items-center ">
        {dropdownContent}
      </div>
    </div>
  );
}
