"use client";
import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

const Addons = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <h1 className="mb-2 text-[26px] font-bold text-marine-blue ">
        Pick add-ons
      </h1>
      <p className="mb-6 text-lg text-cool-gray">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mb-3 flex items-center justify-between rounded-lg border-2 border-light-gray px-3 py-4">
        <div className="flex items-center">
          <Checkbox
            className="mr-3"
            checked={checked}
            id="online-service"
            onCheckedChange={handleCheckChange}
          />
          <div className="">
            <Label
              htmlFor="online-service"
              className="block text-base font-medium leading-[.8] text-marine-blue"
            >
              Online service
              <span className="mt-2 block text-[12px] text-cool-gray">
                Access to multiplayer games
              </span>
            </Label>
          </div>
        </div>
        <span className="text-sm font-medium text-purplish-blue">+$10/mo</span>
      </div>
      <div className="mb-3 flex items-center justify-between rounded-lg border-2 border-light-gray px-3 py-4">
        <div className="flex items-center">
          <Checkbox className="mr-3" id="storage" />
          <div className="">
            <Label
              htmlFor="storage"
              className="block text-base font-medium leading-[.8] text-marine-blue"
            >
              Larger Storage
              <span className="mt-2 block text-[12px] text-cool-gray">
                Extra 1TB of cloud save
              </span>
            </Label>
          </div>
        </div>
        <span className="text-sm font-medium text-purplish-blue">+$20/mo</span>
      </div>
      <div className="mb-3 flex items-center justify-between rounded-lg border-2 border-light-gray px-3 py-4">
        <div className="flex items-center">
          <Checkbox className="mr-3" id="custom-profile" />
          <div className="">
            <Label
              htmlFor="custom-profile"
              className="block text-base font-medium leading-[.8] text-marine-blue"
            >
              Customizable profile
              <span className="mt-2 block text-[12px] leading-3 text-cool-gray">
                Custom theme on your profile
              </span>
            </Label>
          </div>
        </div>
        <span className="text-sm font-medium text-purplish-blue">+$30/mo</span>
      </div>
    </div>
  );
};

export default Addons;
