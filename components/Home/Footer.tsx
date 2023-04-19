import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
type Props = {};

export default function Footer({}: Props) {
  return (
    <>
      <div className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img
            src="/crypto-icon.png"
            alt="CryptoBase Icon"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-medium">CryptoBase.com</h1>
          <p>Providing a reliable platform since 2016</p>
        </div>

        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer items-center p-4  bg-base-200 text-base-content">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://ahmadarif.com">
            <FaGlobe className="w-10 h-10" />
          </a>
          <a href="https://www.linkedin.com/in/ahmadmarif/">
            <BsLinkedin className="w-10 h-10 text-[#0072b1] bg-white rounded-md " />
          </a>
          <a href="https://github.com/arifm6">
            <FaGithub className="w-10 h-10 text-white" />{" "}
          </a>
        </div>
      </div>
    </>
  );
}
