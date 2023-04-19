import Link from "next/link";
import React, { SyntheticEvent, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { BsGlobe } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import NavbarDropdown from "./NavbarDropdown";
import LearnDropdown from "./LearnDropdown";
import DevelopersDropdown from "./DevelopersDropdown";
type Props = {};

export default function Navbar({}: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState<string | undefined>();
  function handleMouseEnter(event: SyntheticEvent<HTMLElement>) {
    setCurrentDropdown(event.currentTarget.dataset.dropdown);
  }
  function handleMouseExit() {
    setCurrentDropdown(undefined);
  }
  function handleMouseClick(event: SyntheticEvent<HTMLElement>) {
    if (currentDropdown === event.currentTarget.dataset.dropdown) {
      setCurrentDropdown(undefined);
    } else {
      setCurrentDropdown(event.currentTarget.dataset.dropdown);
    }
  }
  return (
    <div className="sticky top-0 bg-base-100 z-[999999]">
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      <div className="relative py-4 xl:py-0 px-8 sm:px-16 border-b-[0.5px] ">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href={"/"} className="flex items-center space-x-1">
            <img
              src="/crypto-icon.png"
              alt="CryptoBase Icon"
              className="w-10 h-10"
            />
            <h1 className="text-xl font-medium">CryptoBase.com</h1>
          </Link>
          <div className="flex gap-10 items-center">
            <nav className="hidden xl:flex items-center">
              <ul className="flex items-center ">
                <li>
                  <Link
                    href={"/nft"}
                    className="nav-item-container border-b-4 border-b-transparent hover:border-b-primary"
                  >
                    <h5>NFT</h5>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/price"}
                    className="nav-item-container border-b-4 border-b-transparent hover:border-b-primary"
                  >
                    <h5>Prices</h5>
                  </Link>
                </li>
                <li onMouseLeave={() => handleMouseExit()}>
                  <button
                    onMouseEnter={(e) => handleMouseEnter(e)}
                    onClick={(e) => handleMouseClick(e)}
                    data-dropdown="learn"
                  >
                    <div
                      className={`nav-item-container border-b-4  ${
                        currentDropdown === "learn"
                          ? "border-b-primary"
                          : "border-b-transparent"
                      }`}
                    >
                      <h5 className="text-xl ">Learn</h5>
                    </div>
                  </button>
                  {currentDropdown === "learn" && (
                    <NavbarDropdown dropdownContent={<LearnDropdown />} />
                  )}
                </li>
                <li onMouseLeave={() => handleMouseExit()}>
                  <button
                    onMouseEnter={(e) => handleMouseEnter(e)}
                    onClick={(e) => handleMouseClick(e)}
                    data-dropdown="developers"
                  >
                    <div
                      className={`nav-item-container border-b-4  ${
                        currentDropdown === "developers"
                          ? "border-b-primary"
                          : "border-b-transparent"
                      }`}
                    >
                      <h5 className="text-xl ">Developers</h5>
                    </div>
                  </button>
                  {currentDropdown === "developers" && (
                    <NavbarDropdown dropdownContent={<DevelopersDropdown />} />
                  )}
                </li>
                <li data-dropdown="company">
                  <button>
                    <div className="nav-item-container border-b-4 border-b-transparent hover:border-b-primary">
                      <a href="https://ahmadarif.com">
                        <h5 className="text-xl ">About</h5>
                      </a>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
            <div className="hidden sm:flex space-x-2">
              <a
                href="https://www.apple.com/ca/app-store/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="p-[11px] rounded-md border-[0.5px] border-primary flex justify-center items-center btn btn-ghost">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path
                      d="m4.396 21.273 9.337-9.594-9.33-9.577c-.249.15-.403.494-.403.946v17.288c.003.452.152.772.396.938ZM14.068 11.414l2.781-2.858L5.522 2.174A1.228 1.228 0 0 0 4.894 2l9.172 9.413.002.001ZM14.067 11.945l-9.2 9.455c.23.004.458-.058.656-.18l11.35-6.398-2.806-2.877ZM20.952 10.872l-3.769-2.128-2.857 2.936 2.878 2.955 3.747-2.122c.797-.45.797-1.193.001-1.641Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="p-[11px] rounded-md border-[0.5px] border-primary flex justify-center items-center btn btn-ghost">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.449 17.586a10.74 10.74 0 0 1-1.127 1.933c-.592.807-1.077 1.365-1.45 1.674-.58.509-1.201.77-1.866.784-.477 0-1.053-.13-1.723-.392-.672-.262-1.29-.392-1.854-.392-.593 0-1.228.13-1.907.392-.68.263-1.23.4-1.648.413-.638.026-1.273-.242-1.907-.805-.405-.337-.912-.914-1.518-1.733-.65-.874-1.186-1.887-1.605-3.043-.449-1.248-.674-2.457-.674-3.627 0-1.34.303-2.496.911-3.465A5.226 5.226 0 0 1 5.99 7.483a5.318 5.318 0 0 1 2.58-.695c.507 0 1.17.15 1.996.443.822.295 1.35.444 1.583.444.173 0 .76-.175 1.755-.523.94-.323 1.734-.457 2.385-.404 1.763.135 3.087.799 3.968 1.994-1.577.912-2.357 2.189-2.341 3.827.014 1.276.5 2.338 1.452 3.181a4.8 4.8 0 0 0 1.451.909c-.116.322-.239.63-.37.927ZM16.406 2.4c0 1-.383 1.934-1.146 2.799-.921 1.027-2.035 1.621-3.243 1.527a2.972 2.972 0 0 1-.024-.379c0-.96.438-1.987 1.216-2.828.388-.425.882-.779 1.48-1.061.598-.278 1.163-.432 1.695-.458.015.134.022.267.022.4Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="flex items-center">
              <button className="xl:hidden">
                <HiBars3
                  className="w-8 h-8"
                  onClick={() => {
                    setMobileMenuOpen((prevState) => !prevState);
                  }}
                />
              </button>
              <button className="hidden xl:flex gap-1 items-center">
                <BsGlobe className=" w-5 h-5 " />
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
