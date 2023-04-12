import React, { useState } from "react";

export const useMultistepForm = (step: number) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(1);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const nextStep = () => {
    if (currentStepIndex < step - 1) {
      setCurrentStepIndex((i) => i + 1);
    }
    if (currentStepIndex === 3) {
      setIsSuccess(true);
    }
  };

  const previousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((i) => i - 1);
    }
  };

  const gotoForm = (index: number) => {
    setCurrentStepIndex(index);
  };

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === step - 1;

  return {
    currentStepIndex,
    nextStep,
    previousStep,
    gotoForm,
    isFirstStep,
    isLastStep,
    isSuccess,
  };
};
