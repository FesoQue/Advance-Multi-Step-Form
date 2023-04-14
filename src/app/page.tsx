"use client";

import Sidebar from "../../components/Sidebar";
import PersonalInfo from "../../components/PersonalInfo";
import BillingPlan from "../../components/BillingPlan";
import Addons from "../../components/Addons";
import Finish from "../../components/Finish";
import Success from "../../components/Success";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const {
    nextStep,
    isLastStep,
    gotoForm,
    isFirstStep,
    isSuccess,
    currentStepIndex,
    previousStep,
  } = useMultistepForm(4);

  const handleFormData = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <main className="h-screen md:grid md:place-items-center md:bg-lighter-blue">
      <div
        className="min-h-screen w-full overflow-hidden bg-magnolia md:mx-auto md:flex md:h-auto md:min-h-[515px] md:w-[768px] md:max-w-[1024px] md:rounded-2xl md:bg-white md:p-2 lg:w-auto"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <Sidebar currentStepIndex={currentStepIndex} gotoForm={gotoForm} />
        <div className="-mt-[85px] px-4 pb-10 md:-mt-[0px] md:pb-0">
          <section className="overflow-hidden rounded-xl bg-white px-6 py-8 md:h-[500px] md:px-6 lg:min-w-[600px] lg:px-14">
            {isSuccess ? (
              <AnimatePresence mode="wait">
                <Success gotoForm={gotoForm} />
              </AnimatePresence>
            ) : (
              <form onSubmit={handleFormData}>
                <AnimatePresence mode="wait">
                  {currentStepIndex === 0 && <PersonalInfo key={"step1"} />}
                  {currentStepIndex === 1 && <BillingPlan key={"step2"} />}
                  {currentStepIndex === 2 && <Addons key={"step3"} />}
                  {currentStepIndex === 3 && (
                    <Finish gotoForm={gotoForm} key={"step4"} />
                  )}
                </AnimatePresence>
                <div className="mt-10 flex items-center justify-between">
                  {isSuccess ? (
                    ""
                  ) : (
                    <>
                      <button
                        className="font-semibold text-cool-gray"
                        onClick={previousStep}
                      >
                        {isFirstStep ? "" : "Go Back"}
                      </button>
                      <button
                        className="grid h-[45px] min-w-[110px] place-items-center rounded bg-marine-blue font-semibold text-white"
                        onClick={nextStep}
                      >
                        {isLastStep ? "Confirm" : "Next Step"}
                      </button>
                    </>
                  )}
                </div>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
