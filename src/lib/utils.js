import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { withFluid } from "@fluid-tailwind/tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs), withFluid);
}
