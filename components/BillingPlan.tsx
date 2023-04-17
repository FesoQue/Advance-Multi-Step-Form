import React, { useState, useEffect } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import Image from "next/image";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";
import { FormItems } from "../types";

const toggleGroupItemClasses =
  "hover:bg-alabaster data-[state=on]:bg-magnolia data-[state=on]:shadow-[0_0_0_1px]  shadow-[0_0_0_1px] shadow-light-gray rounded-lg data-[state=on]:shadow-marine-blue flex p-4 w-full  items-center bg-white leading-4 mb-3 focus:z-10 focus:outline-none md:flex-col md:items-start md:gap-[20px]";

type updateWithBilling = FormItems & {
  updateForm: (updateField: Partial<FormItems>) => void;
  status: string;
};

type Plan = "arcade" | "advanced" | "pro";

const BillingPlan = ({
  status,
  updateForm,
  planSelected,
  yearly,
}: updateWithBilling) => {
  const { variants } = useVariants({ status });

  const [isYearlyPlan, setIsYearlyPlan] = useState(yearly);
  const [plan, setPlan] = useState(planSelected);

  const handleCheckedChange = () => {
    setIsYearlyPlan(!isYearlyPlan);
    updateForm({ yearly: !isYearlyPlan });
  };

  const handleValueChange = (plan: Plan) => {
    if (plan) {
      setPlan(plan);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    updateForm({ planSelected: plan });
  }, [plan]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="mb-2 text-[26px] font-bold text-marine-blue ">
        Select your plan
      </h1>
      <p className="mb-6 text-lg text-cool-gray">
        You have the option of monthly and yearly billing.
      </p>

      <ToggleGroup.Root
        className="w-full md:grid md:grid-cols-3 md:gap-4"
        type="single"
        aria-label="Billing Plan"
        orientation="horizontal"
        value={plan}
        // onValueChange={(value: Plan) => {
        //   if (value) setPlan(value);
        //   updateForm({ planSelected: plan });
        // }}
        onValueChange={handleValueChange}
      >
        <ToggleGroup.Item className={toggleGroupItemClasses} value="arcade">
          <Image
            src={"/assets/images/icon-arcade.svg"}
            alt="arcade"
            width={40}
            height={40}
            className="mr-5 md:mr-0"
          />
          <div className="text-left">
            <p className="mb-1 text-lg font-medium text-marine-blue">Arcade</p>
            <span className="mb-1 block text-cool-gray">
              {yearly ? "$90/yr" : "$9/mo"}{" "}
            </span>
            <span className="block text-marine-blue">
              {yearly && "2 months free"}
            </span>
          </div>
        </ToggleGroup.Item>

        <ToggleGroup.Item className={toggleGroupItemClasses} value="advanced">
          <Image
            src={"/assets/images/icon-advanced.svg"}
            alt="advanced"
            width={40}
            height={40}
            className="md:mr=0 mr-5"
          />
          <div className="text-left">
            <p className="mb-1 text-lg font-medium text-marine-blue">
              Advanced
            </p>
            <span className="mb-1 block text-cool-gray">
              {yearly ? "$120/yr" : "$12/mo"}
            </span>
            <span className="block text-marine-blue">
              {yearly && "2 months free"}
            </span>
          </div>
        </ToggleGroup.Item>
        <ToggleGroup.Item className={toggleGroupItemClasses} value="pro">
          <Image
            src={"/assets/images/icon-pro.svg"}
            alt="pro"
            width={40}
            height={40}
            className="mr-5 md:mr-0"
          />
          <div className="text-left">
            <p className="mb-1 text-lg font-medium text-marine-blue">Pro</p>
            <span className="mb-1 block text-cool-gray">
              {yearly ? "$150/yr" : "$12/mo"}
            </span>
            <span className="block text-marine-blue">
              {yearly && "2 months free"}
            </span>
          </div>
        </ToggleGroup.Item>
      </ToggleGroup.Root>

      <div className="mt-8 flex items-center justify-center gap-5 rounded-lg bg-magnolia py-4 text-marine-blue">
        <Label htmlFor="subscription" className="font-medium">
          Monthly
        </Label>
        <Switch
          id="subscription"
          checked={isYearlyPlan}
          onCheckedChange={handleCheckedChange}
        />
        <Label htmlFor="subscription" className="font-medium">
          Yearly
        </Label>
      </div>
    </motion.div>
  );
};

export default BillingPlan;
