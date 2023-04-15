import { z } from "zod";

export const SiteConfigSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string(),
  links: z.object({
    github: z.string(),
  }),
});

export const FormSchema = z.object({
  userName: z
    .string()
    .min(3, { message: "name too short" })
    .max(20, { message: "name too long" }),
  userEmail: z.string().email({ message: "invalid email address" }),
  userPhoneNum: z.string(),
  planSelected: z.union([
    z.literal("arcade"),
    z.literal("advance"),
    z.literal("pro"),
  ]),
  yearly: z.boolean(),
  addOns: z
    .object({
      id: z.number(),
      checked: z.boolean(),
      title: z.string(),
      subtitle: z.string(),
      price: z.number(),
    })
    .array(),
});

export type GotoProp = {
  status?: string;
  gotoForm: (index: number) => void;
};
