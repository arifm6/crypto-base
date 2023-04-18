import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<any>>;
};

export default function MobileMenu({ isOpen, setIsOpen }: Props) {
  const position = isOpen ? "translate-x-0" : "translate-x-full";
  return (
    <div
      className={`lg:hidden fixed top-0 left-0 w-full h-full  z-[9999] bg-neutral-content text-neutral ${position} transition-transform duration-200`}
    >
      <div className="flex justify-between items-center px-8 sm:px-16 py-4 border-b-[0.5px] border-b-neutral">
        <div className="flex items-center space-x-2 py-3  ">
          <BsGlobe className="w-5 h-5" />
          <p>CA</p>
          <div className="h-4 w-[1px] border-[0.5px] border-neutral"></div>
          <p>EN</p>
        </div>

        <button
          onClick={() => {
            setIsOpen((prevState: boolean) => {
              !prevState;
            });
          }}
        >
          <AiOutlineClose className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
