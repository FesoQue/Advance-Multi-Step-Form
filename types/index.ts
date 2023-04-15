export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  links: {
    github: string;
  };
};

export type MultistepProp = {
  currentStepIndex: number;
};

export type GotoProp = {
  status?: string;
  gotoForm: (index: number) => void;
};
