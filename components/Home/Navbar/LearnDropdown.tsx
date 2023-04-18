import React from "react";
import { RxCaretRight } from "react-icons/rx";

type Props = {};

export default function LearnDropdown({}: Props) {
  return (
    <div className="learn-dropdown-grid gap-6 ">
      <div className="font-medium flex gap-2 transition-all duration-200 hover:text-primary-focus">
        <RxCaretRight className="text-2xl" />
        <a href="">
          <h2>Tips & Tutorials</h2>
        </a>
      </div>
      <div className="font-medium flex gap-2 transition-all duration-200 hover:text-primary-focus">
        <RxCaretRight className="text-2xl" />
        <a href="">
          <h2>Crypto basics</h2>
        </a>
      </div>
      <div className="row-span-3 ml-12 flex flex-col justify-between max-w-[300px]   ">
        <div className="space-y-2 ">
          <h2 className="font-bold">Crypto questions, answered</h2>
          <p className="opacity-80">
            Guides and explainers for your crypto questions
          </p>
        </div>
        <a href="" className="link link-primary link-hover">
          See all articles
        </a>
      </div>
      <div className="font-medium flex gap-2 transition-all duration-200 hover:text-primary-focus">
        <RxCaretRight className="text-2xl" />
        <a href="">
          <h2>Update the system</h2>
        </a>
      </div>
      <div className="font-medium flex gap-2 transition-all duration-200 hover:text-primary-focus">
        <RxCaretRight className="text-2xl" />
        <a href="">
          <h2>Web3</h2>
        </a>
      </div>
      <div className="font-medium flex gap-2 transition-all duration-200 hover:text-primary-focus">
        <RxCaretRight className="text-2xl" />
        <a href="">
          <h2>Market updates</h2>
        </a>
      </div>
      <div className="font-medium flex gap-2 transition-all duration-200 hover:text-primary-focus">
        <RxCaretRight className="text-2xl" />
        <a href="">
          <h2>Crypto policy</h2>
        </a>
      </div>
    </div>
  );
}
