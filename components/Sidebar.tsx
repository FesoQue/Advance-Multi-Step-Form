"use client";

type NavTypes = {
  currentStepIndex: number;
  gotoForm?: (index: number) => void;
};

const Sidebar = ({ currentStepIndex }: NavTypes) => {
  return (
    <header className="h-[200px] bg-bg-mobile bg-cover bg-center md:h-auto md:rounded-xl md:bg-bg-desktop md:px-8 ">
      <div className="flex h-full w-full justify-center space-x-6 pt-10  md:w-[220px] md:flex-col md:justify-start md:space-x-0 md:space-y-8">
        {["Your Info", "Select Plan", "Add-on", "summary"].map((btn, i) => {
          let position;
          if (i === currentStepIndex) {
            position = "active";
          }

          return (
            <div className="md:flex md:items-center" key={btn}>
              <button
                className={`${position} flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white text-white transition-all md:mr-5`}
              >
                {i + 1}
              </button>
              <div className="hidden md:block">
                <p className="text-sm font-light uppercase text-light-gray">
                  step {i + 1}
                </p>
                <p className="text-base font-medium uppercase text-white">
                  {btn}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Sidebar;
