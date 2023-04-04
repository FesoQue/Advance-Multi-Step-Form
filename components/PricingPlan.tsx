import React, { useEffect, useState } from "react";
import Image from "next/image";

const PricingPlan = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <h1 className="mb-2 text-[26px] font-bold text-marine-blue ">
        Select your plan
      </h1>
      <p className="mb-6 text-lg text-cool-gray">
        You have the option of monthly and yearly billing.
      </p>

      <div className="mb-6">
        <div className="relative mb-3 flex items-center rounded-lg border-2 border-light-gray px-4 py-3">
          <Image
            src={"/assets/images/icon-arcade.svg"}
            alt="arcade"
            width={40}
            height={40}
            className="mr-5"
          />
          <div>
            <p className="text-lg font-medium text-marine-blue">Arcade</p>
            <span className="text-cool-gray">$9/mo</span>
          </div>
        </div>
        <div className="relative mb-3 flex items-center rounded-lg border-2 border-light-gray px-4 py-3">
          <Image
            src={"/assets/images/icon-advanced.svg"}
            alt="advanced"
            width={40}
            height={40}
            className="mr-5"
          />
          <div>
            <p className="text-lg font-medium text-marine-blue">Advanced</p>
            <span className="text-cool-gray">$12/mo</span>
          </div>
        </div>

        <div className="mb-3 flex items-center rounded-lg border-2 border-light-gray px-4 py-3">
          <Image
            src={"/assets/images/icon-pro.svg"}
            alt="pro"
            width={40}
            height={40}
            className="mr-5"
          />
          <div>
            <p className="text-lg font-medium text-marine-blue">Pro</p>
            <span className="text-cool-gray">$15/mo</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-3 rounded-lg bg-magnolia py-3">
        <p className="font-medium text-cool-gray">Monthly</p>
        <input type="checkbox" name="" id="" />
        <p className="font-medium text-cool-gray">Yearly</p>
      </div>
    </div>
  );
};

export default PricingPlan;
