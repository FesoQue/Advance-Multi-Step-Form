"use client";

import Nav from "../../components/Nav";
import PersonalInfo from "../../components/PersonalInfo";
import BillingPlan from "../../components/BillingPlan";
import Addons from "../../components/Addons";
import Finish from "../../components/Finish";
import Success from "../../components/Success";
import { useMultistepForm } from "../../hooks/useMultistepForm";

export default function Home() {
  const {
    nextStep,
    isLastStep,
    gotoForm,
    isFirstStep,
    isSuccess,
    currentStepIndex,
  } = useMultistepForm(5);

  return (
    <main className="min-h-screen bg-magnolia">
      <Nav />
      <div className="-mt-[86px] px-4 pb-10">
        <section className="rounded-xl bg-white px-6 pb-8 pt-10">
          {/* <PersonalInfo /> */}
          {/* <BillingPlan /> */}
          {/* <Addons /> */}
          {/* <Finish /> */}
          <Success />
        </section>
        <div className="mt-10 flex items-center justify-between">
          <button className="font-semibold text-cool-gray">Go Back</button>
          <button className="grid h-[45px] min-w-[110px] place-items-center rounded bg-marine-blue font-semibold text-white">
            Next Step
          </button>
        </div>
      </div>
    </main>
  );
}
