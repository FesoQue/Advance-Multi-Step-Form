import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const toggleGroupItemClasses =
  "hover:bg-alabaster data-[state=on]:bg-magnolia data-[state=on]:shadow-[0_0_0_1px] shadow-[0_0_0_1px] shadow-light-gray rounded data-[state=on]:shadow-marine-blue flex p-4 w-full  items-center bg-white leading-4 mb-3 focus:z-10 focus:shadow-[0_0_0_1px] focus:shadow-marine-blue focus:outline-none";

const BillingPlan = () => {
  return (
    <div>
      <h1 className="mb-2 text-[26px] font-bold text-marine-blue ">
        Select your plan
      </h1>
      <p className="mb-6 text-lg text-cool-gray">
        You have the option of monthly and yearly billing.
      </p>

      <ToggleGroup.Root
        className="w-full"
        type="single"
        aria-label="Billing Plan"
        orientation="horizontal"
        value="pro"
      >
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value="arcade"
          aria-label="arcade plan"
        >
          <Image
            src={"/assets/images/icon-arcade.svg"}
            alt="arcade"
            width={40}
            height={40}
            className="mr-5"
          />
          <div className="text-left">
            <p className="mb-1 text-lg font-medium text-marine-blue">Arcade</p>
            <span className="text-cool-gray">$9/mo</span>
          </div>
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value="advanced"
          aria-label="Advanced Plan"
        >
          <Image
            src={"/assets/images/icon-advanced.svg"}
            alt="arcade"
            width={40}
            height={40}
            className="mr-5"
          />
          <div className="text-left">
            <p className="mb-1 text-lg font-medium text-marine-blue">
              Advanced
            </p>
            <span className="text-cool-gray">$12/mo</span>
          </div>
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value="pro"
          aria-label="Pro Plan"
        >
          <Image
            src={"/assets/images/icon-pro.svg"}
            alt="arcade"
            width={40}
            height={40}
            className="mr-5"
          />
          <div className="text-left">
            <p className="mb-1 text-lg font-medium text-marine-blue">Pro</p>
            <span className="text-cool-gray">$12/mo</span>
          </div>
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
};

export default BillingPlan;
