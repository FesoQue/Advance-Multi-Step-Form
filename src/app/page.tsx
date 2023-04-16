"use client";

import Sidebar from "../../components/Sidebar";
import PersonalInfo from "../../components/PersonalInfo";
import BillingPlan from "../../components/BillingPlan";
import Addons from "../../components/Addons";
import Review from "../../components/Review";
import Success from "../../components/Success";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { AnimatePresence } from "framer-motion";
import { UserFormSchema, UserDetails } from "../../types";
import { useRef, useState } from "react";
import { FormItems } from "../../types";

export default function Home() {
  const {
    nextStep,
    isLastStep,
    gotoForm,
    isFirstStep,
    isSuccess,
    currentStepIndex,
    previousStep,
    status,
  } = useMultistepForm(4);

  const InitialValues: FormItems = {
    planSelected: "arcade",
    yearly: false,
    addOns: [
      {
        id: 1,
        checked: true,
        title: "Online Service",
        subtitle: "Access to multiple games",
        price: 1,
      },
      {
        id: 2,
        checked: false,
        title: "Large storage",
        subtitle: "Extra 1TB of cloud save",
        price: 2,
      },
      {
        id: 3,
        checked: false,
        title: "Customizable Profile",
        subtitle: "Custom theme on your profile",
        price: 2,
      },
    ],
  };

  const [formData, setFormData] = useState(InitialValues);

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);

  const nameErr = useRef<HTMLSpanElement>(null);
  const emailErr = useRef<HTMLSpanElement>(null);
  const phoneErr = useRef<HTMLSpanElement>(null);

  const validateUserForm = (data: UserDetails) => {
    const parsedValues = UserFormSchema.safeParse(data);
    if (!parsedValues.success) {
      const formatted = parsedValues.error.format();
      if (nameErr?.current !== null) {
        nameErr.current.textContent =
          formatted.userName?._errors?.toString() || "";
      }
      if (emailErr?.current !== null) {
        emailErr.current.textContent =
          formatted.userEmail?._errors?.toString() || "";
      }
      if (phoneErr?.current !== null) {
        phoneErr.current.textContent =
          formatted.userPhone?._errors?.toString() || "";
      }
      return formatted;
    }

    return parsedValues.data;
  };

  const updateFormData = (updateField: Partial<FormItems>) => {
    setFormData({ ...formData, ...updateField });
  };

  const handleFormData = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const addUserInfo = validateUserForm({
      userName: name.current?.value || "",
      userEmail: email.current?.value || "",
      userPhone: phone.current?.value || "",
    });

    if (
      currentStepIndex === 0 &&
      typeof addUserInfo.userName === "string" &&
      typeof addUserInfo.userEmail === "string" &&
      typeof addUserInfo.userPhone === "string"
    ) {
      nextStep();
    } else if (currentStepIndex > 0) {
      nextStep();
    }
  };

  return (
    <main className="h-screen md:grid md:place-items-center md:bg-lighter-blue">
      <div
        className="min-h-screen w-full overflow-hidden bg-magnolia md:mx-auto md:flex md:h-auto md:min-h-[515px] md:w-[768px] md:max-w-[1024px] md:rounded-2xl md:bg-white md:p-2 lg:w-auto"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <Sidebar currentStepIndex={currentStepIndex} />
        <div className="-mt-[85px] px-4 pb-10 md:-mt-[0px] md:pb-0">
          <section className="overflow-hidden rounded-xl bg-white px-6 py-8 md:h-[500px] md:px-6 lg:w-[550px] lg:px-14">
            {isSuccess ? (
              <AnimatePresence mode="wait">
                <Success gotoForm={gotoForm} />
              </AnimatePresence>
            ) : (
              <form onSubmit={handleFormData}>
                <AnimatePresence mode="wait" custom={status}>
                  {currentStepIndex === 0 && (
                    <PersonalInfo
                      key={"step1"}
                      status={status}
                      name={name}
                      email={email}
                      phone={phone}
                      nameErr={nameErr}
                      emailErr={emailErr}
                      phoneErr={phoneErr}
                    />
                  )}
                  {currentStepIndex === 1 && (
                    <BillingPlan
                      key={"step2"}
                      status={status}
                      {...formData}
                      updateForm={updateFormData}
                    />
                  )}
                  {currentStepIndex === 2 && (
                    <Addons
                      key={"step3"}
                      status={status}
                      {...formData}
                      updateForm={updateFormData}
                    />
                  )}
                  {currentStepIndex === 3 && (
                    <Review
                      gotoForm={gotoForm}
                      key={"step4"}
                      status={status}
                      {...formData}
                    />
                  )}
                </AnimatePresence>
                <div className="mt-10 flex items-center justify-between">
                  {isSuccess ? (
                    ""
                  ) : (
                    <>
                      <button
                        type="button"
                        className="font-semibold text-cool-gray"
                        onClick={previousStep}
                      >
                        {isFirstStep ? "" : "Go Back"}
                      </button>
                      <button
                        type="submit"
                        className="grid h-[45px] min-w-[110px] place-items-center rounded bg-marine-blue font-semibold text-white"
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
