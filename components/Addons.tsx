"use client";
import { useEffect } from "react";

const Addons = () => {
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
    </div>
  );
};

export default Addons;
