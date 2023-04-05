import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto   ">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/nft">NFT</Link>
          </li>
          <li>
            <Link href="/price">Prices</Link>
          </li>

          <li tabIndex={0}>
            <a className="justify-between">
              Company
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      <div className="flex-1 ">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image
            src="/crypto-icon.png"
            width={32}
            height={32}
            alt="CryptoBase Logo"
            className="mr-1"
          />
          CryptoBase.com
        </Link>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <Link href="/nft">NFT</Link>
          </li>
          <li>
            <Link href="/price">Prices</Link>
          </li>

          <li tabIndex={0}>
            <a>
              Company
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
          <li>
            <button>English</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
