"use client";
import React from "react";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";
import { FormItems } from "../types";

type reviewBillingProps = FormItems & {
  gotoForm: (index: number) => void;
  status: string;
};

const Review = ({
  status,
  gotoForm,
  planSelected,
  yearly,
  addOns,
}: reviewBillingProps) => {
  const { variants } = useVariants({ status });

  console.log(planSelected);

  let plan = 0;
  let totalAddons = 0;

  if (planSelected === "arcade") {
    plan = 9;
  }
  if (planSelected === "advanced") {
    plan = 12;
  }
  if (planSelected === "pro") {
    plan = 15;
  }

  const isAddon = addOns.filter((addon) => addon.checked === true);

  isAddon?.forEach((addon) => {
    return (totalAddons += addon.price);
  });

  const planSelectedPrice = yearly ? plan * 10 : plan;
  const planSelectedPriceWithDuration = yearly
    ? `${plan * 10}/yr`
    : `${plan}/mo`;
  const totalAddonsPrice = yearly ? totalAddons * 10 : totalAddons;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {" "}
      <h1 className="mb-2 text-[26px] font-bold text-marine-blue ">
        Reviewing Up
      </h1>
      <p className="mb-6 text-lg text-cool-gray">
        Double check everything looks OK before confirming
      </p>
      <div className="mb-6 rounded-lg bg-slate-100 p-3">
        <div
          className={`${
            isAddon.length > 0 ? "border-b-1 border-b border-light-gray" : ""
          } mb-3 flex items-center justify-between border-b  pb-3`}
        >
          <div>
            <p className="font-semibold capitalize text-marine-blue">{`${planSelected} (${
              yearly ? "Yearly" : "Monthly"
            })`}</p>
            <button
              type="button"
              className="text-cool-gray underline"
              onClick={() => gotoForm(1)}
            >
              change
            </button>
          </div>
          <span className="font-semibold text-marine-blue">
            ${planSelectedPriceWithDuration}
          </span>
        </div>

        <div className="">
          {isAddon?.map((addon) => {
            return (
              <div
                key={addon.id}
                className="item-center mb-2 flex justify-between"
              >
                <p className="capitalize text-cool-gray">{addon.title}</p>
                <span className="text-marine-blue">
                  {yearly ? `$${addon.price * 10}/yr` : `$${addon.price}/mo`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between px-3">
        <p className="capitalize text-cool-gray">
          Total ({yearly ? "per year" : "per month"}){" "}
        </p>
        <span className="font-medium text-purplish-blue">
          ${totalAddonsPrice + planSelectedPrice}
          {yearly ? "/year" : "/mo"}
        </span>
      </div>
    </motion.div>
  );
};

export default Review;
