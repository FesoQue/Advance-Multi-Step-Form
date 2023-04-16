import { z } from "zod";

export const SiteConfigSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string(),
  links: z.object({
    github: z.string(),
  }),
});

export type GotoProp = {
  status?: string;
  gotoForm: (index: number) => void;
};

export const UserFormSchema = z.object({
  userName: z
    .string()
    .min(3, { message: "name is too short" })
    .max(20, { message: "name is too long" }),
  userEmail: z.string().email({ message: "Invalid email address" }),
  userPhone: z.string().min(11, { message: "enter valid phone number" }),
});

export const BillingSchema = z.object({
  planSelected: z.union([
    z.literal("arcade"),
    z.literal("advanced"),
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

export type FormItems = z.infer<typeof BillingSchema>;
export type UserDetails = z.infer<typeof UserFormSchema>;
