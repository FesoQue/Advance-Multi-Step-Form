"use client";
import { useMultistepForm } from "../hooks/useMultistepForm";

const Nav = () => {
  const { isLastStep, gotoForm, currentStepIndex } = useMultistepForm(5);
  console.log(currentStepIndex);

  return (
    <header className="min-h-[200px] bg-bg-mobile bg-cover bg-center">
      <div className="flex justify-center space-x-6 pt-10">
        {/* <div> */}
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
        {/* </div> */}
      </div>
    </header>
  );
};

export default Nav;
