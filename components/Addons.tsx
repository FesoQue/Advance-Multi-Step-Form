"use client";
import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";
import { FormItems } from "@/app/page";

type updateWithAddons = FormItems & {
  updateForm: (updateField: Partial<FormItems>) => void;
  status: string;
};

const Addons = ({ status, addOns, yearly, updateForm }: updateWithAddons) => {
  const { variants } = useVariants({ status });

  const handleCheckChange = (id: number, checked: boolean) => {
    const updateAddons = addOns.map((addon) => {
      if (addon.id === id) {
        return { ...addon, checked };
      } else {
        return addon;
      }
    });

    updateForm({ addOns: updateAddons });
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="mb-2 text-[26px] font-bold text-marine-blue ">
        Pick add-ons
      </h1>
      <p className="mb-6 text-lg text-cool-gray">
        Add-ons help enhance your gaming experience.
      </p>

      {addOns.map((addon) => {
        return (
          <div
            key={addon.id}
            className={`${
              addon.checked
                ? "border-marine-blue bg-magnolia"
                : "border-light-gray"
            } mb-3 flex items-center justify-between rounded-lg border-2  px-3 py-4`}
          >
            <div className="flex items-center">
              <Checkbox
                className="mr-3"
                id={addon.title}
                checked={addon.checked}
                onCheckedChange={(checked) =>
                  handleCheckChange(addon.id, checked as boolean)
                }
              />
              <div className="">
                <Label
                  htmlFor={addon.title}
                  className="block text-base font-medium leading-[.8] text-marine-blue"
                >
                  {addon.title}
                  <span className="mt-2 block text-[12px] text-cool-gray">
                    {addon.subtitle}
                  </span>
                </Label>
              </div>
            </div>
            <span className="text-sm font-medium text-purplish-blue">
              {yearly ? `$${addon.price * 10}/yr` : `$${addon.price}/mo`}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Addons;
