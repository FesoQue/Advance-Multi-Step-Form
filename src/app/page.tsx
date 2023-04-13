"use client";

import Nav from "../../components/Nav";
import PersonalInfo from "../../components/PersonalInfo";
import BillingPlan from "../../components/BillingPlan";
import Addons from "../../components/Addons";
import Finish from "../../components/Finish";
import Success from "../../components/Success";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { Sidebar } from "lucide-react";

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
    <main className="h-screen md:grid md:place-items-center">
      <div
        className="min-h-screen w-full overflow-hidden bg-magnolia md:mx-auto md:flex md:h-auto md:min-h-[515px] md:w-auto md:max-w-[1024px] md:rounded-2xl md:bg-white md:p-2"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <Nav currentStepIndex={currentStepIndex} gotoForm={gotoForm} />
        <div className="-mt-[85px] px-4 pb-10 md:-mt-[0px] md:pb-0">
          <section className="rounded-xl bg-white px-6 py-8">
            {isSuccess ? (
              <Success />
            ) : (
              <form
                onSubmit={handleFormData}
                className="md:px-6 lg:min-w-[580px] lg:px-14"
              >
                <div>
                  {currentStepIndex === 0 && <PersonalInfo />}
                  {currentStepIndex === 1 && <BillingPlan />}
                  {currentStepIndex === 2 && <Addons />}
                  {currentStepIndex === 3 && <Finish gotoForm={gotoForm} />}
                </div>
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
