"use client";
import React from "react";
import { GotoProp } from "../types";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";

const Finish = ({ gotoForm }: GotoProp) => {
  const { variants } = useVariants({ status });

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {" "}
      <h1 className="mb-2 text-[26px] font-bold text-marine-blue ">
        Finishing Up
      </h1>
      <p className="mb-6 text-lg text-cool-gray">
        Double check evrything looks OK before confirming
      </p>
      <div className="mb-6 rounded-lg bg-slate-100 p-3">
        <div className="border-b-1 mb-3 flex items-center justify-between border-b border-light-gray pb-3">
          <div>
            <p className="font-semibold text-marine-blue">Arcade (Monthly)</p>
            <button
              className="text-cool-gray underline"
              onClick={() => gotoForm(1)}
            >
              change
            </button>
          </div>
          <span className="font-semibold text-marine-blue">$9/mo</span>
        </div>

        <div className="">
          <div className="item-center mb-2 flex justify-between">
            <p className="capitalize text-cool-gray">online service</p>
            <span className="text-marine-blue">$1/mo</span>
          </div>
          <div className="item-center mb-2 flex justify-between">
            <p className=" capitalize text-cool-gray">Larger storage</p>
            <span className="text-marine-blue">$1/mo</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-3">
        <p className="capitalize text-cool-gray">Total (per month) </p>
        <span className="font-medium text-purplish-blue">$12/mo</span>
      </div>
    </motion.div>
  );
};

export default Finish;
