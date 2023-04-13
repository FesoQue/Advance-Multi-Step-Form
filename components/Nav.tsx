"use client";
import { FC, ReactElement } from "react";
import { useMultistepForm } from "../hooks/useMultistepForm";

type NavTypes = {
  currentStepIndex: number;
  gotoForm: (index: number) => void;
};

const Nav = ({ currentStepIndex, gotoForm }: NavTypes) => {
  return (
    <header className="h-[200px] bg-bg-mobile bg-cover bg-center md:h-auto md:rounded-xl md:bg-bg-desktop ">
      <div className="flex h-full w-full justify-center space-x-6 pt-10">
        {[1, 2, 3, 4].map((btn, i) => {
          let position;
          if (i === currentStepIndex) {
            position = "active";
          }

          return (
            <button
              className={`${position} grid h-[40px] w-[40px] place-items-center rounded-full border border-white text-white`}
              key={btn}
              onClick={() => gotoForm(i)}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default Nav;
