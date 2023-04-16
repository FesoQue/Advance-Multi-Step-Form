"use client";

import { RefObject, useEffect, SetStateAction, Dispatch } from "react";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";

type formDataProps = {
  status: string;
  name: RefObject<HTMLInputElement>;
  email: RefObject<HTMLInputElement>;
  phone: RefObject<HTMLInputElement>;
  nameErr: RefObject<HTMLSpanElement>;
  emailErr: RefObject<HTMLSpanElement>;
  phoneErr: RefObject<HTMLSpanElement>;
};

const PersonalInfo = ({
  status,
  name,
  email,
  phone,
  nameErr,
  emailErr,
  phoneErr,
}: formDataProps) => {
  const { variants } = useVariants({ status });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <motion.div
      variants={variants}
      custom={status}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="mb-2 text-[26px] font-bold text-marine-blue ">
        Personal Info
      </h1>
      <p className="mb-6 text-lg text-cool-gray">
        Please provide your name, email address, phone number.
      </p>
      <div className="">
        <div className="relative mb-4 md:mb-6">
          <label htmlFor="name" className=" block font-medium text-marine-blue">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g Stephen King"
            ref={name}
            required
            className="h-[45px] w-full rounded border-2 border-light-gray px-3 outline-none placeholder:font-medium"
          />
          <span
            ref={nameErr}
            className=" text-red-600 md:absolute md:-bottom-6 md:left-0"
          ></span>
        </div>
        <div className="relative mb-4 md:mb-6">
          <label
            htmlFor="email"
            className=" block font-medium text-marine-blue"
          >
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="e.g stephenking@lorem.com"
            ref={email}
            required
            className="h-[45px] w-full rounded border-2 border-light-gray px-3 outline-none placeholder:font-medium"
          />
          <span
            ref={emailErr}
            className=" text-red-600 md:absolute md:-bottom-6 md:left-0"
          ></span>
        </div>
        <div className="relative">
          <label
            htmlFor="phone_num"
            className=" block font-medium text-marine-blue"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="tel"
            id="phone"
            ref={phone}
            required
            placeholder="e.g +123-4567-879"
            className="h-[45px] w-full rounded border-2 border-light-gray px-3 outline-none placeholder:font-medium"
          />
          <span
            ref={phoneErr}
            className=" text-red-600 md:absolute md:-bottom-6 md:left-0"
          ></span>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
