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
        <div className="flex space-x-2">
          <div className="flex space-x-2 sm:hidden ">
            <a
              href="https://www.apple.com/ca/app-store/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="p-[11px] rounded-md border-[0.5px] border-neutral flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="m4.396 21.273 9.337-9.594-9.33-9.577c-.249.15-.403.494-.403.946v17.288c.003.452.152.772.396.938ZM14.068 11.414l2.781-2.858L5.522 2.174A1.228 1.228 0 0 0 4.894 2l9.172 9.413.002.001ZM14.067 11.945l-9.2 9.455c.23.004.458-.058.656-.18l11.35-6.398-2.806-2.877ZM20.952 10.872l-3.769-2.128-2.857 2.936 2.878 2.955 3.747-2.122c.797-.45.797-1.193.001-1.641Z"
                    fill="#000000"
                  ></path>
                </svg>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="p-[11px] rounded-md border-[0.5px] border-neutral flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.449 17.586a10.74 10.74 0 0 1-1.127 1.933c-.592.807-1.077 1.365-1.45 1.674-.58.509-1.201.77-1.866.784-.477 0-1.053-.13-1.723-.392-.672-.262-1.29-.392-1.854-.392-.593 0-1.228.13-1.907.392-.68.263-1.23.4-1.648.413-.638.026-1.273-.242-1.907-.805-.405-.337-.912-.914-1.518-1.733-.65-.874-1.186-1.887-1.605-3.043-.449-1.248-.674-2.457-.674-3.627 0-1.34.303-2.496.911-3.465A5.226 5.226 0 0 1 5.99 7.483a5.318 5.318 0 0 1 2.58-.695c.507 0 1.17.15 1.996.443.822.295 1.35.444 1.583.444.173 0 .76-.175 1.755-.523.94-.323 1.734-.457 2.385-.404 1.763.135 3.087.799 3.968 1.994-1.577.912-2.357 2.189-2.341 3.827.014 1.276.5 2.338 1.452 3.181a4.8 4.8 0 0 0 1.451.909c-.116.322-.239.63-.37.927ZM16.406 2.4c0 1-.383 1.934-1.146 2.799-.921 1.027-2.035 1.621-3.243 1.527a2.972 2.972 0 0 1-.024-.379c0-.96.438-1.987 1.216-2.828.388-.425.882-.779 1.48-1.061.598-.278 1.163-.432 1.695-.458.015.134.022.267.022.4Z"
                    fill="#000000"
                  ></path>
                </svg>
              </div>
            </a>
          </div>

          <div className="flex items-center space-x-2 py-3  ">
            <BsGlobe className="w-5 h-5" />
            <p>CA</p>
            <div className="h-4 w-[1px] border-[0.5px] border-neutral"></div>
            <p>EN</p>
          </div>
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
